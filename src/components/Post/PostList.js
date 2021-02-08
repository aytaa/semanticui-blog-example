import React from 'react';
import {Card, Grid, Icon, Image, Label , Segment} from "semantic-ui-react";
import { GiQueenCrown } from 'react-icons/gi';

function PostList () {
    return (
        <Grid.Column width={8}>
                <Card href='/example-post' style={{ backgroundColor: 'white' }} fluid={true}>
                    <Image
                        style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }}
                        src='https://res.cloudinary.com/practicaldev/image/fetch/s--McVSMcOR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/mxc4y02ny9fyd0mv7iw7.jpg'
                        wrapped ui={true}
                    />
                    <Label
                        attached='top right'
                        color='teal'
                    >
                        #trend
                    </Label>
                    <Card.Content>
                        <Image
                            className="ui avatar image"
                            floated='left'
                            size='big'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>Bob Smith</Card.Header>
                        <Card.Meta>Feb 7 (21 hours ago)</Card.Meta>
                        <Card.Description style={{ color: 'black' }} >
                            <h1>Express in React ! & Backend</h1>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a style={{ marginRight: '10px' }}>
                            <Icon name="like" />
                            10
                        </a>
                        <a style={{ marginRight: '10px' }}>
                            <Icon name="comments outline" />
                            8
                        </a>
                        <a style={{ float: 'right'}}>
                            2 min read
                            <Icon
                                floated='right'
                                name="bookmark outline"  />
                        </a>
                    </Card.Content>
                </Card>
            <Card style={{ backgroundColor: 'white' }} fluid={true}>
                <Image
                    style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }}
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--8y32qf2y--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ej5e29ld7ewjox6fownn.png'
                    wrapped ui={true}
                />
                <Card.Content>
                    <Image
                        className="ui avatar image"
                        floated='left'
                        size='big'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Bob Smith</Card.Header>
                    <Card.Meta>Feb 7 (21 hours ago)</Card.Meta>
                    <Card.Description style={{ color: 'black' }}>
                        <h1>Daniel is a comedian living in Nashville.</h1>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="heart outline" />
                        10
                    </a>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="comments outline" />
                        8
                    </a>
                    <a style={{ float: 'right'}}>
                        2 min read
                        <Icon
                            floated='right'
                            name="bookmark outline"  />
                    </a>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: 'white' }} fluid={true}>
                <Image
                    style={{ padding: '5px' , backgroundColor: 'white' , borderRadius: '10px' }}
                    src='https://res.cloudinary.com/practicaldev/image/fetch/s--FqmSoG5d--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ap2z5u4t0884bulzvg85.png'
                    wrapped ui={true}
                />
                <Label
                    attached='top right'
                    color='teal'
                >
                    #trend
                </Label>
                <Card.Content>
                    <Image
                        className="ui avatar image"
                        floated='left'
                        size='big'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Bob Smith</Card.Header>
                    <Card.Meta>Feb 7 (21 hours ago)</Card.Meta>
                    <Card.Description style={{ color: 'black' }}>
                        <h1>Here’s Another List of Exciting Front-End Challenges</h1>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="heart outline" />
                        10
                    </a>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="comments outline" />
                        8
                    </a>
                    <a style={{ float: 'right'}}>
                        2 min read
                        <Icon
                            floated='right'
                            name="bookmark outline"  />
                    </a>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: 'white' }} fluid={true}>
                <Card.Content>
                    <Image
                        className="ui avatar image"
                        floated='left'
                        size='big'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Bob Smith</Card.Header>
                    <Card.Meta>Feb 7 (21 hours ago)</Card.Meta>
                    <Card.Description style={{ color: 'black' }}>
                        <h1>Daniel is a comedian living in Nashville.</h1>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="heart outline" />
                        10
                    </a>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="comments outline" />
                        8
                    </a>
                    <a style={{ float: 'right'}}>
                        2 min read
                        <Icon
                            floated='right'
                            name="bookmark outline"  />
                    </a>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: 'white' }} fluid={true}>
                <Card.Content>
                    <Image
                        className="ui avatar image"
                        floated='left'
                        size='big'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Bob Smith</Card.Header>
                    <Card.Meta>Feb 7 (21 hours ago)</Card.Meta>
                    <Card.Description style={{ color: 'black' }}>
                        <h1>Daniel is a comedian living in Nashville.</h1>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="heart outline" />
                        10
                    </a>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="comments outline" />
                        8
                    </a>
                    <a style={{ float: 'right'}}>
                        2 min read
                        <Icon
                            floated='right'
                            name="bookmark outline"  />
                    </a>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: 'white' }} fluid={true}>
                <Card.Content>
                    <Image
                        className="ui avatar image"
                        floated='left'
                        size='big'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Bob Smith</Card.Header>
                    <Card.Meta>Feb 7 (21 hours ago)</Card.Meta>
                    <Card.Description style={{ color: 'black' }}>
                        <h1>Daniel is a comedian living in Nashville.</h1>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="heart outline" />
                        10
                    </a>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="comments outline" />
                        8
                    </a>
                    <a style={{ float: 'right'}}>
                        2 min read
                        <Icon
                            floated='right'
                            name="bookmark outline"  />
                    </a>
                </Card.Content>
            </Card>
            <Card style={{ backgroundColor: 'white' }} fluid={true}>
                <Card.Content>
                    <Image
                        className="ui avatar image"
                        floated='left'
                        size='big'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Bob Smith</Card.Header>
                    <Card.Meta>Feb 7 (21 hours ago)</Card.Meta>
                    <Card.Description style={{ color: 'black' }}>
                        <h1>Daniel is a comedian living in Nashville.</h1>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="heart outline" />
                        10
                    </a>
                    <a style={{ marginRight: '10px' }}>
                        <Icon name="comments outline" />
                        8
                    </a>
                    <a style={{ float: 'right'}}>
                        2 min read
                        <Icon
                            floated='right'
                            name="bookmark outline"  />
                    </a>
                </Card.Content>
            </Card>
        </Grid.Column>
);
}

export default PostList;