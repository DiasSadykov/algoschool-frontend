import React from 'react';
import { Layout, Menu } from 'antd'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'

const { Header } = Layout;

function Navbar() {
    return (
        <Header style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
            <Logo/>
            <Menu mode="horizontal" theme="light" selectable={false}>
                <Menu.Item><Link to="/about">About</Link></Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar;