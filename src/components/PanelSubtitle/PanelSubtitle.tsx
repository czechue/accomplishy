import { GridColumn, GridRow } from "semantic-ui-react";
import React from "react";

type Props = {
    text: string;
};

export const PanelSubtitle: React.FC<Props> = ({ text }) => (
    <GridRow verticalAlign="middle">
        <GridColumn width={6} textAlign="right">
            {text}
        </GridColumn>
    </GridRow>
);
