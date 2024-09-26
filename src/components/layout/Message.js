import { useState, useEffect} from 'react'
import React from 'react'
import styles from './Message.modulo.css'

function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    return (
        <div
            className={`${styles.message} 
    ${styles[type]}`}>{msg}</div>
    )
}

export default Message