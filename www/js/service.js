angular.module('todoly.service', [])

.service('CrudService', CrudService);

function CrudService(){

  this.items= [
    {
      name:'Lorem'
    },
    {
      name:'Ipsum'
    },
    {
      name:'Dolor'
    },

  ];
}

CrudService.prototype.all = function(){
  return this.items;
};

CrudService.prototype.new = function(newItem){
  this.items.push(newItem);
};

CrudService.prototype.remove = function(item){
  this.items.splice(this.items.indexOf(item), 1);
};
