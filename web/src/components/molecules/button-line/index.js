import React from 'react';

import Button from '../../atoms/button';

export default function ButtonLine({ button }) {
    return (
        <div className="flex justify-between my-2">
            <Button className="bg-green-500 button">
                New Button
            </Button>
            <span>{button.next_task ? button.next_task.title : ""}</span>
        </div>
    );
}
