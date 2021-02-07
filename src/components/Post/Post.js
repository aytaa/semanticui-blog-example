import React from 'react';
import {Card, Container, Grid, Icon , Image, Button} from "semantic-ui-react";

function Post () {
    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Card href='/example-post' style={{ backgroundColor: 'white' }} fluid={true}>
                                <Image
                                    style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }}
                                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--McVSMcOR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/mxc4y02ny9fyd0mv7iw7.jpg'
                                    wrapped ui={false}
                                />
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
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Card.Content>
                                    <Image
                                        className="ui avatar image"
                                        floated='right'
                                        size='big'
                                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                    />
                                    <Card.Header>Bob Smith</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button fluid basic color='teal'>
                                        Follow
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Post;