import React from 'react';
import { connect } from 'react-redux';
import AboutmePage from './AboutmePage';

const AboutmePageContainer = (props) => {
    return (
        <AboutmePage {...props} />
    )
}

const mapStatesToProps = (state) => {
    return {
        
    }
}

export default connect(mapStatesToProps, {  })(AboutmePageContainer);