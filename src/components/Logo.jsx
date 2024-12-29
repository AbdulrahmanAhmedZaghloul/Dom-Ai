import React from 'react'
import { Link } from 'react-router-dom'

import { logoLight, logoDark } from '../assets/assets'
import PropTypes from 'prop-types'
export const Logo = ({ classes = '' }) => {
    return (
        <React.Fragment>
            <Link
                to='/'
                className={` ${classes}`}
            >
                <img className='block dark:hidden w-8 ' src={logoLight} alt="chat Ai logo" />
                <img className='hidden dark:block w-8 ' src={logoDark} alt="chat Ai logo" />
            </Link>     
               </React.Fragment>
    )
}



Logo.propTypes = {
    classes: PropTypes.string,
}