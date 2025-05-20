export const Navbar = () => {

	return (
		<nav className="navbar navbar-grey">
			<div className="container">
				<h3 className="black-font">Star Wars</h3>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn details-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							My Favorites <i class="fa-solid fa-arrow-down"></i>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Action</a></li>
							<li><a class="dropdown-item" href="#">Another action</a></li>
							<li><a class="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};