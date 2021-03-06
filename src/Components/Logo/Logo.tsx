import React from 'react'
import './Logo.css'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'


const { Text } = Typography

function Logo(props) {
    return (
        <div className="logo">
            <Link to="/">
                <Text style={{fontSize: props.fontSize}} >Algo<span style={{ color: "#4299e1"}}>.school</span></Text>
            </Link>
        </div>
    )
}

export default Logo;