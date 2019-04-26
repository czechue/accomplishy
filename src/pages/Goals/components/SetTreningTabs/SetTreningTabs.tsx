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
import React, {useState} from "react";
import { PanelGridRow } from "../../../../components/PanelGridRow/PanelGridRow";

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
