import { GET_PHOTO_LIST } from '../lib/constants';

const initialState = {
	photos: []
};
function rootReducer(state = initialState, action) {
	if (action.type === GET_PHOTO_LIST) {
		return {
			photos: action.payload
		};
	}
	return state;
}
export default rootReducer;
