import React from 'react';
import { Header, Segment, Container, Form } from 'semantic-ui-react';
import { Goals } from './pages/Goals/Goals';

const App = () => (
	<Container>
		<Header as='h2'>your goals settings</Header>
		<a href='/auth/google'>Sign in with google</a>
		<GoalsPlanner />
	</Container>
);

const GoalsPlanner = () => (
	<Container text>
		<Segment>
			<Form>
				<Goals />
			</Form>
		</Segment>
	</Container>
);

export default App;
