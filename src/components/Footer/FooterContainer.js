import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

const FooterContainer = (props) => {
    return (
        <Footer {...props} />
    )
}

const mapStatesToProps = (state) => {
    return {
        
    }
}

export default connect(mapStatesToProps, {  })(FooterContainer);