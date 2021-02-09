import React, { createRef } from 'react';
import {Container, Grid, Feed, Image , Card , Icon , Sticky , Ref, Divider, Button} from "semantic-ui-react";
import RightSide from "./RightSide/RightSide";
import PostList from "../Post/PostList";

function Home () {
    const contextRef = createRef()

    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns='equal'>
                <Ref innerRef={contextRef}>
                <Grid.Row>
                    <Grid.Column width={4}>
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
                    <PostList />
                    <Grid.Column width={4}>
                        <RightSide />
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    #jobs
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Feed>
                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='1 day ago' />
                                            <Feed.Summary>
                                                You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                    <Divider fitted/>
                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                                        <Feed.Content>
                                            <Feed.Date content='3 days ago' />
                                            <Feed.Summary>
                                                You added <a>Molly Malone</a> as a friend.
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                    <Divider fitted/>
                                    <Feed.Event>
                                        <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        <Feed.Content>
                                            <Feed.Date content='4 days ago' />
                                            <Feed.Summary>
                                                You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                            </Feed.Summary>
                                        </Feed.Content>
                                    </Feed.Event>
                                </Feed>
                            </Card.Content>
                            <Card.Content extra>
                               <Button fluid color="teal" >
                                   <Icon name="briefcase" />
                                   Create Job
                               </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                </Ref>
            </Grid>
        </Container>
    );
}

export default Home;