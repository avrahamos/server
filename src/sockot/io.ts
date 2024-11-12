import { Socket } from "socket.io";

export const connectSocket = (socket: Socket) => {
  console.log(`new connection ${socket.id}`,
    socket.on("disconnect",()=>console.log("bay")),
    socket.on("newVote", ()=>console.log("new vote"))
  );
};
