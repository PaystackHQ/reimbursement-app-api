const paystack = require('paystack')(sails.config.custom.paystack.private_key);

module.exports = {
  /**
     * @name verifycustomer
     * @description :: charges returning customers
     * @param ref_id :: this is the refrence id got
     * @param auth_code:: this customer authentification code that can be used to
     *                    charge the returning customer without his or her card being checked again
     * @returns {status of payment | error}
     */
  verifyTransaction: async (ref_id) => {
    try {
      const verificationResponse = await paystack.transaction.verify(ref_id);
      if (verificationResponse.code === 'ENOTFOUND' || verificationResponse.status === false) {
        throw new Error(verificationResponse.message);
      }
      const paystackAuthObj = verificationResponse.data.authorization;
      const {last4, brand, authorization_code} = paystackAuthObj;

      return {last4_digit: last4, card_type:brand, authcode: authorization_code};
    } catch (err) {
      sails.log.debug(`PayStackService :: verifyTransaction Error -> ${err}`);
      throw err;
    }
  },

  /**
     * @name chargeCustomer
     * @description :: charges returning customers
     * @param refrence_id :: this is the refrence id gotten afrom the ramdaommize function
     * @param auth_code:: this returning customer authentification code that can be used to
     *                    charge the returning customer without his or her card being checked again
     * @param amt :: this is the amount to be charged
     * @param email :: this is the customer email
     * @param ref_id_from_transaction  ::this is the refrence id from the current transaction.this will be tested in the verify function
     * @returns {status of payment | error}
     */
  chargeCustomer: async (auth_code, amt, email) => {

    try {
      var refrence_id=''+Math.floor((Math.random() * 1000000000) + 1);
      paystack.transaction.initialize({
        ref_id:refrence_id,
        authorization_code: auth_code,
        email: email,
        amount: amt
      }).then(async (data) => {
        if (data.code === 'ENOTFOUND' || data.status === false) {
          throw CustomError.requestConnectionError('Paystack');
        }
        else {
          ref_id_from_transaction = data.data.reference;
          verify( ref_id_from_transaction)
            .then((data) => {
              console.log(data);
              status = data.data.status;
            });
          return data;
        }
      })
      .catch(error => {
        throw error;
      });

    } catch (error) {
      sails.log.debug(`PayStack :: Charge Customer Error -> ${error}`);
      throw error;
    }
  },

  /**
     * @name createSubAccount
     * @description :: create subaccount for a merchant
     * @param storeId :: this is the id of merchant whose subaccount we want to add
     * @param merchantBankDetails::the details of merchant bank details; bank name and account number
     * @returns {status of payment | error}
     */
  createSubAccount: async (storeId, merchantBankDetails) => {

    try {
      const store = await Store.findOne({id: storeId});
      paystack.subaccount.create(
          {
            business_name:store.name,
            settlement_bank: merchantBankDetails.bank_name,
            account_number: merchantBankDetails.account_number,
            percentage_charge: 1
          }
      ).then(async (data) => {
        if (data.code === 'ENOTFOUND' || data.status === false) {
          throw CustomError.requestConnectionError('Paystack');
        }
        return await StorePaystackService.create({
          store_id: storeId,
          subaccount_code: data.subaccount_code,
          subaccount_id: data.id
        });
      })
        .catch(error => {
          throw error;
        });

    } catch (error) {
      sails.log.debug(`PayStack :: Create SubAccount Error -> ${error}`);
      throw error;
    }
  },

  /**
     * @name getAllPaystackSubAccounts
     * @description :: get all subaccounts associated with cerve
     * @returns {allsubaccounts | error}
     */
  getAllPaystackSubAccounts: async () => {

    try {
      paystack.subaccount.list().then(async (data) => {
        if (data.code === 'ENOTFOUND' || data.status === false) {
          throw CustomError.requestConnectionError('Paystack');
        }
        return data;
      })
        .catch(error => {
          throw error;
        });

    } catch (error) {
      sails.log.debug(`PayStack :: Get All SubAccount Error -> ${error}`);
      throw error;
    }
  },


};
