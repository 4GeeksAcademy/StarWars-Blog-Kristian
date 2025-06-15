import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const handleDelete = (name) => {
		const action = {
			type: "remove_favorite",
			payload: { removingFavorite: name }
		}
		dispatch(action)
	}

	return (
		<nav className="navbar navbar-grey">
			<div className="container">
				<h3 className="black-font">Star Wars</h3>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn details-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							My Favorites <i className="fa-solid fa-arrow-down"></i>
						</button>
						<ul className="dropdown-menu dropdown-favorites">
							{store.favorites.map((favorite, index) => (
								<li key={index} className="dropdown-item dropdown-favorites dropdown-item-favorites">
									<span className="favorite-name">{favorite}</span>
									<button className="float-end btn details-button" onClick={() => handleDelete(favorite)}><i className="fa-solid fa-trash"></i></button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};