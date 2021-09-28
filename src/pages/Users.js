import React from 'react';

const Users=(props)=>
{
    console.warn(props.data.name);
    const {data}=props;
    return(
        <div>
            <h1>User Component</h1>
            <h1>{data.name}</h1>
        </div>
    )
}
export default Users;