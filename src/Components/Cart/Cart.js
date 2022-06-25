import { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
const Cart = props => {
	const cartCtx = useContext(CartContext);
	const hasItems = cartCtx.items.length <= 0;
	// const tes = (
	// 	<ul>
	// 		{cartCtx.items.map(item => {
	// 			return <li>{item.name}</li>;
	// 		})}
	// 	</ul>
	// );
	return (
		<Modal hideCart={props.hideCart}>
			<ul>
				{cartCtx.items.map(item => {
					return (
						<CartItem
							key={item.id}
							name={item.name}
							amount={item.amount}
							price={item.price}
						/>
					);
				})}
			</ul>
			<div className={classes.total}>
				<span>Total amount</span>
				<span>{cartCtx.totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button-alt"]} onClick={props.hideCart}>
					Close
				</button>
				{!hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
