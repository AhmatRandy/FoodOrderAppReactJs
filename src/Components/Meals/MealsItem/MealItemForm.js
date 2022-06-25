import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input.js";
import { useRef, useState } from "react";

function MealItemForm(props) {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(false);

	const onSubmitHandler = e => {
		e.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		console.log(amountInputRef);
		const enteredAmountNumber = +enteredAmount;
		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}
		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={onSubmitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
}

export default MealItemForm;
