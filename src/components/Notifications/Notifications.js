import React, { createRef , useState } from 'react';
import {Container, Grid , Image , Card , Icon , Menu} from "semantic-ui-react";

function Notifications () {

    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns='equal'>
                <h1>Notifications</h1>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <div className="ui pointing vertical menu">
                                <a className="active item">All</a>
                                <a className="item">Comments</a>
                                <a className="item">Posts</a>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={11}>
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