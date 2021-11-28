import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { handleAlert } from '../../AllFunctions/SweatAlert';
import { UserContext } from '../../App';

const Book = ({ book, id }) => {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate()
    const { book_id, book_name, book_author, category, edition, quantity } = book;
   
    const handleBorrow = (book_id) => {
        handleAlert("Borrow Book","Click to confirm!","Confirm","Book Successfully Borrowed!")
    }
    return (
        <tr>
            <td>{id + 1}</td>
            <td>{book_name}</td>
            <td>{book_author}</td>
            <td>{category}</td>
            <td>{edition}{edition === 1 ? "st" : edition === 2 ? "nd" : edition === 3 ? "rd" : "th"}</td>
            <td>{quantity || "Not Available"}</td>
            <td>{book_id}</td>
            {
                (user.isAdmin)
                    ?
                    <td>
                        <button className="btn btn-outline-primary clickEffect mx-1" onClick={() => handleBorrow(book_id)}><i class="fas fa-edit"></i></button>
                        <button className="btn btn-outline-primary clickEffect mx-1" onClick={() => handleBorrow(book_id)}><i class="fas fa-trash"></i></button>
                    </td>
                    :
                    <td>
                        <button className="btn btn-outline-primary clickEffect " onClick={() => handleBorrow(book_id)} disabled={quantity ? false : true}>{quantity ? "Borrow" : "N/A"}</button>
                    </td>
            }

        </tr>
    );
};

export default Book;