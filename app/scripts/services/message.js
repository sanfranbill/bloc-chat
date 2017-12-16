(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        /** This func takes the selected room and shows all its messages. "orderByChild" method reveals the messages logged in the firebase database of the selected room. Its chained together with the chile() method that is here represented by the 'ref' variable. */
        Message.getByRoomId = function(roomId) {
            // filter messages by their room ID
            var messages =$firebaseArray(ref.orderByChild('roomId') .equalTo(roomId));
            console.log(roomId);
            return messages;
        
        }
        
        return Message;
    };

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();