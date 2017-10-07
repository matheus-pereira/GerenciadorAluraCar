angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/tabs/agendamentos')

  $stateProvider
    

  .state('tabsController.agendamentos', {
    url: '/agendamentos',
    views: {
      'tab1': {
        templateUrl: 'templates/agendamentos.html',
        controller: 'AgendamentosController'
      }
    }
  })

  .state('tabsController.fornecedores', {
    url: '/fornecedores',
    views: {
      'tab2': {
        templateUrl: 'templates/fornecedores.html',
        controller: 'FornecedoresController'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

});