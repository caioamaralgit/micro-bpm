import React, { useState } from 'react';

import Container from './styles';

export default function Role({ role }) {
    const [showComplete, setShowComplete] = useState(false);

    return (
        <Container
            className="shadow"
            onMouseOver={() => setShowComplete(true)}
            onMouseOut={() => setShowComplete(false)}
            title={role.description}
        >
            {
                showComplete ?
                    <span className="capitalize">{role.title}</span> :
                    <span className="uppercase">{role.title.substring(0, 2)}</span>
            }
        </Container>
    );
}
