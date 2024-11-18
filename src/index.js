const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const {PORT} = require('./config/serverConfig')

const cron = require('node-cron')

// const {sendBasicEmail} = require('./services/email-service')

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
     console.log(`Server started on ${PORT}`);

    //  sendBasicEmail(
    //    "support@admin.com",
    //    "newmail7744@gmail.com",
    //    "This is a test email",
    //    "Hey , how are you , I hope you are enjoying our service"
    //  )
    // cron.schedule('*/2 * * * *', () => {
    //   console.log('running a task every two minutes');
    // });

  });
};


setupAndStartServer();
