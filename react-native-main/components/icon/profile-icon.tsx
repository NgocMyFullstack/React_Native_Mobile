import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';

function ProfileIcon(props?: any) {
    const width = props.width || 18;
    const height = props.height || 22;

    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox='0 0 18 22'
            fill='none'
            {...props}
        >
            <Mask id='a' maskUnits='userSpaceOnUse' x={0} y={13} width={18} height={9}>
                <Path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M.333 13.704h17.16v7.989H.333v-7.989z'
                    fill='#fff'
                />
            </Mask>
            <G mask='url(#a)'>
                <Path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.914 15.33c-4.616 0-6.956.792-6.956 2.357 0 1.58 2.34 2.38 6.956 2.38 4.615 0 6.954-.792 6.954-2.358 0-1.58-2.339-2.38-6.954-2.38zm0 6.363c-2.122 0-8.58 0-8.58-4.006 0-3.57 4.897-3.983 8.58-3.983 2.123 0 8.58 0 8.58 4.005 0 3.57-4.897 3.984-8.58 3.984z'
                    fill='#001833'
                />
            </G>
            <Mask id='b' maskUnits='userSpaceOnUse' x={3} y={0} width={12} height={12}>
                <Path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3.16.167h11.506V11.67H3.16V.167z'
                    fill='#fff'
                />
            </Mask>
            <G mask='url(#b)'>
                <Path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.914 1.713A4.21 4.21 0 004.708 5.92a4.196 4.196 0 004.175 4.205l.031.774v-.774A4.21 4.21 0 0013.12 5.92a4.21 4.21 0 00-4.205-4.206zm0 9.957H8.88a5.741 5.741 0 01-5.72-5.754c0-3.17 2.581-5.75 5.754-5.75a5.758 5.758 0 015.752 5.753 5.757 5.757 0 01-5.752 5.751z'
                    fill='#001833'
                />
            </G>
        </Svg>
    );
}

export default ProfileIcon;
