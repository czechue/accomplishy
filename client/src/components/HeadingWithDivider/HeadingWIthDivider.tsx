import React from 'react';
import { Divider, Header, Icon, SemanticICONS } from 'semantic-ui-react';

export interface HeadingWIthDividerProps {
	content: string;
	name: SemanticICONS;
}

export const HeadingWithDivider: React.FC<HeadingWIthDividerProps> = ({
	content,
	name
}): JSX.Element => (
	<React.Fragment>
		<Divider horizontal>
			<Header as='h4'>
				<Icon name={name} />
				{content}
			</Header>
		</Divider>
	</React.Fragment>
);
