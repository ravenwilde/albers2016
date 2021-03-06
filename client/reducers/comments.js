function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			// return existing + new
			return [...state,{
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return [
				...state.slice(0, action.i),
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

function comments(state = [], action) {
	if(typeof action.exId !== 'undefined') {
		return {
			// take current state
			...state,
			// overwrite this post with a new one
			[action.exId]: postComments(state[action.exId], action)
		}		
	}
	return state;
}

export default comments;