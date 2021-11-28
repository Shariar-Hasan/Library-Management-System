import React from 'react';
import imgUrl from "./../../images/images.png"
const NotFound = () => {

    return (
        <div className="text-center">
            <h1 className="display-2 text-center my-4">Path Not Found</h1>
            <img  src={imgUrl} alt="404 Not Found" />
        </div>
    );
};

export default NotFound;