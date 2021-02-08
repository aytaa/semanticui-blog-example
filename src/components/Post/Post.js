import React from 'react';
import {
    Card,
    Container,
    Grid,
    Icon,
    Image,
    Button,
    Menu,
    Dropdown,
    Feed,
    Divider,
    Header,
    List
} from "semantic-ui-react";
import { loremIpsum } from 'react-lorem-ipsum';
import {NavLink} from "react-router-dom";

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

    return (
        <Container style={{ marginTop: '7em' }}>
            <Grid columns='equal'>
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
                    </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Post;