import React, { useState } from 'react';

import Container from './styles';
import Overlay from '../../atoms/overlay';
import Button from '../../atoms/button';
import { FiX } from 'react-icons/fi';

export function useModalState() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(null);
    const [buttons, setButtons] = useState(null);

    const open = () => setShow(true);
    const close = () => setShow(false);

    return {
        show, open, close,
        title, setTitle,
        content, setContent,
        buttons, setButtons
    }
}

export default function Modal({
    buttons,
    close,
    content,
    show = false,
    title
}) {
    return (
        <div className={show ? "block" : "hidden"}>
            <Overlay />
            <Container className="p-5 shadow-xl">
                <header className="flex justify-between">
                    <h1 className="font-bold">{title}</h1>
                    <Button onClick={close}>
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
