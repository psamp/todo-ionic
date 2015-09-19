angular.module('todoly.controller', [])

.controller('MainCtrl', function(CrudService) {
  this.items = CrudService.all();
  this.remove = function(item) {
    CrudService.remove(item);
  };
})

.controller('AddCtrl', function(CrudService) {
  this.addNewItem = function(newItem) {
    var newTodo = {};

    if (newItem){
      newTodo = {
        name: newItem
      };
      CrudService.new(newTodo);
      console.log('item', newTodo);
    }
  };
});
