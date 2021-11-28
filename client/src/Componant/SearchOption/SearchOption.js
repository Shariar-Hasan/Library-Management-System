import React from 'react';
import { useForm } from "react-hook-form";
import "./SearchOption.css"




const SearchOption = ({ handleSearch, selectArray }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleSearch(data.search_type, data.searched_string)
    };

    return (
        <div className="row">
            <div className="col-md-8  searchOption">
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group">
                            <select className="border-2 border-primary col-sm-2" {...register("search_type")}>
                                {
                                    selectArray.map(s => <option key={s.value} value={s.key}>{s.value}</option>)
                                }
                            </select>
                            <input type="text" className="form-control col-sm-7" placeholder="Feel free to search" {...register("searched_string")} />
                            <button type="submit" className="btn-outline-primary clickEffect col-sm-2">Search <i className="fas fa-search"></i></button>
                        </div>
                    </form>

                </div>
            </div>
        </div >

    );
};

export default SearchOption;