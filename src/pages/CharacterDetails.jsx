import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CharacterDetails = () => {
    const [character, setCharacter] = useState()
    const { uid } = useParams()
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            <h1>Characters</h1>
            <p>{character && character.name}</p>
        </div>
    )
}
export default CharacterDetails;