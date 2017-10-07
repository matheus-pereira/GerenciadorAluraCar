angular.module('app.controllers', ['idf.br-filters'])
  
.controller('AgendamentosController', function ($scope, GerenciadorService) {

    $scope.agendamentos = [];

    GerenciadorService.obterAgendamentos().then(function(dados){
        $scope.agendamentos = dados;
    });

})
   
.controller('FornecedoresController', function ($scope, GerenciadorService) {

    $scope.fornecedores = [];

    GerenciadorService.obterFornecedores().then(function(dados){
        $scope.fornecedores = dados;
    });

})
    