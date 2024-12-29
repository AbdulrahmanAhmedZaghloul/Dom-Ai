import React from 'react'
import PropTypes from 'prop-types'


function TextField({
    classes = '',
    helperText,
    label,
    name,
    placeholder = '',
    fieldClasses = '',
    ...rest
}) {
    return (
        <React.Fragment>
            <div className={`text-field-wrapper ${classes}`}            >
                <label
                    htmlFor={name}
                    className='label-text'
                >
                    {label}
                </label>
                <input type="text"
                    className={`text-field ${fieldClasses}`}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    {...rest}
                />
                {helperText && <p className='helper-text'>{helperText}</p>}
            </div>
        </React.Fragment>
    )
}


TextField.propTypes = {
    classes: PropTypes.string,
    helperText: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    fieldClasses: PropTypes.string,
}


export default TextField