import React from 'react';
import Role from '../../atoms/role';

export default function RolesList({ roles }) {
    return (
        <div className="flex">
            {roles.map((role) => (
                <Role role={role} />
            ))}
        </div>
    );
}
