import React from 'react';

import api from '../../../services/api';
import Button from '../../atoms/button';

export default function Form() {
    let title = "";
    let description = "";

    const setTitle = (text) => {
        title = text;
    }

    const setDescription = (text) => {
        description = text;
    }

    function handleForm() {
        api.post('flows/', { title, description });
    }

    const form = <form>
        <div>
            <label htmlFor="title">Title:</label>
            <input
                id="title"
                type="text"
                onChange={(event) => setTitle(event.target.value)}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                onChange={(event) => setDescription(event.target.value)}
            />
        </div>
    </form>;

    const buttons = [
        <Button className="bg-green-500 button" onClick={handleForm}>
            Create
        </Button>
    ];

    return { form, buttons };
}
