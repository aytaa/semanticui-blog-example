import React from 'react'
import { Dropdown , Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const trigger = (
    <span>
    <Image size="mini" className="ui avatar image" src="https://avatars.githubusercontent.com/u/24729859?s=460&u=7ad7b67136cc3bdffed9a8248a454f1f00fe6be7&v=4" name='user' />
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