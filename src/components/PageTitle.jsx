import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet-async'


function PageTitle({ title }) {
    return (<React.Fragment>
        <Helmet>
            <title>{title}</title>
        </Helmet>
     </React.Fragment>
    )
}
PageTitle.propTypes = {
    title: PropTypes.string,
}

export default PageTitle