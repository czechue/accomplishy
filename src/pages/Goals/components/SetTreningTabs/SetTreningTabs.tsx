import React, {useState} from "react";
import {Button, CardGroup, GridColumn, GridRow, Tab} from "semantic-ui-react";
import { TypicalDay } from "../TypicalDay/TypicalDay";
import { TypicalWeek } from "../TypicalWeek/TypicalWeek";
import {DailyRoute, WeeklyRouteEntity, AllDayRouteEntity, WeeklyDayRoute} from "../../model";
import {CalendarDayTile} from "../CalendarDayTile/CalednarDayTile";

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
            render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
        },
    ];
    return (
        <GridRow centered>
            <GridColumn verticalAlign="middle" width={15}>
                <Tab panes={panes} />
            </GridColumn>
        </GridRow>
    );
};

interface EntirePlanProps {
	allDays: WeeklyRouteEntity;
}
export const EntirePlan: React.FC<EntirePlanProps> = ({ allDays }) => {
	const weekArr = Object.values(allDays);
	const [activeDayId, setActiveDayId] = useState<number>(1);
	const activeDay: WeeklyDayRoute = allDays[activeDayId];

	return (
		<React.Fragment>
			<CardGroup itemsPerRow={7}>
				{weekArr.map(
					({
						 dayNameId = 0,
						 diet = "",
						 gym = false,
						 running = false,
					 }) => {
						const calendarDayTileProps = {
							dayNameId,
							diet,
							gym,
							running,
							onClick: () => setActiveDayId(dayNameId),
						};
						return <CalendarDayTile props={calendarDayTileProps} />;
					},
				)}
			</CardGroup>
			<TypicalDay day={activeDay} />

			<Button primary>Save your changes</Button>
		</React.Fragment>
	);
};
