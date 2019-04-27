import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "semantic-ui-react";
import { getDayNameById } from "../../../../shared/utils/getDayNameById";
import React from "react";

interface CalendarDayTileProps {
    diet: string;
    gym: boolean;
    running: boolean;
    dayNameId: number;
    onClick: any;
}
interface Props {
    props: CalendarDayTileProps;
}
export const CalendarDayTile: React.FC<Props> = ({ props }) => {
    const { diet, gym, running, dayNameId, onClick } = props;
    return (
        <Card key={dayNameId} onClick={onClick}>
            <CardHeader>{getDayNameById(dayNameId)}</CardHeader>
            <CardContent>
                <CardDescription>{diet && "Diet"}</CardDescription>
                <CardDescription>{gym && "Gym"}</CardDescription>
                <CardDescription>{running && "Running"}</CardDescription>
            </CardContent>
        </Card>
    );
};
