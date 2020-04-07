import React, { useState } from 'react';
import { FiChevronDown, FiPlus } from 'react-icons/fi';

import Container from './styles';
import Button from '../../atoms/button';
import ButtonLine from '../../molecules/button-line';

export default function Buttons() {
    return (
        <Container>
            <div>
                <Button className="bg-green-500 button float-right my-2">
                    <FiPlus className="mr-1" />
                    New Button
                </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(button => (
                    <ButtonLine />
                ))}
            </div>
        </Container>
    );
}
