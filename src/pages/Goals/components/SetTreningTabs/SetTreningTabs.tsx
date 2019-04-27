import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardGroup,
    CardHeader,
    Checkbox,
    Grid,
    GridColumn,
    GridRow,
    Input,
    Tab,
} from "semantic-ui-react";
import React, { useState } from "react";
import { PanelGridRow } from "../../../../components/PanelGridRow/PanelGridRow";
import { DailyRoute, WeeklyRouteEntity, AllDayRouteEntity } from "../../model";
import { getDayNameById } from "../../../../shared/utils/getDayNameById";

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
            menuItem: "Typical month",
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

interface TypicalDayProps {
    day: DailyRoute;
}
export const TypicalDay: React.FC<TypicalDayProps> = ({ day }) => {
    const { diet, gym, running } = day;
    return (
        <CardGroup itemsPerRow={1}>
            <Card>
                <CardHeader>Typical Day</CardHeader>
                <CardContent textAlign="left">
                    <CardDescription>
                        <Grid>
                            <PanelGridRow
                                leftColumn={<label>Calories limit:</label>}
                                rightColumn={<Input value={diet} />}
                            />
                            <PanelGridRow
                                leftColumn={<label>Go to gym</label>}
                                rightColumn={<Checkbox checked={gym} />}
                            />
                            <PanelGridRow
                                leftColumn={<label>Running</label>}
                                rightColumn={<Checkbox checked={running} />}
                            />
                        </Grid>
                    </CardDescription>
                </CardContent>
                <Button primary>Save your changes</Button>
            </Card>
        </CardGroup>
    );
};

interface TypicalWeekProps {
    week: WeeklyRouteEntity;
}
const TypicalWeek: React.FC<TypicalWeekProps> = ({ week }) => {
    const weekArr = Object.values(week);
    const [activeDayId, setActiveDayId] = useState<number>(4);

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
            <pre>{getDayNameById(activeDayId)}</pre>

            <Button primary>Save your changes</Button>
        </React.Fragment>
    );
};
