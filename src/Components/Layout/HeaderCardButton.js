import classes from "./HeaderCardButton.module.css";

import React from "react";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import cartContext from "../../store/cart-context";

const HeaderCardButton = props => {
	const cartCtx = useContext(cartContext);
	const numberOfCartNumber = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	console.log(cartCtx);
	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartNumber}</span>
		</button>
	);
};

export default HeaderCardButton;
