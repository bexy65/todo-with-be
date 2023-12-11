const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const sassMiddleware = require('node-sass-middleware');

app.use(express.static('public'));

app.use(
    sassMiddleware({
        src: path.join(__dirname, 'public', 'styles'),
        dest: path.join(__dirname, 'public', 'styles'),
        indentedSyntax: false, // false = .scss, true = .sass
        sourceMap: true,
    })
);

app.get('/api/data', (req, res) => {
    // Example data, replace with your own logic to fetch data
    const data = { message: 'Hello from the server!' };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
