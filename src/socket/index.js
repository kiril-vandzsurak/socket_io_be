let onlineUsers = [];

export const newConnectionHandler = (newClient) => {
  newClient.emit("welcome", { message: `Hello ${newClient.id}` });

  newClient.on("setUsername", (payload) => {
    console.log(payload);

    onlineUsers.push({ username: payload.username, socketId: newClient.id });

    newClient.emit("loggedIn", onlineUsers);

    newClient.broadcast.emit("updateOnlineUsersList", onlineUsers);
  });
};
