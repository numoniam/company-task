module.exports = function makeDeleteCompany({ deleteCompanyDb, Joi }) {
  return async function deleteCompany({ id }) {
    try {
      validateInput({ id });
      await deleteCompanyDb({ id });
    } catch (err) {
      throw err;
    }
  };

  function validateInput({ id }) {
    const schema = Joi.string().guid().required();
    const { error } = schema.validate(id);
    if (error) {
      throw error.details[0];
    }
  }
};
