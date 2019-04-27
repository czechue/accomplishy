import {WeeklyDayRoute, WeeklyRouteEntity} from "../../model";
import React, { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardGroup,
    CardHeader,
} from "semantic-ui-react";
import { getDayNameById } from "../../../../shared/utils/getDayNameById";
import {TypicalDay} from "../TypicalDay/TypicalDay";

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
                    }) => (
                        <Card
                            key={dayNameId}
                            onClick={() => setActiveDayId(dayNameId)}
                        >
                            <CardHeader>{getDayNameById(dayNameId)}</CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {diet && "Diet"}
                                </CardDescription>
                                <CardDescription>
                                    {gym && "Gym"}
                                </CardDescription>
                                <CardDescription>
                                    {running && "Running"}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ),
                )}
            </CardGroup>
	        <TypicalDay day={activeDay}/>

            <Button primary>Save your changes</Button>
        </React.Fragment>
    );
};
