import React from 'react'
import { Dropdown , Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const trigger = (
    <span>
    <Image className="ui avatar image" src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" name='user' />
  </span>
)

const options = [
    {
        key: 'user',
        text: (
            <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
        ),
        disabled: true,
    },
    { key: 'profile', text: 'Your Profile' },
    { key: 'stars', text: 'Your Stars' },
    { key: 'explore', text: 'Explore' },
    { key: 'integrations', text: 'Integrations' },
    { key: 'help', text: 'Help' },
    { key: 'settings', text: 'Settings' },
    { key: 'sign-out', text: 'Sign Out' },
]

const UserTrigger = () => (
    <Dropdown icon={null} trigger={trigger} options={options} />
)

export default UserTrigger