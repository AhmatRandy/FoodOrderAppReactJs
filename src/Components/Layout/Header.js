import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.png";
import HeaderCardButton from "./HeaderCardButton";
const Header = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>AhmatMeals</h1>
				<HeaderCardButton />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="good food" />
			</div>
		</>
	);
};

export default Header;
