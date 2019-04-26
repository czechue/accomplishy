import React from "react";
import { HeadingWithDivider } from "../../components/HeadingWithDivider/HeadingWIthDivider";
import { Divider, Grid } from "semantic-ui-react";
import { PanelSubtitle } from "../../components/PanelSubtitle/PanelSubtitle";
import { LoseWeight } from "./components/LoseWeight/LoseWeight";
import { PlanDuration } from "./components/PlanDuration/PlanDuration";
import { SetTreningTabs } from "./components/SetTreningTabs/SetTreningTabs";

export const Goals = () => {
    return (
        <React.Fragment>
            <HeadingWithDivider content="Goal" name="tag" />

            <Grid>
                <PlanDuration />
                <PanelSubtitle text="Main goal" />
                <LoseWeight />
                <Divider />
                <PanelSubtitle text="Set trening" />
                <SetTreningTabs />
            </Grid>
        </React.Fragment>
    );
};
