import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { user1, user2, user3 } from '../../AllFunctions/FakeUsers';
import { BookContext, UserContext } from '../../App';
import ReturnModal from '../ReturnModal/ReturnModal';

const CPanelHomePage = () => {
    const [user, setUser] = useContext(UserContext)
    const [books,] = useContext(BookContext)
    const [returnBook, setReturnBook] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        setUser(user2)
    }, [])
    const handleAlert = (aTitle, aText, aConfirmText, doneMessage) => {
        Swal.fire({
            title: aTitle,
            text: aText,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: aConfirmText,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Done!',
                    doneMessage,
                    'success'
                )
            }
        })
    }
    const handleReturn = (book_id) => {
        const returnModalBook = user.book_history.find(b => b.book_id === book_id)
        const returnBookInfo = books.find(b => b.book_id === book_id)
        returnModalBook.book_name = returnBookInfo.book_name;
        returnModalBook.book_author = returnBookInfo.book_author;

        setReturnBook(returnModalBook);
    }

    return (
        <div>
            <ReturnModal returnBook={returnBook} />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 mx-auto  shadow p-3 rounded">
                        <table className="table table-responsive table-borderless">
                            <tbody>
                                <tr>
                                    <td>User Id</td>
                                    <td>:</td>
                                    <td>{user._id}</td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>:</td>
                                    <td>{user.username}</td>
                                </tr>
                                <tr>
                                    <td>Designation</td>
                                    <td>:</td>
                                    <td>{user.designation}</td>
                                </tr>
                                {
                                    user.email &&
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>{user.email}</td>
                                    </tr>
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                {
                    user.book_history &&
                    <>
                        <div className="row mt-2">
                            <div className="col-md-6 mx-auto">
                                <h4 className="book-suggestion text-center text-primary">Book History</h4> <hr />
                            </div>
                        </div>

                        <div className="row">

                            <div className="col-md-10 mx-auto d-flex justify-content-center">
                               
                                <table className="table table-responsive table-striped" style={{ height: "300px", }} >
                                    <thead className=" text-center">
                                        <tr>
                                            <th>Book ID</th>
                                            <th>Borrow Date</th>
                                            <th>Return Date</th>
                                            <th>Returned On</th>
                                            <th>Fine Charged(tk)</th>
                                            <th>Return</th>
                                            <th>Download Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody className=" text-center" >
                                        {
                                            user?.book_history?.map((b, i) => {
                                                return <tr key={i}>
                                                    <td>{b.book_id}</td>
                                                    <td>{b.borrowDate}</td>
                                                    <td>{b.returnDate}</td>
                                                    <td>{b.returnedOn ? b.returnedOn :
                                                        <button
                                                            className="btn btn-outline-primary"
                                                            onClick={() => handleAlert("Renew Return Date", "Renew for 7 more Days", "Confirm", "Date Successfully Renewed!")}
                                                        >Renew Date</button>}</td>
                                                    <td>{b.fineCharged ? b.fineCharged : "No fine Added"}</td>
                                                    <td>
                                                        {
                                                            b.fineCharged
                                                                ?
                                                                <button
                                                                    className="btn btn-outline-primary"
                                                                    data-toggle="modal"
                                                                    data-target="#returnmodal"
                                                                    onClick={() => handleReturn(b.book_id)}
                                                                >Return</button>
                                                                :
                                                                <span className="text-muted">Returned</span>
                                                        }
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-outline-primary"
                                                            onClick={() => handleAlert("Download", "Download Receipt!", "Download", "Successfully Downloaded!")}
                                                        >Download</button>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default CPanelHomePage;