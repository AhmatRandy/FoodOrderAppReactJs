import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

function MealsItems(props) {
	const cartCtx = useContext(CartContext);

	const addCartHandler = amount => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{props.price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addCartHandler} />
			</div>
		</li>
	);
}

export default MealsItems;
