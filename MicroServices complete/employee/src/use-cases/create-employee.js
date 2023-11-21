module.exports = function makeCreateEmployee({
  createEmployeeDb,
  getCompanyId,
  Joi
}) {
  return async function createEmployee({
    companyName,
    name,
    email,
    salary,
    role,
  }) {
    try {
      validateInput({ companyName, name, email, salary, role });
      //internal service call
      const company_id = await getCompanyId({ companyName });
      await createEmployeeDb({ company_id, name, email, salary, role });
    } catch (err) {
      throw err;
    }
  };

  function validateInput({ companyName, name, email, salary, role }) {
    const schema = Joi.object({
      companyName: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      salary: Joi.number().integer().positive().required(),
      role: Joi.string().required(),
    });

    const { error } = schema.validate({
      companyName,
      name,
      email,
      salary,
      role,
    });

    if (error) {
      throw error.details[0];
    }
  }
};
