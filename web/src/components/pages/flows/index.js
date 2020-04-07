import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi'

import api from '../../../services/api';
import Header from '../../organisms/header';
import Button from '../../atoms/button';
import Flow from '../../organisms/flow';
import { openNewDialog } from '../../organisms/flow/dialogs';
import Modal, { useModalState } from '../../organisms/modal';

export default function FlowsPage() {
    const ModalState = useModalState();

    const [flows, setFlows] = useState([]);

    useEffect(() => {
        api.get('flows').then(({ data }) => {
            setFlows(data);
        });
    }, []);

    const buttons = [
        <Button className="bg-green-500 button shadow" onClick={() => openNewDialog(ModalState)}>
            <FiPlus className="mr-1" />
            New Flow
        </Button>
    ];

    return (
        <main>
            <Modal title={ModalState.title} content={ModalState.content} buttons={ModalState.buttons} show={ModalState.show} close={ModalState.close} />
            <Header buttons={buttons} />
            <div>
                {flows.map((flow) => (
                    <Flow key={flow.id} flow={flow} ModalState={ModalState} />
                ))}
            </div>
        </main>
    );
}
