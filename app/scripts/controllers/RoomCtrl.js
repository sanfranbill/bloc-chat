(function() {
    function RoomCtrl(Room) {
        this.all = Room.all;
        /** Establish the selected room with the following function. */
        this.setRoom = function(clickedRoom) {
            this.selectedRoom = clickedRoom;
            this.messages = Message.getByRoomId(this.selectedRoom.$id);
            console.log(this.messages);
        };     
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ["Room", RoomCtrl]);
})();