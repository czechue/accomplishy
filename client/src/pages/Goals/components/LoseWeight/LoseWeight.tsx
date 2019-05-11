import React, { useState } from "react";
import { Checkbox, FormField, Input } from "semantic-ui-react";
import { PanelGridRow } from "../../../../components/PanelGridRow/PanelGridRow";

export const LoseWeight = () => {
    const [loseWeightCheckbox, setLoseWeightCheckbox] = useState(true);
    const checkbox = (
        <FormField
            id="checkbox-lose-weight"
            onClick={() => setLoseWeightCheckbox(!loseWeightCheckbox)}
        >
            <Checkbox label="Lose weight" checked={loseWeightCheckbox} />
        </FormField>
    );
    const input = (
        <FormField disabled={!loseWeightCheckbox}>
            <Input
                label={{ basic: true, content: "kg" }}
                labelPosition="right"
                id="goals-weight-to-lose"
                type="number"
                placeholder="e.g. 6kg"
            />
        </FormField>
    );

    return <PanelGridRow leftColumn={checkbox} rightColumn={input} />;
};
