import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const VehicleCard = (props) => {
    const navigate = useNavigate()
    return (
        <div className="card mx-2" style={{ minWidth: "18rem", background: "gray" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title black-font">{props.name}</h5>
                <button className="btn details-button" onClick={() => { navigate(`/vehicle/details/${props.uid}`) }}>Details</button>
                <button className="btn details-button m-2"><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>
    );
}
export default VehicleCard