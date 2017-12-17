(function() {
    function BlocChatCookies($cookies, $uibModal) {
        console.log("cookies test");
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: "/templates/login.html",
                controller: function($scope){
                    // this is the modal controller; should check to see if there is a cookie, if not, then must create a username
                    $scope.createUserName = function(userName) {
                        console.log(userName);
                        $cookies.put('blocChatCurrentUser', userName)
                    }
                }
            })    
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies])
})();