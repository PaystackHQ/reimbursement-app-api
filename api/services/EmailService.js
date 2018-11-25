/**
 * emailService :: it handles the sending of emails
 */

module.exports = {
  send: async (emailTemplate, subject, emailVariables, receiver) => {
    try {
      sails.hooks.email.send(
        emailTemplate,
        emailVariables, {
          to: receiver,
          subject: subject,
          replyTo: `contact@paystack.com`, //to be updated
          from: `Paystack contact@paystack.com` //to be updated
        },
        (err) => {
          sails.log.debug(err || 'Email Sent');
          if (err) {
            return err;
          }
        }
      );

      sails.log.debug(emailTemplate + ' ' + subject + ' ' + emailVariables + ' ' + receiver);
      return 'email sent';
    } catch (error) {
      sails.log.debug(error);
      return error;
    }


  }

};
