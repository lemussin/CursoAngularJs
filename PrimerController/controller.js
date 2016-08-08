var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function(m){
	m.nombre = "Eduardo";
	m.apellido = "Lemus"

	m.nuevoComentario = {};
	m.comentarios = [
	{
		comentario: "Buen tutorial",
		username: "codigoFacilito"
	},
	{
		comentario:"Mal",
		username:"otro_usuario"
	}
	];

	m.agregarComentario=function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {};
	}

}]);