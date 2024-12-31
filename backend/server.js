import dotenv from 'dotenv';
import express from 'express';

dotenv.config()

const app = express();
const port = process.env.PORT;

app.get("/",(req,res) => {
    res.send(`Server is ready in port ${port}`);
});

//nodemon is scripted to use "npm run dev". port is set to 5000. add port to .env file when pulled to local machine
const server = app.listen(port,() => {
    console.log(`Server started at http://localhost:${port}`)
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Choose a different port.`);
        process.exit(1);
    }
});

// Handle process termination (e.g., nodemon restart)
process.on('SIGTERM', () => {
    console.log('Process terminated. Closing server...');
    server.close(() => {
        console.log('Server closed. Port freed.');
    });
});
//
process.on('SIGINT', () => {
    console.log('Process interrupted. Closing server...');
    server.close(() => {
        console.log('Server closed. Port freed.');
    });
});
