import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input.js";

const MealItemForm = () => {
	return (
		<form className={classes.form}>
			<Input />
			<button>add</button>
		</form>
	);
};

export default MealItemForm;
