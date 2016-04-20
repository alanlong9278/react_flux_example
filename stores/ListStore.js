var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (item) {
  	this.items.push(item);
  },

  deleteItemHandler: function (id) {
  	for(var i = this.items.length; i--;) {
          if(this.items[i].id == id) {
              this.items.splice(i, 1);
          }
      }
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;
