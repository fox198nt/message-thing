//credits: https://replit.com/@saousername/IdealisticCruelAutotote
const WebSocket = require('ws');

CLIENTS = [];
const wss = new WebSocket.Server({ port: 1981 });

// waits for connection to be established from the client
// the callback argument ws is a unique for each client
wss.on('connection', (ws) => {
  CLIENTS.push(ws);
  console.log(CLIENTS);
  // runs a callback on message event
  ws.on('message', (data) => {

    // sends the data to all connected clients
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
    });
  });
});
