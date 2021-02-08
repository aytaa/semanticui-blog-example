import React from 'react';
import {Container , Image, Menu, Input, Button, Icon } from 'semantic-ui-react';
import UserTrigger from "./UserTrigger";
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from "react-router-dom";

function Navbar () {

    return (
        <Menu fixed='top'>
            <Container>
                <Menu.Item as='a' header>
                    <NavLink to="/" >
                        <Image size='mini' src='https://semantic-ui.com/examples/assets/images/logo.png' />
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <NavLink to="/signin" >
                            <Button style={{ marginRight: '3px' }} basic>Login</Button>
                        </NavLink>
                        <NavLink to="/signup">
                            <Button color="teal">Create Account</Button>
                        </NavLink>
                        <NavLink to="/write">
                            <Button color="teal">
                                <Icon name="pencil alternate" />
                                Write Post
                            </Button>
                        </NavLink>
                        <NavLink to="/notifications" >
                            <Icon name='bell outline' color="black" size="big"/>
                        </NavLink>
                        <NavLink to="/messages">
                            <Icon name='plug' color="black" size="big"/>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <UserTrigger />
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
}

export default Navbar;