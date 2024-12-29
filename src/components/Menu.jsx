import PropTypes from 'prop-types'
import React from 'react'

const Menu = ({ classes = '', children }) => {
    return (
        <React.Fragment>
            <div className={`menu transition-custom ${classes}`}>
                {children}
            </div>
        </React.Fragment>
    )
}

Menu.propTypes = {
    classes: PropTypes.string,
    children: PropTypes.any,
}

export default Menu
