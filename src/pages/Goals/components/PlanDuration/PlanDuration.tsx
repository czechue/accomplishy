import React from "react";
import { FormSelect } from "semantic-ui-react";
import { PanelGridRow } from "../../../../components/PanelGridRow/PanelGridRow";
import { TimeInWeeks } from "../../model";

const goalsDurationOptions = [
    { key: "1", text: "1 Week", value: "1" },
    { key: "2", text: "2 Weeks", value: "2" },
    { key: "3", text: "3 Weeks", value: "3" },
    { key: "4", text: "1 Month", value: "4" },
    { key: "5", text: "1 Month, 2 Weeks", value: "6" },
    { key: "6", text: "2 Months", value: "8" },
    { key: "7", text: "2 Months, 2 Weeks", value: "10" },
    { key: "8", text: "3 Months", value: "12" },
];

interface Props {
    value: TimeInWeeks;
    setValue: React.Dispatch<React.SetStateAction<any>>;
}

export const PlanDuration: React.FC<Props> = ({ value = "4", setValue }) => {
    const label = <label htmlFor="goals-duration">Plan duration</label>;

    const field = (
        <FormSelect
            options={goalsDurationOptions}
            selection
            id="goals-duration"
            htmlFor="goals-duration"
            placeholder="1 Month"
            value={value}
            onChange={(e, { value }) => {
                setValue(value);
            }}
        />
    );
    return <PanelGridRow leftColumn={label} rightColumn={field} />;
};
