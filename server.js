import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Set Content Security Policy
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; img-src 'self' http://localhost:3000;");
  next();
});

// Serve your static files from the 'dist' directory
app.use(express.static(path.join(path.resolve(), 'dist')));

// Have all routes point to your index.html file
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

// Your socket.io configuration and event handling here

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
