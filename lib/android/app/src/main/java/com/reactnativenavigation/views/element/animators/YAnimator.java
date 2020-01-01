package com.reactnativenavigation.views.element.animators;

import android.animation.Animator;
import android.animation.ObjectAnimator;
import android.graphics.Point;
import android.view.View;

import com.facebook.react.views.text.ReactTextView;
import com.reactnativenavigation.utils.ViewUtils;
import com.reactnativenavigation.views.ComponentLayout;

import java.util.Collections;
import java.util.List;

public class YAnimator extends PropertyAnimatorCreator<View> {

    private final int dy;

    public YAnimator(View from, View to) {
        super(from, to);
        final Point fromXy = ViewUtils.getLocationOnScreen(from);
        final Point toXy = ViewUtils.getLocationOnScreen(to);
        View fromComponent = ViewUtils.findParent(from, ComponentLayout.class);
        dy = (int) (fromXy.y - toXy.y - fromComponent.getY());
    }

    @Override
    protected List<Class> excludedViews() {
        return Collections.singletonList(ReactTextView.class);
    }

    @Override
    public boolean shouldAnimateProperty(View fromChild, View toChild) {
        return dy != 0;
    }

    @Override
    public Animator create() {
        return ObjectAnimator.ofFloat(to, View.TRANSLATION_Y, dy, 0);
    }
}
