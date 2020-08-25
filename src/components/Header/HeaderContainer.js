import React from 'react';
import { connect } from 'react-redux';
import Header from './Header'

const HeaderContainer = (props) => {
    return (
        <Header {...props} />
    )
}

const mapStatesToProps = (state) => {
    return {
        links: state.menu.links,
    }
}

export default connect(mapStatesToProps, {  })(HeaderContainer);