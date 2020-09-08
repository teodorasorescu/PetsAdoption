import React from 'react';
import Cards from '../card';
import * as ActionTypes from '../ActionTypes';
//import Cards from '../components/card';

export const favorites = (state = [], action) => {
	switch (action.type) {
		case ActionTypes.ADD_FAVORITE:
			if (state.some((el) => el === action.payload)) {
				return state;
			} else {
				return state.concat(action.payload);
			}
		default:
			return state;
	}
};
