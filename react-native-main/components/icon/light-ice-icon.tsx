import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function LightIceIcon(props?: any) {
    const DEFAULT_COLOR = '#D8D8D8';
    const fillColor = props.color || DEFAULT_COLOR;
    return (
        <Svg
            width={14}
            height={14}
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <Rect
                x={0.85}
                y={0.85}
                width={12.3}
                height={12.3}
                rx={3.15}
                stroke={fillColor}
                strokeWidth={1.7}
            />
        </Svg>
    );
}

export default LightIceIcon;
