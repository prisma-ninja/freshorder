import React, {Component} from 'react'
import { Button, List, Image, Accordion, Icon, Label, Popup, Grid, Statistic, Segment, Header } from 'semantic-ui-react'

import GridCenterTop from '../layouts/GridCenterTop.jsx'

export default class AddToOrderPage extends Component {

	render() {
		return (
			<GridCenterTop textAlign="left">
				<Header size='medium' textAlign='center'>
				MENU
				<Header.Subheader>
				de quoi se sustanter
				</Header.Subheader>
				</Header>
				<Accordion styled fluid>
    				<Accordion.Title>
      				<Icon name='dropdown' />
      				Burger
					</Accordion.Title>
    				<Accordion.Content>
						<List divided relaxed verticalAlign='middle'>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
						</List>
					</Accordion.Content>
					<Accordion.Title>
      				<Icon name='dropdown' />
      				Pizza
					</Accordion.Title>
    				<Accordion.Content>
						<List divided relaxed verticalAlign='middle'>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content floated='right'>
								<Button label='8.50€' icon='add' labelPosition='left' />
								</List.Content>
								<List.Content>
									<List.Header>Bacon</List.Header>
									<List.Description>Steak 120g, salade, tomate, double cheddar, caviar oignons et aubergines, bacon</List.Description>
								</List.Content>
							</List.Item>
						</List>
					</Accordion.Content>
				</Accordion>
				<Segment basic clearing>
				<Statistic.Group size='mini'>
				<Statistic horizontal value='1' label='Bacon' />
				<Statistic horizontal value='8,50' label='euros' />
				</Statistic.Group>
				</Segment>
			</GridCenterTop>
		)
	}
}
