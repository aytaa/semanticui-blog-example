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
                                <Image style={{ padding: '10px' }} src='https://cdn.worldvectorlogo.com/logos/digitalocean.svg' />
                            </Card>
                        </Sticky>
                        <Card>
                            <Image src='https://techcrunch.com/wp-content/uploads/2021/01/aws-parler.jpg?w=730&crop=1' />
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Card fluid={true}>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Daniel</Card.Header>
                                <Card.Meta>Joined in 2016</Card.Meta>
                                <Card.Description>
                                    Daniel is a comedian living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    10 Friends
                                </a>
                            </Card.Content>
                        </Card>
                        <Card fluid={true}>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Daniel</Card.Header>
                                <Card.Meta>Joined in 2016</Card.Meta>
                                <Card.Description>
                                    Daniel is a comedian living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    10 Friends
                                </a>
                            </Card.Content>
                        </Card>
                        <Card fluid={true}>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Daniel</Card.Header>
                                <Card.Meta>Joined in 2016</Card.Meta>
                                <Card.Description>
                                    Daniel is a comedian living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    10 Friends
                                </a>
                            </Card.Content>
                        </Card>
                        <Card fluid={true}>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Daniel</Card.Header>
                                <Card.Meta>Joined in 2016</Card.Meta>
                                <Card.Description>
                                    Daniel is a comedian living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    10 Friends
                                </a>
                            </Card.Content>
                        </Card>
                        <Card fluid={true}>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Daniel</Card.Header>
                                <Card.Meta>Joined in 2016</Card.Meta>
                                <Card.Description>
                                    Daniel is a comedian living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='user' />
                                    10 Friends
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