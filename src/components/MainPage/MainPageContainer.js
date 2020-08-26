import React from 'react';
import { connect } from 'react-redux';
import MainPage from './MainPage';

const MainPageContainer = (props) => {
    
    return (
        <MainPage {...props} />
    )
}

const mapStatesToProps = (state) => {
    return {
        
    }
}

export default connect(mapStatesToProps, {  })(MainPageContainer);