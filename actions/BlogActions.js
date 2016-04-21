var BlogDispatcher = require('../dispatcher/BlogDispatcher');

var BlogActions = {
  addNewItem: function (item) {
    BlogDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      item: item
    });
  },

  deleteItem: function (id) {
  	BlogDispatcher.dispatch({
  		actionType: 'DELETE_ITEM',
  		id: id
  	});
  },

  updateItem: function(item) {
  	BlogDispatcher.dispatch({
  		actionType: 'UPDATE_ITEM',
  		item: item
  	});
  }
};

module.exports = BlogActions;
