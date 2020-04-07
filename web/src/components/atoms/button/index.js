import React from 'react';

import Container from './styles';

export default function Button({ children, className, onClick, styles }) {
    return (
        <Container className={className} styles={styles} onClick={onClick}>
            {children}
        </Container>
    );
}
