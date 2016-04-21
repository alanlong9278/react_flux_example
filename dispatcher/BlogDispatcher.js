var Dispatcher = require('flux').Dispatcher;
var BlogDispatcher = new Dispatcher();
var BlogListStore = require('../stores/BlogListStore');

BlogDispatcher.register(function (action) {
	switch(action.actionType) {
		case 'ADD_NEW_ITEM':
			BlogListStore.addNewItemHandler(action.item);
			BlogListStore.emitChange();
			break;
		case 'DELETE_ITEM':
			BlogListStore.deleteItemHandler(action.id);
			BlogListStore.emitChange();
			break;
		case 'UPDATE_ITEM':
			BlogListStore.updateItemHandler(action.item);
			BlogListStore.emitChange();
			break;
		default:

	}
})

module.exports = BlogDispatcher;