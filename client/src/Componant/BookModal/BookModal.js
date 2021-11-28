import React from 'react';
import { useForm } from "react-hook-form";
import "./BookModal.css"

const BookModal = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset()
        document.getElementById('cancelModal').click()
        console.log(data)
    };
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h3 id="exampleModalLabel" className="modal-title display-4 text-primary ">Insert Book</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} id="modalForm">
                        <div className="modal-body">

                            <div className="form-group my-3">
                                <label htmlFor="bname" className="h6">Book Name</label>
                                <input id="bname" className="form-control" defaultValue="" {...register("book_name", { required: "field is empty" })} />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="bauthor" className="h6">Book Author</label>
                                <input id="bauthor" className="form-control" defaultValue="" {...register("book_author", { required: "field is empty" })} />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="ctgry" className="h6">Category</label>
                                <input type="text" list="datalist" id="ctgry" className="form-control" defaultValue="" {...register("category", { required: "field is empty" })} />
                                <datalist id="datalist" >
                                    {/* <option value="" disabled>Choose One</option> */}
                                    <option value="Fiction">Fiction</option>
                                    <option value="Story">Story</option>
                                    <option value="Science Fiction">Science Fiction</option>
                                    <option value="Comic">Comic</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Thriler">Thriler</option>
                                    <option value="Theoritical">Theoritical</option>
                                </datalist>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="edition" className="h6">Edition</label>
                                <input id="edition" type="number" className="form-control" defaultValue="" {...register("edition", { required: "field is empty" })} />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="qty" className="h6">Quantity</label>
                                <input id="qty" type="number" className="form-control" defaultValue="" {...register("quantity", { required: "field is empty" })} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" >Insert Book</button>
                            <button type="button" className="btn btn-primary" id="cancelModal" data-dismiss="modal">Close</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookModal;