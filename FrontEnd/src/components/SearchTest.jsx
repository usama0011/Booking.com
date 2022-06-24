import React, { useState } from 'react'
import Table from './Table';
// Now we are working with the Searching Points;
const SearchTest = () => {
    const users = [
        {
            id: 1,
            first_name: "Usama",
            last_name: "Ahmad",
            gender: "Male",

        },
        {
            id: 2,
            first_name: "Haris",
            last_name: "Ali",
            gender: "Male",

        }, {
            id: 3,
            first_name: "Shiza",
            last_name: "Aslam",
            gender: "Female",

        }, {
            id: 4,
            first_name: "Haider",
            last_name: "Ali",
            gender: "Male",

        },
        {
            id: 5,
            first_name: "Rida",
            last_name: "Arshad",
            gender: "Female",

        },
    ]
    const [search, setSearch] = useState("");
    // SearchElement
    const keys = ["first_name", "last_name", "gender"]
    const handleSearch = (data) => {
        return data.filter((item) => keys.some(key => item[key].toLowerCase().includes(search)))
    }
    return (
        <div style={{ padding: 10 }}>
            <h3>Search Testing</h3>
            <div style={{ marginTop: 10 }} className="input_container">
                <label htmlFor="search">Enter Name</label>
                <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder='Search...' style={{ marginLeft: 10, padding: '8px 5px', border: '1px solid gainsboro', borderRadius: 4 }} />
            </div>
            <div className="names">
                <Table data={handleSearch(users)} />
            </div>
        </div>
    )
}

export default SearchTest