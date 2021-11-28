import React from 'react';
import { useForm } from "react-hook-form";
import { handleAlert } from '../../AllFunctions/SweatAlert';
const ReturnModal = ({ returnBook }) => {
    const { book_id, book_name, book_author, borrowDate, returnDate, fineCharged } = returnBook;
    const handlePayReturn = (fineCharged) => {
        if(fineCharged){
            handleAlert("Pay & Retrun", `Pay ${fineCharged}tk as Fine`, "Pay", "Successfully Paid & Returned the Book")
        }
        else{
            handleAlert("Retrun", `Return the Book`, "Return", "Successfully Returned the Book")
        }
        document.getElementById("cancelModal").click()
    }
    return (
        <div className="modal fade" id="returnmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h3 id="exampleModalLabel" className="modal-title display-4 text-primary ">Return Book</h3>
                    </div>
                    <table className="table borderless">
                        <tbody>
                            <tr>
                                <td>Book ID</td>
                                <td>:</td>
                                <td>{book_id}</td>
                            </tr>
                            <tr>
                                <td>Book Name</td>
                                <td>:</td>
                                <td>{book_name}</td>
                            </tr>
                            <tr>
                                <td>Author</td>
                                <td>:</td>
                                <td>{book_author}</td>
                            </tr>
                            <tr>
                                <td>Borrow Date</td>
                                <td>:</td>
                                <td>{borrowDate}</td>
                            </tr>
                            <tr>
                                <td>Return Date</td>
                                <td>:</td>
                                <td>{returnDate}</td>
                            </tr>
                            <tr>
                                <td>Returning On</td>
                                <td>:</td>
                                <td>{new Date().toDateString()}</td>
                            </tr>
                            <tr>
                                <td>Fine Charged</td>
                                <td>:</td>
                                <td>{fineCharged}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" onClick={() => handlePayReturn(fineCharged)}>{fineCharged ? <span>Pay & Return</span> : <span>Return</span>}</button>
                        <button type="button" className="btn btn-primary" id="cancelModal" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReturnModal;