import classes from "./Input.module.css";

const Input = props => {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<Input {...props.name} />
		</div>
	);
};

export default Input;
