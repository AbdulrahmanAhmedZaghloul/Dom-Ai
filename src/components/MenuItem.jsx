import PropTypes from 'prop-types'
import React from 'react'

export const MenuItem = ({classes = '' , labelText, ...rest}) => {
  return (
    <React.Fragment>
        <button className={`menu-item ${classes}`}
        {...rest}
        >
            <span>{labelText}</span>
            <div className='state-layer'>

            </div>
        </button>
    </React.Fragment>
  )
}


MenuItem.propTypes = {
    classes: PropTypes.string,
    labelText: PropTypes.string,
}