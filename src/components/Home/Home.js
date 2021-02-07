import React from 'react';
import {Container, Grid, Segment, Image , Card , Icon} from "semantic-ui-react";

function Home () {
    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns='equal'>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                        </Card>
                        <Segment>
                            <Card>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                            </Card>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment>
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
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    );
}

export default Home;