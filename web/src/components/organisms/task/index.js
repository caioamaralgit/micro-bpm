import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import Container, { ToggleButtonStyles, LoadingImage } from './styles';
import Button from '../../atoms/button';
import Buttons from '../buttons';
import RolesList from '../../molecules/roles-list';
import api from '../../../services/api';
import loadingSrc from '../../../assets/loading.gif';

export default function Task({ task }) {
    const [openButtons, setOpenButtons] = useState(false);
    const [buttons, setButtons] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleButtonsList = () => {
        setOpenButtons(!openButtons);

        if (buttons.length == 0) loadButtons();
    }

    const loadButtons = () => {
        setLoading(true);

        api.get(`tasks/${task.id}/buttons`).then(({ data }) => {
            setLoading(false);
            setButtons(data);
        });
    }

    return (
        <Container className="overflow-y-auto scrollbar shadow">
            <div className="flex justify-between items-center">
                <h1 className="font-bold">{task.title}</h1>
                <RolesList roles={task.roles} />
            </div>
            <div className="font-light">{task.description}</div>
            <div className="text-right">
                <Button styles={ToggleButtonStyles} onClick={toggleButtonsList}>
                    {openButtons ? <FiChevronUp /> : <FiChevronDown />}
                </Button>
            </div>
            <div className={openButtons ? "block" : "hidden"}>
                <hr />
                {
                    loading ?
                        <LoadingImage src={loadingSrc} /> :
                        <Buttons buttons={buttons} />
                }
            </div>
        </Container>
    );
}
