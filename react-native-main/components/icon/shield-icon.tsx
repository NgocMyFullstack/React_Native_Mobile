import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ShieldIcon(props?: any) {
    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='lucide lucide-shield-check'
            {...props}
        >
            <Path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10' />
            <Path d='M9 12l2 2 4-4' />
        </Svg>
    );
}

export default ShieldIcon;