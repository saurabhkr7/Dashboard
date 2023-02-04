import React from "react";
import ReactDOM from "react-dom";
import { SimpleBarChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import

class Chart extends React.Component {
	state = {
		data: [
	{
		"group": "Qty",
		"value": 65000
	},
	{
		"group": "More",
		"value": 29123
	},
	{
		"group": "Sold",
		"value": 35213
	},
	{
		"group": "Restocking",
		"value": 51213
	},
	{
		"group": "Misc",
		"value": 16932
	}
],
		options: {
	"title": "Horizontal simple bar (discrete)",
	"axes": {
		"left": {
			"mapsTo": "value"
		},
		"bottom": {
      "mapsTo": "group",
			"scaleType": "labels"
		}
	},
	"height": "400px"
}
	};

	render = () => (
		<SimpleBarChart
			data={this.state.data}
			options={this.state.options}>
		</SimpleBarChart>
	);
}
export default Chart;
  