const SDFSDF = 'SDFSDF';

const stateDefault = {
    links: [
        'Main page',
        'Nature',
        'Architecture',
        'About me'
    ]
}

const menuReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case(SDFSDF): {
           return {
               ...state,
           }
        }
    }
    return state;
}

export default menuReducer;