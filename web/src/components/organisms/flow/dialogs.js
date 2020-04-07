import Form from "./forms";

export const openNewDialog = (ModalState) => {
    const content = Form();

    ModalState.setTitle('New Flow');
    ModalState.setContent(content.form);
    ModalState.setButtons(content.buttons);

    ModalState.open();
}

export const openEditDialog = (ModalState, flow) => {
    const content = Form({ flow, data: ModalState.data, setData: ModalState.setData });

    ModalState.setTitle('Edit Flow');
    ModalState.setContent(content.form);
    ModalState.setButtons(content.buttons);

    ModalState.open();
}

export const openDeleteDialog = (ModalState) => {

}
