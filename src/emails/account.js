const sgMail = require('@sendgrid/mail');

// const sendGridAPIKey =
//   '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'matiurrahman5559@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'matiurrahman5559@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
