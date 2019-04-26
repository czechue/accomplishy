import React from "react";
import {FormField, Select} from "semantic-ui-react";
import {PanelGridRow} from "../../../../components/PanelGridRow/PanelGridRow";

const goalsDurationOptions = [
	{ key: "1", text: "1 Month", value: "1month" },
	{ key: "2", text: "2 Months", value: "2months" },
	{ key: "3", text: "3 Months", value: "3months" },
];

export const PlanDuration: React.FC = () => {
	const label = <label htmlFor="goals-duration">Plan duration</label>;
	const field = (
		<FormField
			control={Select}
			options={goalsDurationOptions}
			id="goals-duration"
			htmlFor="goals-duration"
			placeholder="3 Months"
		/>
	);
	return <PanelGridRow leftColumn={label} rightColumn={field} />;
};
