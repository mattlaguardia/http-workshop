angular.module('ThePresidentsApp', [])
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http']; //

function PresidentsController($http){
  var self = this;
  this.addPresident = addPresident;
  this.newPresident = {};
  this.getPresidents = getPresidents;
  self.all = [];

  function addPresident(){
    // Need to change this to do a http post //
    // Takes two arguments request and data you are trying to send //
    $http.post('http://localhost:3000/presidents', self.newPresident)
      .then(function(data){
        self.all = newPresident.data.presidents;
      })
    self.all.push(this.newPresident);
    self.newPresident = {};
  }

  function getPresidents() {
    $http.get('http://localhost:3000/presidents')
    .then(function(res){
      self.all = res.data.presidents;
    })
  }
  getPresidents();
}
