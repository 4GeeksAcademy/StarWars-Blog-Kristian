import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const {store, dispatch} = useGlobalReducer()
	
	return (
		<nav className="navbar navbar-grey">
			<div className="container">
				<h3 className="black-font">Star Wars</h3>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn details-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							My Favorites <i class="fa-solid fa-arrow-down"></i>
						</button>
						<ul class="dropdown-menu bg-white">
							{store.favorites.map((favorite, index) => (
								<li key={index} className="dropdown-item dropdown-favorites">{favorite}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};