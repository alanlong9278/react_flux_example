var Dispatcher = require('flux').Dispatcher;
var CommentDispatcher = new Dispatcher();
var CommentListStore = require('../stores/BlogListStore');

CommentDispatcher.register(function (action) {
	switch(action.actionType) {
		case 'ADD_NEW_ITEM':
			CommentListStore.addNewItemHandler(action.item);
			CommentListStore.emitChange();
			break;
		case 'DELETE_ITEM':
			CommentListStore.deleteItemHandler(action.id);
			CommentListStore.emitChange();
			break;
		case 'UPDATE_ITEM':
			CommentListStore.updateItemHandler(action.item);
			CommentListStore.emitChange();
			break;
		default:

	}
})

module.exports = CommentDispatcher;