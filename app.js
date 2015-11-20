angular
.module('myApp',['ngRoute'])
.config(appConfig)
.controller('MyController',MyController)
.service('MyService',MyService);

function appConfig($routeProvider){
  $routeProvider
  .when('/',{     
     templateUrl:'tpl/listado.html',
     controller:'MyController',
     controllerAs:'my'
  });
}

function MyController($scope,MyService){
  this.productos = MyService.getData(); 	
}

function MyService(){
  return {
    getData : getData
  } 
 
 function getData(){
   var datos = [
     {titulo:'Producto 1',precio:2 },
     {titulo:'Producto 2',precio:1.5},
     {titulo:'Producto 3',precio:4.2},
     {titulo:'Producto 4',precio:3},
     {titulo:'Producto 5',precio:2.5}
   ];
   
   console.log(datos);
   return datos;

 }

}