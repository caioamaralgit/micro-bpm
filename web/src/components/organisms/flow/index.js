import React, { useState } from 'react';
import { FiEdit2, FiTrash, FiPlus } from 'react-icons/fi';

import Button from '../../atoms/button';
import Task from '../../organisms/task';

import Container, { TasksContainer } from './styles';

export default function Flow({ flow, ModalState }) {
    const [openTasks, setOpenTasks] = useState(false);
    const [tasks, setTasks] = useState(flow.tasks);

    return (
        <Container className="shadow">
            <div className="bg-gray-100 flex justify-between px-3 py-2">
                <button className="flex-1 mr-1 sm:mr-2 text-left" onClick={() => setOpenTasks(!openTasks)}>{flow.title}</button>
                <div className="flex">
                    <Button className="bg-blue-500 button mr-1 sm:mr-2 shadow">
                        <FiEdit2 className="mr-1" />
                        <span className="hidden sm:inline">
                            Edit
                        </span>
                    </Button>
                    <Button className="bg-blue-500 button mr-1 sm:mr-2 shadow">
                        <FiTrash className="mr-1" />
                        <span className="hidden sm:inline">
                            Remove
                        </span>
                    </Button>
                    <Button className="bg-green-500 button shadow" onClick={ModalState.open}>
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
                        />
                    ))}
                </div>
            </TasksContainer>
        </Container>
    );
}
