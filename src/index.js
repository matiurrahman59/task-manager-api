const express = require('express');
require('./db/mongoose');

// import router
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   console.log(req.method, req.path);

//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }

//   res.status(503).send('The site is under maintenence, please try back soon!');

//   next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// start server on locally or hosted website
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
