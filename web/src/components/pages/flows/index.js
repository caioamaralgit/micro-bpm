import React from 'react';
import { FiPlus } from 'react-icons/fi'

import Header from '../../organisms/header';
import Button from '../../atoms/button';
import Flow from '../../organisms/flow';

export default function FlowsPage({ children, className, styles }) {
    const buttons = [
        <Button className="bg-green-500 button shadow">
            <FiPlus className="mr-1" />
            New Flow
        </Button>
    ];

    const flows = [
        <Flow />
    ];

    return (
        <main>
            <Header buttons={buttons} />
            <div>
                {flows.map((flow) => (flow))}
            </div>
        </main>
    );
}
