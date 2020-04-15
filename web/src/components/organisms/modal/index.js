import React, { useState } from 'react';

import Container from './styles';
import Overlay from '../../atoms/overlay';
import Button from '../../atoms/button';
import { FiX } from 'react-icons/fi';

export function useModalState() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(null);

    const open = () => setShow(true);
    const close = () => setShow(false);

    const updateAndShow = ({ title, content }) => {
        setTitle(title);
        setContent(content);
        setShow(true);
    }

    return {
        show, open, close,
        updateAndShow,
        title, setTitle,
        content, setContent,
    }
}

export default function Modal({
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
                <div className="font-light mt-3">
                    {content}
                </div>
            </Container>
        </div>
    );
}
