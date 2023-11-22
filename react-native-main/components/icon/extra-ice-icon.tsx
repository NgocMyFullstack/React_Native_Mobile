import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function ExtraIceIcon(props?: any) {
    const DEFAULT_COLOR = '#D8D8D8';
    const fillColor = props.color || DEFAULT_COLOR;
    return (
        <Svg
            width={29}
            height={27}
            viewBox='0 0 29 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <Path
                d='M8.85 4A3.15 3.15 0 0112 .85h6A3.15 3.15 0 0121.15 4v6A3.15 3.15 0 0118 13.15h-6A3.15 3.15 0 018.85 10V4z'
                stroke={fillColor}
                strokeWidth={1.7}
            />
            <Rect
                x={15.85}
                y={13.85}
                width={12.3}
                height={12.3}
                rx={3.15}
                stroke={fillColor}
                strokeWidth={1.7}
            />
            <Rect
                x={0.85}
                y={13.85}
                width={12.3}
                height={12.3}
                rx={3.15}
                stroke={fillColor}
                strokeWidth={1.7}
            />
        </Svg>
    );
}

export default ExtraIceIcon;
