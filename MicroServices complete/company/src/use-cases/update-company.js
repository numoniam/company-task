module.exports = function makeUpdateCompany({ updateCompanyDb, Joi }) {
  return async function updateCompany({ receivedData, id }) {
    try {
      const values = validateInput({ receivedData, id });

      await updateCompanyDb({ receivedData:values.receivedData, id:values.id });
    } catch (err) {
      throw err;
    }
  };

  function validateInput({ receivedData, id }) {
    const schema = Joi.object({
      receivedData: Joi.object({
        name: Joi.string().min(3).max(50).optional(),
        contact: Joi.number()
          .integer()
          .min(1000000000)
          .max(9999999999)
          .optional(),
        city: Joi.string().min(2).max(50).optional(),
        address: Joi.string().min(5).max(100).optional(),
      }).required(),
      id: Joi.string().guid().required(),
    });

    const { error, value } = schema.validate({
      receivedData,
      id,
    });

    if (error) {
      throw error.details[0];
    }
    return value;
  }
};
