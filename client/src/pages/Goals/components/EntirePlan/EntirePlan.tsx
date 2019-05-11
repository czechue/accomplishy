import { AllDayRoute, AllDayRouteEntity, WeeklyDayRoute } from "../../model";
import React, { useState } from "react";
import { Button, CardGroup } from "semantic-ui-react";
import { CalendarDayTile } from "../CalendarDayTile/CalednarDayTile";
import { TypicalDay } from "../TypicalDay/TypicalDay";
import {CalendarDayPlaceholder} from "../CalendarDayPlaceholder/CalendarDayPlaceholder";
const uuidv4 = require("uuid/v4");

interface EntirePlanProps {
    allDays: AllDayRouteEntity;
}
export const EntirePlan: React.FC<EntirePlanProps> = ({ allDays }) => {
    const allDaysArr = Object.values(allDays);
    const [activeDayId, setActiveDayId] = useState<number>(1);
    const activeDay: WeeklyDayRoute = allDays[activeDayId];
    const firstDayOfTrening: AllDayRoute = allDays[0];
    const placeholderCardsToShow: number = firstDayOfTrening.dayNameId!;
    const placeholderArr = [...Array(placeholderCardsToShow)];

    return (
        <React.Fragment>
            <CardGroup itemsPerRow={7}>
                {placeholderArr.map((_, i) => (
	                <CalendarDayPlaceholder key={i}/>
                ))}
                {allDaysArr.map(
                    ({
                        id = 0,
                        dayOfMonth = 0,
                        dayNameId = 0,
                        diet = "",
                        gym = false,
                        running = false,
                    }) => {
                        const calendarDayTileProps = {
                            dayOfMonth,
                            dayNameId,
                            diet,
                            gym,
                            running,
                            onClick: () => setActiveDayId(id),
                        };
                        return (
                            <CalendarDayTile
                                props={calendarDayTileProps}
                                key={uuidv4()}
                            />
                        );
                    },
                )}
            </CardGroup>
            <TypicalDay day={activeDay} />

            <Button primary>Save your changes</Button>
        </React.Fragment>
    );
};
