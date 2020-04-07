import React from 'react';
import Role from '../../atoms/role';

export default function RolesList() {
    return (
        <div className="flex">
            {[1, 2, 3].map((role) => (
                <Role />
            ))}
        </div>
    );
}
