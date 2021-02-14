import React from 'react';
import {Container, Grid, Card, Icon, Image, List, Button, Header, Feed, Divider} from "semantic-ui-react";
import Title from "../Title/Title";
import {NavLink} from "react-router-dom";

function Notifications () {

    return (
        <Container style={{ marginTop: '7em' }}>
           <Title title={'Notifications'} />
            <Grid columns='equal'>
                <h1>Notifications</h1>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        className="ui avatar image"
                                        floated='right'
                                        size='big'
                                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                    />
                                    <Card.Header>Bob Smith</Card.Header>
                                    <Card.Meta>Full Stack Developer</Card.Meta>
                                    <Card.Description style={{ color: 'black' }} >
                                        creator. developer. consultant. freelancer. javascript. php. python. css. husband. dad². guitarero. climber. retrogamer.
                                    </Card.Description>
                                    <List size="large">
                                        <List.Item>
                                            <List.Icon name='checked calendar' />
                                            <List.Content>07.02.2020</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='marker' />
                                            <List.Content>New York, NY</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='mail' />
                                            <List.Content>
                                                <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name='linkify' />
                                            <List.Content>
                                                <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                                            </List.Content>
                                        </List.Item>
                                    </List>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button fluid basic color='teal'>
                                        Follow
                                    </Button>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        'posts
                                        <NavLink to="/bob-smith">
                                            <Header floated="left" as='h3' color='teal'>
                                                Bob Smith
                                            </Header>
                                        </NavLink>
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <Feed>
                                        <Feed.Event>
                                            <Feed.Content>
                                                <Feed.Summary style={{ marginBottom: '7px' }}>
                                                    <a style={{ color: 'black' }}>8 Frontend Coding Ideas That Will Inspire You To Code </a>
                                                </Feed.Summary>
                                                <Feed.Date style={{ marginBottom: '3px' }} content='1 day ago' />
                                            </Feed.Content>
                                        </Feed.Event>
                                        <Divider fitted/>
                                        <Feed.Event>
                                            <Feed.Content>
                                                <Feed.Summary style={{ marginBottom: '7px' }}>
                                                    <a style={{ color: 'black' }}>Things I Wish I Knew Before I Started Coding</a>
                                                </Feed.Summary>
                                                <Feed.Date style={{ marginBottom: '3px' }} content='3 days ago' />
                                            </Feed.Content>
                                        </Feed.Event>
                                        <Divider fitted/>
                                        <Feed.Event>
                                            <Feed.Content>
                                                <Feed.Summary style={{ marginBottom: '7px' }}>
                                                    <a style={{ color:'black' }}>Coping with imposter syndrome</a>
                                                </Feed.Summary>
                                                <Feed.Date style={{ marginBottom: '3px' }} content='4 days ago' />
                                            </Feed.Content>
                                        </Feed.Event>
                                    </Feed>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Card href='#card-example-link-card' style={{ backgroundColor: 'white' }} fluid={true}>
                                <Card.Content>
                                    <Card.Header>Matthew</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Meta>
                                        <h1 style={{ color: 'black' }}>Home for JS developers</h1>
                                    </Card.Meta>
                                </Card.Content>
                                <Card.Content extra>
                                    <a style={{ marginRight: '10px' }}>
                                        <Icon name='like'/>
                                        10
                                    </a>
                                    <a>
                                        <Icon name='comments' />
                                        8
                                    </a>
                                </Card.Content>
                            </Card>
                            <Card style={{ backgroundColor: 'white' }} fluid={true}>-
                                <Card.Content>
                                    <Card.Header>Rosemary Bartolini commented on My freelancing workflow, from cold leads to paid invoices</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>Joined in 2015</span>
                                    </Card.Meta>
                                    <Card.Meta>
                                        <p style={{ color: 'black' }}>Rosemary Bartolini commented on My freelancing workflow, from cold leads to paid invoices</p>
                                    </Card.Meta>
                                    <Card.Description>
                                        Daniel is a comedian living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a style={{ marginRight: '10px' }}>
                                        <Icon name='like'/>
                                        10
                                    </a>
                                    <a>
                                        <Icon name='comments' />
                                        8
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Notifications;