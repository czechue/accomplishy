import React, { useState } from "react";
import { HeadingWithDivider } from "../../components/HeadingWithDivider/HeadingWIthDivider";
import { Divider, Grid } from "semantic-ui-react";
import { PanelSubtitle } from "../../components/PanelSubtitle/PanelSubtitle";
import { LoseWeight } from "./components/LoseWeight/LoseWeight";
import { PlanDuration } from "./components/PlanDuration/PlanDuration";
import { SetTreningTabs } from "./components/SetTreningTabs/SetTreningTabs";
import { TimeInWeeks } from "./model";
import { treningDetails } from "./model";

const { timeInWeeks, day, week, allDays } = treningDetails;

export const Goals = () => {
    const [planDurationValue, setPlanDurationValue] = useState<TimeInWeeks>(
        timeInWeeks || "4",
    );

    const treningParams = { day, week, allDays };

    return (
        <React.Fragment>
            <HeadingWithDivider content="Goal" name="tag" />

            <Grid>
                <PlanDuration
                    value={planDurationValue}
                    setValue={setPlanDurationValue}
                />
                <PanelSubtitle text="Main goal" />
                <LoseWeight />
                <Divider />
                <PanelSubtitle text="Set trening" />
                <SetTreningTabs treningParams={treningParams} />
            </Grid>
        </React.Fragment>
    );
};
