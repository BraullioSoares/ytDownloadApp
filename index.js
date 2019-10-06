const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const serverPort = process.env.PORT || 1337;

app.use(cors());
app.use('/static', express.static(__dirname + '/public'));
app.listen(serverPort, function () {
    console.log("Express is running on port " + serverPort);
});

app.get('/download', (req, res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

