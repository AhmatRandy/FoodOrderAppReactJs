import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props => {
	const cartItems = [
		{ id: "c1", name: "Sushi", amount: "2", price: 12.99 },
	].map(item => {
		<li key={item.id}>{item.name}</li>;
	});
	return (
		<Modal hideCart={props.hideCart}>
			<ul>{cartItems}</ul>
			<div className={classes.total}>
				<span>Total amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button-alt"]} onClick={props.hideCart}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;