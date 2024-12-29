import React from 'react'
import { avatars } from '../lib/appwrite'
import PropTypes from 'prop-types'

const Avatar = ({ name }) => {
    return (
        <React.Fragment>
            <figure className='avatar'>
                <img src={avatars.getInitials(name, 48, 48)}
                    alt={name}
                    width={48}
                    height={48}
                />
            </figure>
        </React.Fragment>
    )
}
Avatar.propTypes = {
    name: PropTypes.string,
}
export default Avatar