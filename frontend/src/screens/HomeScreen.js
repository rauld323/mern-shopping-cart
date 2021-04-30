import './HomeScreen.css'

import Product from "../components/Product";

const HomeScreen = () => {
	return (
		<div className="homescreen">
			<h2 className="homescreen_title">Lates Prodcuts</h2>
			<div className="homescreen_products">
				<Product />
			</div>
		</div>
	)

}

export default HomeScreen
