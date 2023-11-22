import React, { Component, PropsWithChildren } from 'react';
import { Animated, StyleSheet, I18nManager } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Ionicons } from '@expo/vector-icons';

export default class SwipeableRow extends Component<
    PropsWithChildren<unknown & { onDelete: () => void }>
> {
    private renderRightActions = (
        _progress: Animated.AnimatedInterpolation<number>,
        dragX: Animated.AnimatedInterpolation<number>,
    ) => {
        return (
            <RectButton style={styles.rightAction} onPress={this.close}>
                <Ionicons
                    name='trash'
                    size={24}
                    color='#fff'
                    style={{
                        marginRight: 10,
                    }}
                />
            </RectButton>
        );
    };

    private swipeableRow?: Swipeable;

    private updateRef = (ref: Swipeable) => {
        this.swipeableRow = ref;
    };
    private close = () => {
        this.swipeableRow?.close();
        this.props.onDelete();
    };

    render() {
        const { children } = this.props;
        return (
            <Swipeable
                ref={this.updateRef}
                friction={2}
                leftThreshold={80}
                enableTrackpadTwoFingerGesture
                rightThreshold={40}
                renderRightActions={this.renderRightActions}
            >
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    rightAction: {
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        backgroundColor: '#FFE5E5',
        flex: 1,
        height: 110,
        borderRadius: 15,
        justifyContent: 'flex-end',
    },
});
