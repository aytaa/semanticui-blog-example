import React from 'react';
import {Container , Image, Menu, Input} from 'semantic-ui-react';
import UserTrigger from "./UserTrigger";
import 'semantic-ui-css/semantic.min.css';

function Navbar () {

    return (
        <Menu fixed='top' >
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='https://semantic-ui.com/examples/assets/images/logo.png' />
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <UserTrigger />
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
}

export default Navbar;