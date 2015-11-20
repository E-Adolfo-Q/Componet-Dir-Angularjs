angular
.module('myApp',['ngRoute'])
.config(appConfig)
.service('MyService',MyService)
.directive('miDirectiva',miDirectiva);

function appConfig($routeProvider){
  $routeProvider
  .when('/',{     
     template:'<mi-directiva><mi-directiva/>'
  });
}

function miDirectiva(){  
  return{
    scope:{},
    controller: function(MyService){
     this.productos = MyService.getData();   
    },
    controllerAs:'vm',
    template:[
    '<h1>Listado de Productos</h1>',
     '<ul>',
       '<li ng-repeat="producto in vm.productos">',
         '<strong>{{ producto.titulo }}</strong>:{{ producto.precio | currency }}',
       '</li>',      
      '</ul>'       
    ].join('')
  }
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