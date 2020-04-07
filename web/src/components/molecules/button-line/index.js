import React from 'react';

import Button from '../../atoms/button';

export default function ButtonLine() {
    return (
        <div className="flex justify-between my-2">
            <Button className="bg-green-500 button">
                New Button
            </Button>
            <span>Task #2</span>
        </div>
    );
}
