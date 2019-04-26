import {
  GridColumn,
  GridRow,
} from "semantic-ui-react";
import React from "react";

type Props = {
  leftColumn: JSX.Element;
  rightColumn: JSX.Element;
};

export const PanelGridRow: React.FC<Props> = ({ leftColumn, rightColumn }) => (
  <GridRow verticalAlign="middle">
    <GridColumn width={6} textAlign="right">
      {leftColumn}
    </GridColumn>
    <GridColumn width={6} textAlign="left">
      {rightColumn}
    </GridColumn>
  </GridRow>
);
