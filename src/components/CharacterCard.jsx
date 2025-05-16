import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CharacterCard = ({name}) => {
    return (
        <div className="card mx-2" style={{minWidth: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text"></p> */}
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}
export default CharacterCard