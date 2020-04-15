import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import Button from '../../atoms/button';
import Loading from '../../atoms/loading';

export function Delete({
    flow,
    flows,
    setFlows,
    closeModal
}) {
    const [loading, setLoading] = useState(false);

    const deleteFlow = () => {
        setLoading(true);

        api.delete(`flows/${flow.id}`, {})
            .then(() => {
                setFlows(flows.filter(record => {
                    return record.id !== flow.id;
                }));

                closeModal();
            });
    }

    return (
        <div>
            <div className="my-2">You really want to remove the flow '{flow.title}'?</div>
            <div className="flex justify-end mt-3">
                {loading ? <Loading style={{ marginRight: '.75rem', width: '35px' }} /> : ''}
                <Button className="bg-red-500 button mr-3" onClick={deleteFlow}>
                    Confirm
                </Button>
            </div>
        </div>
    );
}

export default function Form({
    flow = null,
    flows,
    setFlows,
    closeModal,
    openDeleteDialog
}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const createFlow = (event) => {
        event.preventDefault();
        setLoading(true);

        api.post('flows', { title, description })
            .then(({ data: { data: flow } }) => {
                setFlows([
                    ...flows,
                    flow
                ]);

                setLoading(false);
                closeModal();
            });
    }

    const updateFlow = (event) => {
        event.preventDefault();
        setLoading(true);

        api.put(`flows/${flow.id}`, { title, description })
            .then(({ data: { data: flow } }) => {
                setFlows(flows.map(record => {
                    if (record.id === flow.id) return flow;
                    return record;
                }));

                setLoading(false);
                closeModal();
            });
    }

    useEffect(() => {
        setTitle(flow ? flow.title : '');
        setDescription(flow ? flow.description : '');
    }, [flow]);

    return (
        <form onSubmit={flow ? updateFlow : createFlow}>
            <div className="my-2">
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    className="input ml-3"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
            </div>
            <div className="my-2">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    className="input mt-3"
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                />
            </div>
            <div className="flex justify-end mt-3">
                {loading ? <Loading style={{ marginRight: '.75rem', width: '35px' }} /> : ''}
                {
                    flow ?
                        <>
                            <Button className="bg-red-500 button mr-3" onClick={() => openDeleteDialog(flow)}>
                                Delete
                            </Button>
                            <Button className="bg-blue-500 button" type="submit">
                                Update
                            </Button>
                        </>
                        :
                        <Button className="bg-green-500 button" type="submit">
                            Create
                        </Button>
                }
            </div>
        </form>
    );
}