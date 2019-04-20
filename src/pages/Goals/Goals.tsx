import React from "react";
import { HeadingWithDivider } from "../../components/HeadingWithDivider/HeadingWIthDivider";
import {
  FormField,
  Grid,
  GridColumn,
  GridRow,
  Select
} from "semantic-ui-react";

const goalsDurationOptions = [
  { key: "1", text: "1 Month", value: "1month" },
  { key: "2", text: "2 Month", value: "2months" },
  { key: "3", text: "3 Month", value: "3months" }
];

export const Goals = () => (
  <React.Fragment>
    <HeadingWithDivider content="Goal" name="tag" />

    <Grid columns={2}>
      <GridRow verticalAlign="middle">
        <GridColumn width={6} textAlign="right">
          <label id="goals-duration">Plan duration</label>
        </GridColumn>
        <GridColumn width={10} textAlign="left">
          <FormField
            control={Select}
            options={goalsDurationOptions}
            htmlFor="goals-duration"
            placeholder="3 Months"
          />
        </GridColumn>
      </GridRow>
    </Grid>


  </React.Fragment>
);
