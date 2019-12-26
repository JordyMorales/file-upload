const express = require('express');
const fileUpload = require('express-fileupload');
const port = 3000;

const app = express();

app.use(fileUpload());

app.use(express.static('public'));

app.post('/upload', (req, res) => {
  let file = req.files.file;
  file.mv(`./files/${file.name}`, err => {
    if (err) return res.status(500).send({ message: err });

    return res.status(200).send({ message: 'File upload' });
  });
});

app.listen(port, () => console.log(`Server ready at http://localhost:${port}`));
