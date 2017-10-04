(function (){
 angular.module('myApp').directive('mainLogin', ['$rootScope', function ($rootScope) {
          return {
              restrict:'A',
              scope:true,
              transclude: true,
              template: `
                <div class="loginPanel">
                  <div ng-transclude></div>
                </div>
              `,
              link:function(scope,elem,attr){
                debugger
              }
          }
      }])
  }
)();
