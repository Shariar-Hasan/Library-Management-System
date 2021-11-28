import React from 'react';

const User = ({ user ,id}) => {
    const { username, email, designation, _id, verified } = user;
    const handleUser = (id) => {
        console.log(id);
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{_id}</td>
            <td>{email}</td>
            <td>{designation}</td>
            <td>{
                verified
                    ?
                    <span className="text-success">Verified</span>
                    :
                    <span className="text-danger">Not Verified</span>
            }
            </td>
            <td>
                <button className="btn btn-outline-primary clickEffect " onClick={() => handleUser(_id)}>
                    {
                        verified
                            ?
                            <span>Disable<i class="fas fa-user-alt-slash"></i></span>
                            :
                            <span>Verify<i class="fas fa-user-check"></i></span>
                    }



                </button>
            </td>

        </tr>
    );
};

export default User;