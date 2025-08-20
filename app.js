const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve styled registration form on root route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Registration Form</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f4f7f8;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .container {
          background: #fff;
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          max-width: 400px;
          width: 100%;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 5px;
          color: #555;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"] {
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
        }

        input[type="submit"] {
          background: #4CAF50;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        input[type="submit"]:hover {
          background: #45a049;
        }

        .note {
          text-align: center;
          margin-top: 10px;
          color: #888;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Register Here</h2>
        <form action="/register" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required>

          <label for="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>

          <input type="submit" value="Register">
        </form>
        <p class="note">All fields are required</p>
      </div>
    </body>
    </html>
  `);
});

// Handle registration form
app.post('/register', (req, res) => {
  const { name, email, phone } = req.body;
  res.send(`
    <html>
      <head>
        <title>Registration Successful</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f7f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            background: #fff;
            padding: 30px 40px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            max-width: 400px;
            width: 100%;
            text-align: center;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background: #4CAF50;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
          }
          a:hover {
            background: #45a049;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Registration Successful 🎉</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <a href="/">Go back</a>
        </div>
      </body>
    </html>
  `);
});

// ✅ Bind to 0.0.0.0, not localhost
app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on http://0.0.0.0:${PORT}`);
});
