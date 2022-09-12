import React from 'react'


const Users = ({users}: any) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return users.length

    const UserRow = (user: any, index: number) => {
        console.log(user)
        return (
            <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>
                    {user[0]}
                    <button type={"button"} className="btn btn-link">
                        Delete
                    </button>
                </td>
                <td>{user[1]}</td>
                <td>{user[2]}</td>
                {user.length >= 5 &&
                    <td>{user[3]}</td>
                }
                {user.length >= 5 &&
                    <td>{user[4]}</td>
                }
                {user.length === 7 &&
                    <td>{user[5]}</td>
                }
                {user.length === 7 &&
                    <td>{user[6]}</td>
                }
            </tr>
        )

    }

    const userTable = users.map((user: any, index: number) => UserRow(user, index))
    console.log(users[0].length)
    return (
        <div className="container">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    {users[0].length === 3 && <th>
                        Fail Mode Name
                    </th>}
                    {users[0].length === 3 && <th>
                        Fail Code
                    </th>}
                    {users[0].length === 5 && <th>
                        Manufacturer
                    </th>}
                    {users[0].length === 5 && <th>
                        Contact
                    </th>}
                    {users[0].length === 5 && <th>
                        Failure Rate
                    </th>}
                    {users[0].length === 5 && <th>
                        Component Name
                    </th>}
                    {users[0].length === 7 && <th>
                        Component ID
                    </th>}
                    {users[0].length === 7 && <th>
                        Manufacturer
                    </th>}
                    {users[0].length === 7 && <th>
                        Component Name
                    </th>}
                    {users[0].length === 7 && <th>
                        Failure ID
                    </th>}
                    {users[0].length === 7 && <th>
                        Failure Code
                    </th>}
                    {users[0].length === 7 && <th>
                        Failure Mode Name
                    </th>}
                </tr>
                </thead>
                <tbody>
                {userTable}
                </tbody>
            </table>
        </div>
    )

}

export {Users}