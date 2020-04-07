import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import Container, { ToggleButtonStyles } from './styles';
import Button from '../../atoms/button';
import Buttons from '../buttons';
import RolesList from '../../molecules/roles-list';

export default function Task() {
    const [openButtons, setOpenButtons] = useState(false);

    return (
        <Container className="overflow-y-auto scrollbar shadow">
            <div className="flex justify-between items-center">
                <h1 className="font-bold">Task #1</h1>
                <RolesList />
            </div>
            <div className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi sit amet purus volutpat aliquam. Donec id ullamcorper lacus. Duis ultricies rhoncus lectus vel rhoncus.
            </div>
            <div className="text-right">
                <Button styles={ToggleButtonStyles} onClick={() => setOpenButtons(!openButtons)}>
                    {openButtons ? <FiChevronUp /> : <FiChevronDown />}
                </Button>
            </div>
            <div className={openButtons ? "block" : "hidden"}>
                <hr />
                <Buttons />
            </div>
        </Container>
    );
}
