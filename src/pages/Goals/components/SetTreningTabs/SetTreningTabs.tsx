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

type Day =
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
type Month =
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";
interface DayName {
	[key: string]: Day;
}
interface MonthName {
	[key: string]: Month;
}
interface Route {
    dayNameId?: number;
    monthDayId?: number;
    diet: number | null;
    gym: boolean;
    running: boolean;
}
interface MonthDayRoute {
    [key: string]: Route;
}

interface TreningDetails {
    daysDuration: number | null;
    startAt: string;
    endsAt: string;
    dayNames: DayName;
    monthNames: MonthName;
    day: Route;
    week: MonthDayRoute;
    all: MonthDayRoute;
}

const treningDetails: TreningDetails = {
    daysDuration: 30,
    startAt: "",
    endsAt: "",
    dayNames: {
        1: "monday",
        2: "tuesday",
        3: "wednesday",
        4: "thursday",
        5: "friday",
        6: "saturday",
        7: "sunday",
    },
    monthNames: {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    },
    day: {
        diet: null,
        gym: false,
        running: false,
    },
    week: {
        1: {
            dayNameId: 1,
            diet: null,
            gym: false,
            running: false,
        },
        2: {
            dayNameId: 2,
            diet: null,
            gym: false,
            running: false,
        },
        3: {
            dayNameId: 3,
            diet: null,
            gym: false,
            running: false,
        },
        4: {
            dayNameId: 4,
            diet: null,
            gym: false,
            running: false,
        },
        5: {
            dayNameId: 5,
            diet: null,
            gym: false,
            running: false,
        },
        6: {
            dayNameId: 6,
            diet: null,
            gym: false,
            running: false,
        },
        7: {
            dayNameId: 7,
            diet: null,
            gym: false,
            running: false,
        },
    },
    all: {
        1: {
            dayNameId: 3,
            monthDayId: 23,
            diet: null,
            gym: false,
            running: false,
        },
	    2: {
		    dayNameId: 4,
		    monthDayId: 24,
		    diet: null,
		    gym: false,
		    running: false,
	    },
    },
};

export const SetTreningTabs = () => {
    const panes = [
        {
            menuItem: "Typical day",
            render: () => (
                <Tab.Pane>
                    <TypicalDay />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Typical week",
            render: () => (
                <Tab.Pane>
                    <TypicalWeek />
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

const TypicalDay = () => {
    return (
        <CardGroup itemsPerRow={1}>
            <Card>
                <CardHeader>Typical Day</CardHeader>
                <CardContent textAlign="left">
                    <CardDescription>
                        <Grid>
                            <PanelGridRow
                                leftColumn={<label>Calories limit:</label>}
                                rightColumn={<Input />}
                            />
                            <PanelGridRow
                                leftColumn={<label>Go to gym</label>}
                                rightColumn={<Checkbox />}
                            />
                            <PanelGridRow
                                leftColumn={<label>Running</label>}
                                rightColumn={<Checkbox />}
                            />
                        </Grid>
                    </CardDescription>
                </CardContent>
                <Button primary>Save your changes</Button>
            </Card>
        </CardGroup>
    );
};

const TypicalWeek = () => {
    const weekDays = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];
    const [activeDay, setActiveDay] = useState(weekDays[0]);

    return (
        <React.Fragment>
            <CardGroup itemsPerRow={7}>
                {weekDays.map(day => (
                    <Card key={day} onClick={() => setActiveDay(day)}>
                        <CardHeader>{day}</CardHeader>
                        <CardContent>
                            <CardDescription>Diet</CardDescription>
                            <CardDescription>Gym</CardDescription>
                            <CardDescription>Running</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </CardGroup>
            <pre>{activeDay}</pre>

            <Button primary>Save your changes</Button>
        </React.Fragment>
    );
};
