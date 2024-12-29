import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

export function Button({
    classes = '',
    variant = 'filled',
    color = 'primary',
    children,
    ...rest
}) {
    return (
        <React.Fragment>
            <motion.button className={`btn ${variant} ${color} ${classes}`} {...rest} >
                {children}
            </motion.button>
        </React.Fragment>
    )
}
Button.propTypes = {
    classes: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any,
}



export const IconBtn = ({ classes = '', icon, size = '', children, ...rest }) => {
    return (
        <motion.button className={`icon-btn ${size} ${classes}`} {...rest}>
            {children}
            {!children && (
                <span className={`material-symbols-rounded icon`}>{icon}</span>
            )}
            <div className='state-layer'></div>
        </motion.button>
    )
}

export const ExtendedFab = ({ href, text, classes = '', ...rest }) => {
    return (
        <Link to={href}
            className={`extended-fab ${classes}`}
            {...rest}
        >

            <span className='material-symbols-rounded'>add</span>
            <span className='truncate'>{text}</span>
            <div className='state-layer'></div>

        </Link>
    )
}

ExtendedFab.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
    rest: PropTypes.string,
    href: PropTypes.string,
}
IconBtn.propTypes = {
    classes: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.any,
}

