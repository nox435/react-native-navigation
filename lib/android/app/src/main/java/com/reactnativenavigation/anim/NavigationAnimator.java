package com.reactnativenavigation.anim;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.AnimatorSet;
import android.content.Context;
import android.view.View;

import com.reactnativenavigation.parse.AnimationOptions;
import com.reactnativenavigation.parse.FadeAnimation;
import com.reactnativenavigation.parse.NestedAnimationsOptions;
import com.reactnativenavigation.parse.Options;
import com.reactnativenavigation.viewcontrollers.ViewController;
import com.reactnativenavigation.views.element.ElementTransitionManager;

import java.util.HashMap;
import java.util.Map;

import androidx.annotation.RestrictTo;

@SuppressWarnings("ResourceType")
public class NavigationAnimator extends BaseAnimator {

    private final ElementTransitionManager transitionManager;
    private Map<View, Animator> runningPushAnimations = new HashMap<>();

    public NavigationAnimator(Context context, ElementTransitionManager transitionManager) {
        super(context);
        this.transitionManager = transitionManager;
    }

    public void push(ViewController appearing, ViewController disappearing, Options options, Runnable onAnimationEnd) {
        appearing.getView().setAlpha(0);
        transitionManager.createTransitions(
                options.animations.push.sharedElements,
                disappearing,
                appearing,
                transitionSet -> {
                    AnimatorSet set = new AnimatorSet();
                    runningPushAnimations.put(appearing.getView(), set);
                    set.addListener(new AnimatorListenerAdapter() {
                        private boolean isCancelled;

                        @Override
                        public void onAnimationStart(Animator animation) {
                            appearing.getView().setAlpha(1);
                        }

                        @Override
                        public void onAnimationCancel(Animator animation) {
                            isCancelled = true;
                            runningPushAnimations.remove(appearing.getView());
                            onAnimationEnd.run();
                        }

                        @Override
                        public void onAnimationEnd(Animator animation) {
                            if (!isCancelled) {
                                runningPushAnimations.remove(appearing.getView());
                                onAnimationEnd.run();
                            }
                        }
                    });


                    if (transitionSet.isEmpty()) {
                        set.playTogether(options.animations.push.content.getAnimation(appearing.getView(), getDefaultPushAnimation(appearing.getView())));
                        set.start();
                    } else {
                        appearing.addOnAppearedListener(() -> {
                            AnimationOptions fade = new FadeAnimation().content;
                            AnimatorSet transitions = transitionManager.createAnimators(appearing, fade, transitionSet);
                            set.playTogether(fade.getAnimation(appearing.getView()), transitions);
                            set.start();
                        });
                    }
                }
        );
    }

    public void pop(View view, NestedAnimationsOptions pop, Runnable onAnimationEnd) {
        if (runningPushAnimations.containsKey(view)) {
            runningPushAnimations.get(view).cancel();
            onAnimationEnd.run();
            return;
        }
        AnimatorSet set = pop.content.getAnimation(view, getDefaultPopAnimation(view));
        set.addListener(new AnimatorListenerAdapter() {
            private boolean cancelled;

            @Override
            public void onAnimationCancel(Animator animation) {
                this.cancelled = true;
            }

            @Override
            public void onAnimationEnd(Animator animation) {
                if (!cancelled) onAnimationEnd.run();
            }
        });
        set.start();
    }

    public void setRoot(View root, AnimationOptions setRoot, Runnable onAnimationEnd) {
        root.setVisibility(View.INVISIBLE);
        AnimatorSet set = setRoot.getAnimation(root);
        set.addListener(new AnimatorListenerAdapter() {
            @Override
            public void onAnimationStart(Animator animation) {
                root.setVisibility(View.VISIBLE);
            }

            @Override
            public void onAnimationEnd(Animator animation) {
                onAnimationEnd.run();
            }
        });
        set.start();
    }

    public void cancelPushAnimations() {
        for (View view : runningPushAnimations.keySet()) {
            runningPushAnimations.get(view).cancel();
            runningPushAnimations.remove(view);
        }
    }

    @RestrictTo(RestrictTo.Scope.TESTS)
    public void endPushAnimation(View view) {
        if (runningPushAnimations.containsKey(view)) {
            runningPushAnimations.get(view).end();
        }
    }
}
