import React from 'react';
import {Button, Comment, Form, Icon, Popup} from 'semantic-ui-react';


function Comments () {
    return (
        <Comment.Group size='large'>
            <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Bob Smith</Comment.Author>
                    <Comment.Actions>
                        <Comment.Action active>
                            <Popup
                                style={{ marginTop: '5px' }}
                                trigger={<Icon name='info' circular size='small'/>}
                                content='I am positioned to the right center'
                                position='right center'
                            />
                        </Comment.Action>
                    </Comment.Actions>
                    <Form reply>
                        <Form.TextArea placeholder="add comment"/>
                        <Button
                            content='Add Reply'
                            labelPosition='left'
                            icon='reply'
                            color="teal"
                        />
                    </Form>
                </Comment.Content>
            </Comment>
            <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                    <Comment.Metadata>
                        <div>Yesterday at 12:30AM</div>
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action><Icon name="reply" /></Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com//images/avatar/small/jenny.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                            <Comment.Metadata>
                                <div>Just now</div>
                            </Comment.Metadata>
                            <Comment.Text>Elliot you are always so right :)</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action><Icon name="reply" /></Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </Comment>

            <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com//images/avatar/small/joe.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                    <Comment.Metadata>
                        <div>5 days ago</div>
                    </Comment.Metadata>
                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action><Icon name="reply" /></Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        </Comment.Group>
    );
}

export default Comments;