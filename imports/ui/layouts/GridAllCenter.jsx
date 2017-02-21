import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'

export default class GridAllCenter extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid verticalAlign='middle' padded stackable centered>
				<Grid.Row>
					<Grid.Column width={8} textAlign={this.props.textAlign}>
						{this.props.children}				
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

