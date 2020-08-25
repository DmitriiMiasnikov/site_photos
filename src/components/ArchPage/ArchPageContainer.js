import React from 'react';
import { connect } from 'react-redux';
import ArchPage from './ArchPage';

const ArchPageContainer = (props) => {
    return (
        <ArchPage {...props} />
    )
}

const mapStatesToProps = (state) => {
    return {
        
    }
}

export default connect(mapStatesToProps, {  })(ArchPageContainer);