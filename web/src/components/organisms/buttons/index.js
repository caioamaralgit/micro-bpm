import React from 'react';
import { FiPlus } from 'react-icons/fi';

import Container from './styles';
import Button from '../../atoms/button';
import ButtonLine from '../../molecules/button-line';

export default function Buttons({ buttons }) {
    return (
        <Container>
            <div>
                <Button className="bg-green-500 button float-right my-2">
                    <FiPlus className="mr-1" />
                    New Button
                </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
                {buttons.map(button => (
                    <ButtonLine key={button.id} button={button} />
                ))}
            </div>
        </Container>
    );
}
