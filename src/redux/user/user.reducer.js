import { SET_CURRENT_USER } from './user.types';

const INITIL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIL_STATE, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };

        default:
            return state;
    }
};

export default userReducer;
