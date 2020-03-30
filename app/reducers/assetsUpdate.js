import { assetsUpdate } from '../actions/index';

const INITIAL_STATE = { all:[], post:null };

export default function (state = INITIAL_STATE, action) {
	switch(action.type){
	case assetsUpdate:
		return { ...state, all:action.payload.data };
	default:
		return state;
	}
}
