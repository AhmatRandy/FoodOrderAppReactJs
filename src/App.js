import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};
	return (
		<>
			{showCart && <Cart hideCart={hideCartHandler} />}
			<Header onShowCartHandler={showCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
