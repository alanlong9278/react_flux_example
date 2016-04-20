var AppDispatcher = require('../dispatcher/AppDispatcher');

var BlogActions = {

  addNewItem: function (item) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      item: item
    });
  },
  deleteItem: function (id) {
  	AppDispatcher.dispatch({
  		actionType: 'DELETE_ITEM',
  		id: id
  	});
  }

};

module.exports = BlogActions;
