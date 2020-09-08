import * as ActionTypes from '../ActionTypes';
export const postFavorites = (cardId) => (dispatch) => {
	setTimeout(() => {
		dispatch(addFavorite(cardId));
	}, 2000);
};
export const addFavorite = (cardId) => ({
	type: ActionTypes.ADD_FAVORITE,
	payload: cardId,
});
