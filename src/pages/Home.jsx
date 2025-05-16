import { useEffect } from "react";
import CharacterCard from "../components/CharacterCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

  async function getCharacters() {
	const response = await fetch("https://swapi.tech/api/people")

	if(response.ok){
		const data = await response.json()
		dispatch({
				type: "set_characters",
				payload: {characters: data.results}
			})
	}
    }

	useEffect(() => {
		getCharacters()
	}, [])

	return (
		<div className="text-center mt-5">
			<div className="container mt-2">
				<h2 className="text-danger">Characters</h2>
				<hr/>
			</div>
			<div className="container py-2 overflow-auto">
				<div className="d-flex flex-row flex-nowrap">
					{store.characters && store.characters.length > 0 && store.characters.map(character => <CharacterCard name={character.name}/> )}
				</div>
			</div>	
		</div>
	);
}; 