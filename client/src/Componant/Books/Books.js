import React, { useContext, useEffect, useState } from 'react';
import { getDB, setDB } from '../../AllFunctions/LoginRegister.js';
import { BookContext, UserContext } from '../../App.js';
import Book from '../Book/Book.js';
import BookModal from '../BookModal/BookModal.js';
import SearchOption from '../SearchOption/SearchOption.js';
import { fakebooklist } from "./../../AllFunctions/FakeBookList.js"

const Books = () => {
    const [books, setBooks] = useContext(BookContext)
    const [user, setUser] = useContext(UserContext);
    const [booklist, setBooklist] = useState(fakebooklist || getDB("books"))
    const [category, setCategory] = useState([])



    useEffect(() => {
        setDB("books", books)
        setBooks(fakebooklist)
        const newCat = [...new Set(books.map(b => b.category))]
        setCategory(newCat)
        console.log(newCat);

    }, [books])

    console.log(category);
    const handleSearch = (key, value) => {
        if (value) {
            const newBookList = books.filter(b => b[key].toLowerCase().includes(value.toLowerCase()))
            setBooklist(newBookList)
            console.log(newBookList);
        }
        else {
            setBooklist(books)
        }
    }

    const selectArray = [
        {
            key: "book_id",
            value: "Book Code"
        },
        {
            key: "book_name",
            value: "Book Name"
        },
        {
            key: "book_author",
            value: "Author"
        },
    ]
    return (
        <div>
            <SearchOption selectArray={selectArray} handleSearch={handleSearch} />
            <BookModal setCategory={setCategory} />
            <div className="container">
                <div className="row mt-5">
                    {
                        (user.isAdmin) &&
                        <div className="addbook">
                            <button className="btn btn-primary clickEffect" data-toggle="modal" data-target="#exampleModal">Add Book</button>
                        </div>
                    }

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>

                                    <select className="form-select border-0" onChange={(e) => handleSearch("category", e.target.value)} style={{ fontWeight: "bold" }}>
                                        <option value="" >All Category</option>
                                        {
                                            category.map(c => <option key={c} value={c}>{c}</option>)
                                        }
                                    </select>
                                </th>
                                <th>Edition</th>
                                <th>Available</th>
                                <th>Book Code</th>
                                {
                                    (user.isAdmin)
                                        ?
                                        <th>Edit/Delete</th>
                                        :
                                        <th>Borrow</th>

                                }

                            </tr>
                        </thead>
                        <tbody>
                            {
                                booklist.map((b, i) => <Book key={i} id={i} book={b}></Book>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Books;