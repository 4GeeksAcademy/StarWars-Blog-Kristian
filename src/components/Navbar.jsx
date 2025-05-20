import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-grey">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand h1">Star Wars Blog</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn details-button">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};