import * as React from "react";
import * as ReactDOM from "react-dom";
// import { IModelCollection, MatchStatus } from "SSVTDataModel"; // How to get this to give me access to both interfaces and enums 

let appContainer = document.getElementById("appMain");

let Component = () => {
	// Need the enum below to print out its value
	// return <div>Enum value is {DataModel.MatchStatus.Confirmed}</div>
	return <div>Enum value is {1}</div>
};

ReactDOM.render(<Component />, appContainer);