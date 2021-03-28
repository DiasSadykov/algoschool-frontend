import React, { useState } from 'react';
import { Layout, Menu } from 'antd'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import Emoji from '../Emoji/Emoji';
import styles from './Navbar.module.scss'
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import { getLoggedInAndUser } from '../../Selectors/user';
import firebase from '../../firebase';

const { Header } = Layout;
const { SubMenu } = Menu;

function Navbar() {
    const [loginVisible, setLoginVisible] = useState(false)
    const [isLoggedIn, user] = useSelector(getLoggedInAndUser)
    return (
        <Header style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
            <Logo />
            <Menu mode="horizontal" theme="light" selectable={false}>
                <Menu.Item><Link to="/about">About</Link></Menu.Item>
                {isLoggedIn ? <SubMenu style={{ float: 'right' }} key="SubMenu" title={<div className={styles.userInfo}><div className={styles.userImg} style={{backgroundImage: `url(${user.photoURL})`}}></div>{user.displayName}</div> }>
                    <Menu.Item onClick={() => {
                        firebase.auth().signOut().then(function() {
                          }, function(error) {
                          });
                    }} key="setting:2">Logout</Menu.Item>

                </SubMenu> : 
                <>
                <Menu.Item onClick={()=>{
                    setLoginVisible(!loginVisible)
                }} style={{ float: 'right', fontWeight: 500, color: '#a0aec0' }} key="Login" >Login  <Emoji symbol="🥑"></Emoji>

                </Menu.Item>
                <Login setLoginVisible={setLoginVisible} visible={loginVisible}/>
                </>
                }

            </Menu>

        </Header>
    )
}

export default Navbar;