import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function RegularIceIcon(props?: any) {
    const DEFAULT_COLOR = '#D8D8D8';
    const fillColor = props.color || DEFAULT_COLOR;
    return (
        <Svg
            width={29}
            height={20}
            viewBox='0 0 29 20'
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
            <Rect
                x={15.85}
                y={6.85}
                width={12.3}
                height={12.3}
                rx={3.15}
                stroke={fillColor}
                strokeWidth={1.7}
            />
        </Svg>
    );
}

export default RegularIceIcon;
