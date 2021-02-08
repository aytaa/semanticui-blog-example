import React from 'react';
import { Image, List } from 'semantic-ui-react'

function RightSide () {
        return (
            <List animated verticalAlign='middle'>
                <h2>trend users</h2>
                <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                    <List.Content>
                        <List.Header>Helen</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                    <List.Content>
                        <List.Header>Christian</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                    <List.Content>
                        <List.Header>Daniel</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                    <List.Content>
                        <List.Header>Daniel</List.Header>
                    </List.Content>
                </List.Item>
            </List>
    );
}

export default RightSide;