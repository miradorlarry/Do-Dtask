var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

// var signpage = {
//     'signup-page' :{
//     title: `Sign-up Page`,
//     content: `<header class="main-header">
//     <a href="/"><img src="/img/logo-black.svg" alt=""></a>
//     <h1>Sign up</h1>
//     <p><input type="text"  placeholder="Username"></p>
//     <p><input type="text"  placeholder="Email"></p>
//     <p><input type="password" placeholder="Password"></p>
//     <button >Sign up</button>
//     <p class="foot-link">Already have an account? <a href="signin-page">Sign in</a></p>
//     </header>`
//   },

//     'signin-page' :{
//       title: `Sign-in Page`,
//       content: `<header class="main-header">
//       <a href="/"><img src="/img/logo-black.svg" alt=""></a>
//       <h1>Sign in</h1>
//       <p><input type="text"  placeholder="Username"></p>
//       <p><input type="password" placeholder="Password"></p>
//       <button >Sign in</button>
//       <p class="foot-link">Don't have an account? <a href="signup-page">Sign up</a></p>
//       </header>`
//     }
// };

// function createTemplate (data){
//   var  title = data.title;
//   var content = data.content;
  
//   var htmlTemplate = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <link rel="stylesheet" href="/css/style.css">
//       <title>${title}</title>
//   </head>
//   <body>
//       ${content}
//   </body>
//   </html>`;
//   return htmlTemplate;
//   }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/html/Signin.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'html', 'Signin.html'));
});

app.get('/html/Signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'html', 'Signup.html'));
});

app.get('/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'style.css'));
});

app.get('/css/sign.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'css', 'sign.css'));
});

app.get('/img/Whit-abstract-bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'Whit-abstract-bg.jpg'));
});

app.get('/img/logo-black.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'logo-black.svg'));
});

app.get('/img/Todo-bg.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'Todo-bg.svg'));
});

app.get('/img/wave.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'wave.png'));
});

app.get('/img/Organize.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'Organize.svg'));
});

app.get('/img/Secured.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'Secured.svg'));
});

app.get('/img/Sms-icon.svg', function (req, res) {
  res.sendFile(path.join(__dirname, 'img', 'Sms-icon.svg'));
});

app.get('/js/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'js', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`Do-Dtask port is running in ${port}!`);
});
