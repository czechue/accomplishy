import React from "react";
import { GridColumn, GridRow, Tab } from "semantic-ui-react";
import { TypicalDay } from "../TypicalDay/TypicalDay";
import { TypicalWeek } from "../TypicalWeek/TypicalWeek";
import { DailyRoute, WeeklyRouteEntity, AllDayRouteEntity } from "../../model";
import { EntirePlan } from "../EntirePlan/EntirePlan";

interface TreningParams {
    day: DailyRoute;
    week: WeeklyRouteEntity;
    allDays: AllDayRouteEntity;
}
interface Props {
    treningParams: TreningParams;
}
export const SetTreningTabs: React.FC<Props> = ({ treningParams }) => {
    const { day, week, allDays } = treningParams;
    const panes = [
        {
            menuItem: "Typical day",
            render: () => (
                <Tab.Pane>
                    <TypicalDay day={day} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Typical week",
            render: () => (
                <Tab.Pane>
                    <TypicalWeek week={week} />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Entire plan",
            render: () => (
                <Tab.Pane>
                    <EntirePlan allDays={allDays} />
                </Tab.Pane>
            ),
        },
    ];
    return (
        <GridRow centered>
            <GridColumn verticalAlign="middle" width={16}>
                <Tab panes={panes} />
            </GridColumn>
        </GridRow>
    );
};
