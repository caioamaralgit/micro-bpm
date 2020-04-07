import React, { useState } from 'react';

import Container from './styles';
import Overlay from '../../atoms/overlay';
import Button from '../../atoms/button';
import { FiX } from 'react-icons/fi';

export default function Modal({ buttons, content, title }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={showModal ? "block" : "hidden"}>
            <Overlay />
            <Container className="p-5 shadow-xl">
                <header className="flex justify-between">
                    <h1 className="font-bold">{title}</h1>
                    <Button onClick={() => setShowModal(false)}>
                        <FiX size="18" />
                    </Button>
                </header>
                <div className="font-light my-3">
                    {content}
                </div>
                <footer className="flex justify-end">
                    {buttons}
                </footer>
            </Container>
        </div>
    );
}
