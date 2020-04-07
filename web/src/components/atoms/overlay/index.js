import React from 'react';

import Layer from './styles';

export default function Overlay({ zIndex = 100 }) {
    return (
        <Layer styles={{ zIndex }} />
    );
}
