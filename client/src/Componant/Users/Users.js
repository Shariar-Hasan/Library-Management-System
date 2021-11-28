import React, { useContext, useEffect, useState } from 'react';
import { fakeUserList } from '../../AllFunctions/FakeUserList';
import { AllUserContext } from '../../App';
import SearchOption from '../SearchOption/SearchOption';
import User from '../User/User';

const Users = () => {
    const [allUser, setAllUser] = useContext(AllUserContext)
    const [userlist, setUserlist] = useState(fakeUserList)
    useEffect(() => {
        setAllUser(fakeUserList)
    }, [allUser])


    const handleSearch = (key, value) => {
        console.log(key, value);
        if (value) {
            console.log(key, value);
            const newUserList = allUser.filter(u => u[key].toLowerCase().includes(value.toLowerCase()))
            setUserlist(newUserList)
        }
        else {
            setUserlist(allUser)
        }
    }
    const designationArray = ["Teacher", "Student"]
    const selectArray = [
        {
            key: "username",
            value: "Username"
        },
        {
            key: "email",
            value: "Email"
        },
        {
            key: "_id",
            value: "Id"
        },

    ]
    return (
        <div>
            <SearchOption selectArray={selectArray} handleSearch={handleSearch} />
            <div className="container">
                <div className="row mt-5">
                    <div className="col mx-auto">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Username</th>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>
                                        <select className="form-select border-0" onChange={(e) => handleSearch("designation", e.target.value)} style={{ fontWeight: "bold" }}>
                                            <option value="" >All</option>
                                            {
                                                designationArray.map(s => <option key={s} value={s}>{s}</option>)
                                            }
                                        </select>
                                    </th>
                                    <th>Verification</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userlist.map((u, i) => <User key={i} id={i} user={u}></User>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Users;