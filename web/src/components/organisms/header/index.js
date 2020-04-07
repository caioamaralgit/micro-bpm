import React from 'react';

import Logo from '../../atoms/logo';
import Container from './styles';

export default function Header({ buttons }) {
    return (
        <Container className="shadow">
            <Logo />
            <div>{buttons}</div>
        </Container>
    );
}
