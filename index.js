import express from "express";
import bodyparser from"body-parser";

const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({extended : true}))
app.use(express.static("public"));
const posts = []; // Array to store posts
app.get('/', (req, res) => {
  res.render('body.ejs', { posts: posts });
});
app.post('/submit-post', (req, res) => {
  const postContent = req.body.postContent;
  posts.push({ content: postContent });
  res.redirect('/'); // Redirect to the home page after submitting the post
});
app.post('/submit', (req, res) => {
  const postno = req.body.postnoo -1;
  const postContent = req.body.postContent;
  posts.splice( postno , 1 , { content: postContent });
  res.redirect('/'); // Redirect to the home page after submitting the post
});
app.post('/sub', (req, res) => {
  const postno = req.body.postnoo -1;
  posts.splice( postno , 1 );
  res.redirect('/'); // Redirect to the home page after submitting the post
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
