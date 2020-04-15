import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi'

import api from '../../../services/api';
import Header from '../../organisms/header';
import Button from '../../atoms/button';
import Flow from '../../organisms/flow';
import Dialog from '../../organisms/flow/dialogs';
import Modal, { useModalState } from '../../organisms/modal';

export default function FlowsPage() {
    const modalState = useModalState();

    const [flows, setFlows] = useState([]);

    const flowState = {
        flows,
        setFlows
    };

    const dialog = new Dialog(modalState, flowState);

    useEffect(() => {
        api.get('flows').then(({ data }) => {
            setFlows(data);
        });
    }, []);

    const buttons = [
        <Button className="bg-green-500 button shadow" onClick={dialog.openNewDialog}>
            <FiPlus className="mr-1" />
            New Flow
        </Button>
    ];

    return (
        <main>
            <Modal title={modalState.title} content={modalState.content} show={modalState.show} close={modalState.close} />
            <Header buttons={buttons} />
            <div>
                {flows.map((flow) => (
                    <Flow
                        key={flow.id}
                        flow={flow}
                        flows={flows}
                        setFlows={setFlows}
                        modal={modalState}
                    />
                ))}
            </div>
        </main>
    );
}
