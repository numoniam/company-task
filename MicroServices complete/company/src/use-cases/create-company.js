module.exports = function makeCreateCompany({ createCompanyDb, Joi }) {
  return async function createCompany({ name, contact, city, address }) {
    try {
      validateInput({ name, contact, city, address });
      await createCompanyDb({ name, contact, city, address });
    } catch (err) {
      throw err;
    }
  };

  function validateInput({ name, contact, city, address }) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(50).required(),
      contact: Joi.number()
        .integer()
        .min(1000000000)
        .max(9999999999)
        .required(),
      city: Joi.string().min(2).max(50).required(),
      address: Joi.string().min(5).max(100).required(),
    });

    const { error } = schema.validate({
      name,
      contact,
      city,
      address,
    });

    if (error) {
      throw error.details[0];
    }
  }
};
