import React from 'react';

import Image from './styles';
import loadingSrc from '../../../assets/loading.gif';

export default function Loading({ style }) {
    return (
        <Image src={loadingSrc} style={style} />
    );
}
