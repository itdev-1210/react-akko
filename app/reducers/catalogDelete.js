import { catalogDelete } from '../actions/index';

const INITIAL_STATE = { all:[], post:null };

export default function (state = INITIAL_STATE, action) {
	switch(action.type){
	case catalogDelete:
		return { ...state, all:action.payload.data };
	default:
		return state;
	}
}
