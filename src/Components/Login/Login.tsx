import React, { Dispatch, SetStateAction } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../firebase';
import { firebaseUiConfig } from '../../firebase';
import styles from './Login.module.scss'

interface Props {
    visible: boolean
    setLoginVisible: Dispatch<SetStateAction<boolean>>
}

function Login(props: Props) {

    return (
        <>
            <div className={styles.wrapper} style={props.visible ? {} : { visibility: 'hidden', opacity: 0 }}>
                <div onClick={() => { props.setLoginVisible(false) }} className={styles.closeButton}><u>close</u></div>
                <div className={styles.loginTitle}>Log in</div>
                <div className={styles.loginText}>Use an account to save your progress </div>
                <StyledFirebaseAuth uiConfig={firebaseUiConfig} firebaseAuth={firebase.auth()} />
            </div>

        </>
    );
}

export default Login