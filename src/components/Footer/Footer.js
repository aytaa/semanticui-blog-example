import React from 'react';
import {Container, Divider, Grid, Header, Image, List, Segment, Icon} from "semantic-ui-react";

function Footer () {
    return (
        <div>
            <Segment tertiary color="teal" vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                    <Grid  stackable>
                        <Grid.Column width={3}>
                            <List link >
                                <List.Item >
                                    Home
                                </List.Item>
                                <List.Item as='a'>Jobs</List.Item>
                                <List.Item as='a'>Sponsors</List.Item>
                                <List.Item as='a'>About</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <List link >
                                <List.Item as='a'>Privacy Policy</List.Item>
                                <List.Item as='a'>F.A.Q</List.Item>
                                <List.Item as='a'>Term of Use</List.Item>
                                <List.Item as='a'>Contact</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <List link >
                                <List.Item as='a' >Read Time</List.Item>
                                <List.Item as='a'>Videos</List.Item>
                                <List.Item as='a'>Tags</List.Item>
                                <List.Item as='a'>Just Do It</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header  as='h4' content='Node Community - A social networking platform for developers' />
                            <p color="black">
                                “If you fear failure, you will never go anywhere.”
                            </p>
                        </Grid.Column>
                    </Grid>

                    <Divider />
                    <List horizontal link size='small'>
                        <List.Item as='a' href='https://www.github.com'>
                            <Icon name="github" size="big"/>
                        </List.Item>
                        <List.Item as='a' href='https://www.facebook.com'>
                            <Icon name="facebook square" size="big"/>
                        </List.Item>
                        <List.Item as='a' href='https://www.twitter.com'>
                            <Icon name="twitter" size="big"/>
                        </List.Item>
                        <List.Item as='a' href='https://www.instagram.com'>
                            <Icon name="instagram" size="big"/>
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    );
}

export default Footer;