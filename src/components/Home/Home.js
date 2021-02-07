import React, { createRef } from 'react';
import {Container, Grid, Segment, Image , Card , Icon , Sticky , Ref} from "semantic-ui-react";

function Home () {
    const contextRef = createRef()

    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns='equal'>
                <Ref innerRef={contextRef}>
                <Grid.Row>
                    <Grid.Column>
                        <Sticky
                            bottomOffset={80}
                            context={contextRef}
                            offset={80}
                            pushing
                        >
                            <Card>
                                <Image style={{ padding: '10px' , borderRadius:'10px' }} src='https://techcrunch.com/wp-content/uploads/2021/01/aws-parler.jpg?w=730&crop=1' />
                            </Card>
                        </Sticky>
                        <Card>
                            <Image style={{ padding: '10px', borderRadius:'3px' }} src='https://cdn.worldvectorlogo.com/logos/digitalocean.svg' />
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Card style={{ backgroundColor: 'white' }} fluid={true}>
                            <Image style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }} src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
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
                        <Card style={{ backgroundColor: 'white' }} fluid={true}>
                            <Image style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }} src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Meta>
                                    <h1 style={{ color: 'black' }}>Home for JS developers</h1>
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
                        <Card style={{ backgroundColor: 'white' }} fluid={true}>
                            <Image style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }} src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Meta>
                                    <h1 style={{ color: 'black' }}>Home for JS developers</h1>
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
                        <Card style={{ backgroundColor: 'white' }} fluid={true}>
                            <Image style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }} src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Meta>
                                    <h1 style={{ color: 'black' }}>Home for JS developers</h1>
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
                        <Card style={{ backgroundColor: 'white' }} fluid={true}>
                            <Image style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }} src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Meta>
                                    <h1 style={{ color: 'black' }}>Home for JS developers</h1>
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
                        <Card style={{ backgroundColor: 'white' }} fluid={true}>
                            <Image style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }} src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
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
                        <Card style={{ backgroundColor: 'white' }} fluid={true}>
                            <Image style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }} src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Meta>
                                    <h1 style={{ color: 'black' }}>Home for JS developers</h1>
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
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                </Grid.Row>
                </Ref>
            </Grid>
        </Container>

    );
}

export default Home;