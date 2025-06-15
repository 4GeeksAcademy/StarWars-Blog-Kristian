import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

const PlanetCard = (props) => {
    const {store, dispatch} = useGlobalReducer()
    const navigate = useNavigate()
    const handleFavorite = () => {
        const addedFavorite = store.favorites.includes(props.name)

        if (addedFavorite === true){
            const action = {
                type: "remove_favorite",
                payload: { removingFavorite: props.name }
            }
            dispatch(action)
        } else {
            const action = {
                type: "add_favorite",
                payload: { newFavorite: props.name }
            }
            dispatch(action)
        }
    }
    return (
        <div className="card mx-2" style={{ minWidth: "18rem", background: "gray" }}>
            <img src={`https://cdn.jsdelivr.net/gh/breatheco-de/swapi-images/public/images/planets/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title black-font">{props.name}</h5>
                <button className="btn details-button" onClick={() => { navigate(`/planet/details/${props.uid}`) }}>Details</button>
                <button className="btn details-button m-2" onClick={handleFavorite}><i class="fa-solid fa-heart"></i></button>
            </div>
        </div>
    );
}
export default PlanetCard