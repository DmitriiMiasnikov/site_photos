import React from 'react';
import { connect } from 'react-redux';
import NaturePage from './NaturePage';

const NaturePageContainer = (props) => {
    return (
        <NaturePage {...props} />
    )
}

const mapStatesToProps = (state) => {
    return {
        
    }
}

export default connect(mapStatesToProps, {  })(NaturePageContainer);