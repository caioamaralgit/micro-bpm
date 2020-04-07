import React, { useState } from 'react';

import Container from './styles';

export default function Role() {
    const [showComplete, setShowComplete] = useState(false);

    return (
        <Container className="shadow" onMouseOver={() => setShowComplete(true)} onMouseOut={() => setShowComplete(false)}>
            {showComplete ? <span>General</span> : <span>GE</span>}
        </Container>
    );
}
