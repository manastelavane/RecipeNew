/* eslint-disable linebreak-style */
export function leaveRoom(userID, chatRoomUsers) {
    return chatRoomUsers.filter((user) => user.id != userID);
}
  