import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function OnSiteIcon(props?: any) {
    const DEFAULT_COLOR = '#D8D8D8';
    const fillColor = props.color || DEFAULT_COLOR;

    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            width={28}
            height={27}
            viewBox='0 0 28 27'
            fill='none'
            {...props}
        >
            <Path
                d='M24.365 14.081h-1.934l.102-2.145a.89.89 0 00-.89-.932H2.064a.89.89 0 00-.89.932l.396 8.29a5.251 5.251 0 003.115 4.556H.89a.89.89 0 000 1.78h22.052a.89.89 0 000-1.78h-3.92a5.255 5.255 0 002.939-3.431h2.404A3.639 3.639 0 0028 17.715a3.639 3.639 0 00-3.635-3.635zm-7.48 9.373H6.821a3.474 3.474 0 01-3.474-3.313l-.35-7.358H20.71l-.35 7.358a3.474 3.474 0 01-3.475 3.313zm7.48-3.884H22.17l.177-3.71.04.002h1.98c1.022 0 1.854.831 1.854 1.854a1.856 1.856 0 01-1.855 1.854zM9.238 9.544a.886.886 0 001.219-.313.89.89 0 00-.314-1.219c-.494-.293-.836-.832-.938-1.48-.106-.676.07-1.348.472-1.799l.01-.012.29-.334c.823-.946 1.675-1.923 1.92-3.346A.89.89 0 1010.141.74c-.16.931-.785 1.648-1.508 2.479l-.294.339c-.746.844-1.08 2.058-.894 3.25.184 1.175.837 2.173 1.792 2.737zM12 7.535c.294.756.818 1.45 1.477 1.951a.889.889 0 101.08-1.416 2.81 2.81 0 01-.897-1.18c-.347-.893-.019-1.784 1.1-2.977.791-.846 1.298-1.843 1.464-2.883a.89.89 0 00-1.758-.28c-.112.697-.45 1.352-1.006 1.946-.584.623-2.36 2.52-1.46 4.839z'
                fill={fillColor}
            />
        </Svg>
    );
}

export default OnSiteIcon;
