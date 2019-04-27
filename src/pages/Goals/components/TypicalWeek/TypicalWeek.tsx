import { WeeklyDayRoute, WeeklyRouteEntity } from "../../model";
import React, { useState } from "react";
import {
    Button,
    CardGroup,
} from "semantic-ui-react";
import { TypicalDay } from "../TypicalDay/TypicalDay";
import { CalendarDayTile } from "../CalendarDayTile/CalednarDayTile";

interface TypicalWeekProps {
    week: WeeklyRouteEntity;
}
export const TypicalWeek: React.FC<TypicalWeekProps> = ({ week }) => {
    const weekArr = Object.values(week);
    const [activeDayId, setActiveDayId] = useState<number>(1);
    const activeDay: WeeklyDayRoute = week[activeDayId];

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
