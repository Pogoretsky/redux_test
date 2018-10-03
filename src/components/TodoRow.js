import React from 'react';

const todoRow = ({profile}) => {
    return (
        <div className="todo-row">
            {profile.first_name} {profile.last_name}
        </div>
    )
}

export default todoRow;