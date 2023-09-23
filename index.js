
const express=require('express')
const bodyParser = require('body-parser');
const app=express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const tasks = [];

app.get('/', (req, res) => {
  res.render('index.ejs', { tasks });
 
});

app.post('/submit', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
  }
  
  
  res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
