import React, { useState } from "react";

//include images into your bundle

import Navbar from "./Navbar";

//create your first component
const Home = () => {
	const [selectColor, setSelectColor] = useState("red");

	const toggleColor = () => {
        setSelectColor(selectColor === "red" ? "green" : selectColor === "green" ? "orange" : "red");
    };

	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="container" >
				<div className="trafficLight" >
					<div onClick={() => setSelectColor("red")} className={"light red" + (selectColor === "red" ? " shine" : "")} ></div>
					<div onClick={() => setSelectColor("orange")} className={"light orange" + (selectColor === "orange" ? " shine" : "")} ></div>
					<div onClick={() => setSelectColor("green")} className={"light green" + (selectColor === "green" ? " shine" : "")} ></div>
				</div>
				<div className="stick" ></div>
				<div className="floor" ></div>
				<button onClick={toggleColor} className="btn btn-secondary mt-4 border border-danger">Toggle Color</button>
			</div>

		</div>


	);
};

export default Home;
