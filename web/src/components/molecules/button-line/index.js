import React from 'react';

import Button from '../../atoms/button';

export default function ButtonLine({ button }) {
    return (
        <div className="flex justify-between my-2">
            <Button className={`${button.class} button`}>
                {button.name}
            </Button>
            <span>
                <strong>Next: </strong>
                {button.next_task ? button.next_task.title : ""}
            </span>
        </div>
    );
}
