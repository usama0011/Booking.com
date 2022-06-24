import React from 'react'

const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table