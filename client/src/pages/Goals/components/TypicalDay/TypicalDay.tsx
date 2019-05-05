import { WeeklyDayRoute } from "../../model";
import React from "react";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardGroup,
    CardHeader,
    Checkbox,
    Grid,
    Input,
} from "semantic-ui-react";
import { PanelGridRow } from "../../../../components/PanelGridRow/PanelGridRow";
import { getDayNameById } from "../../../../shared/utils/getDayNameById";

interface TypicalDayProps {
    day: WeeklyDayRoute;
}
export const TypicalDay: React.FC<TypicalDayProps> = ({ day }) => {
    const { diet, gym, running, dayNameId = null } = day;

    return (
        <CardGroup itemsPerRow={1}>
            <Card>
                <CardHeader>
                    {dayNameId !== null
                        ? getDayNameById(dayNameId)
                        : "Typical day"}
                </CardHeader>
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
