import React, { useReducer } from "react";
import cartContext from "./cart-context";

// reducer
const defaultState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		console.log(state);
		const updatedItem = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			item: updatedItem,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultState;
};

const CartProvider = props => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
	const cartAddItem = item => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const removeCartItem = id => {};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: cartAddItem,
		removeItem: removeCartItem,
	};
	return (
		<cartContext.Provider value={cartContext}>
			{props.children}
		</cartContext.Provider>
	);
};

export default CartProvider;
