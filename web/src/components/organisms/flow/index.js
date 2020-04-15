import React, { useState } from 'react';
import { FiEdit2, FiTrash, FiPlus } from 'react-icons/fi';

import Button from '../../atoms/button';
import Task from '../../organisms/task';

import Container, { TasksContainer } from './styles';
import Dialog from './dialogs';
import { openNewDialog } from '../task/dialogs';

export default function Flow({ flow, flows, setFlows, modal }) {
    const [openTasks, setOpenTasks] = useState(false);
    const [tasks, setTasks] = useState(flow.tasks);

    const dialog = new Dialog(modal, { flows, setFlows });

    return (
        <Container className="shadow">
            <div className="bg-gray-100 flex justify-between px-3 py-2">
                <button className="flex-1 mr-1 sm:mr-2 text-left" onClick={() => setOpenTasks(!openTasks)}>{flow.title}</button>
                <div className="flex">
                    <Button className="bg-blue-500 button mr-1 sm:mr-2 shadow" onClick={() => dialog.openEditDialog(flow)}>
                        <FiEdit2 className="mr-1" />
                        <span className="hidden sm:inline">
                            Edit
                        </span>
                    </Button>
                    <Button className="bg-green-500 button shadow" onClick={() => openNewDialog(modal)}>
                        <FiPlus className="mr-1" />
                        <span className="hidden sm:inline">
                            Add Task
                        </span>
                    </Button>
                </div>
            </div>
            <TasksContainer className="dark scrollbar" style={{ maxHeight: openTasks ? '60vh' : '0' }}>
                <div className="flex items-start mx-5 my-6">
                    {tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            modal={modal}
                        />
                    ))}
                </div>
            </TasksContainer>
        </Container>
    );
}
