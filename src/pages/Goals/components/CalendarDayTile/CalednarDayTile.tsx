import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardMeta,
} from "semantic-ui-react";
import { getDayNameById } from "../../../../shared/utils/getDayNameById";
import React from "react";

interface CalendarDayTileProps {
    diet: string;
    gym: boolean;
    running: boolean;
    dayNameId: number;
    onClick: any;
    dayOfMonth?: number;
}
interface Props {
    props: CalendarDayTileProps;
}
export const CalendarDayTile: React.FC<Props> = ({ props }) => {
    const {
        diet,
        gym,
        running,
        dayNameId,
        onClick = () => {},
        dayOfMonth = null,
    } = props;

    return (
        <Card onClick={onClick}>
            <CardHeader>{getDayNameById(dayNameId)}</CardHeader>
            <CardContent>
                <CardDescription>{diet && "Diet"}</CardDescription>
                <CardDescription>{gym && "Gym"}</CardDescription>
                <CardDescription>{running && "Running"}</CardDescription>
            </CardContent>
            {dayOfMonth && <CardMeta>{dayOfMonth}</CardMeta>}
        </Card>
    );
};
