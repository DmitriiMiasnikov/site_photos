const SDFSDF = 'SDFSDF';

const stateDefault = {
    links: {
        main: 'Main page',
        nature: 'Nature',
        arch: 'Architecture',
        aboutme: 'About me'
    }
}

const menuReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case(SDFSDF): {
           return {
               ...state,
           }
        }
        default: break;
    }
    return state;
}

export default menuReducer;