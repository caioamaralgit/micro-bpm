import React from 'react';
import Form, { Delete } from "./forms";

export default class Dialog {
    constructor(modal, contentState) {
        this.modal = modal;
        this.contentState = contentState;
    }

    openNewDialog = () => {
        const data = {
            title: 'New Flow',
            content: <Form
                flows={this.contentState.flows}
                setFlows={this.contentState.setFlows}
                closeModal={this.modal.close}
            />
        };

        this.modal.updateAndShow(data);
    }

    openEditDialog = (flow) => {
        const data = {
            title: 'Edit Flow',
            content: <Form
                flow={flow}
                flows={this.contentState.flows}
                setFlows={this.contentState.setFlows}
                closeModal={this.modal.close}
                openDeleteDialog={this.openDeleteDialog}
            />
        };

        this.modal.updateAndShow(data);
    }

    openDeleteDialog = (flow) => {
        const data = {
            title: 'Delete Flow',
            content: <Delete
                flow={flow}
                flows={this.contentState.flows}
                setFlows={this.contentState.setFlows}
                closeModal={this.modal.close}
            />
        };

        this.modal.updateAndShow(data);
    }
}
