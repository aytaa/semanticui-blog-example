import React, { createRef } from 'react';
import {Card, Container, Grid, Icon, Image, Button, Menu, Dropdown, Sticky, Ref} from "semantic-ui-react";
import { loremIpsum } from 'react-lorem-ipsum';

const options = [
    { key: 1, text: 'Share to Facebook', icon:'facebook square', value: 1 },
    { key: 2, text: 'Share to Twitter', icon:'twitter', value: 2 },
    { key: 3, text: 'Share to Linkedin', icon:'linkedin', value: 3 },
    { key: 4, text: 'Share to Reddit', icon:'reddit', value: 4 },
]

const trigger = (
    <span>
     <Icon name="ellipsis vertical" />
    </span>
)

function Post () {

    const contextRef = createRef()

    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns='equal'>
                <Ref innerRef={contextRef}>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Card style={{ backgroundColor: 'white' }} fluid={true}>
                                <Image
                                    style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }}
                                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--McVSMcOR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/mxc4y02ny9fyd0mv7iw7.jpg'
                                    wrapped ui={false}
                                />
                                <Card.Content>
                                    <Menu floated='right' style={{ border: 'none' , borderStyle: 'none'}}>
                                        <Dropdown
                                            options={options}
                                            simple
                                            item
                                            trigger={trigger}
                                            icon={null}
                                        />
                                    </Menu>
                                    <Image
                                        className="ui avatar image"
                                        floated='left'
                                        size='big'
                                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                    />
                                    <Card.Header>Bob Smith</Card.Header>
                                    <Card.Meta>Full Stack Developer</Card.Meta>
                                    <Card.Description>
                                        {loremIpsum({ p: 10 }).map(text => (
                                            <div className="text" key={text}>
                                                {text}
                                            </div>
                                        ))}
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
                            <Sticky
                                bottomOffset={80}
                                context={contextRef}
                                offset={80}
                                pushing
                            >
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
                                            Steve wants to add you to the group <strong>best friends</strong>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Button fluid basic color='teal'>
                                            Follow
                                        </Button>
                                    </Card.Content>
                                </Card>
                            </Sticky>
                        </Grid.Column>
                    </Grid.Row>
                </Ref>
            </Grid>
        </Container>
    );
}

export default Post;