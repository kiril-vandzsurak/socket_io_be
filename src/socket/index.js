let onlineUsers = [];

export const newConnectionHandler = (newClient) => {
  newClient.emit("welcome", { message: `Hello ${newClient.id}` });
};
