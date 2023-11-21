module.exports = function makeGetCompanyDetail({ getCompanyDetailDb, Joi }) {
    return async function getCompanyDetail({ name }) {
      try {
        validateInput({ name });
        const result = await getCompanyDetailDb({ name });
        return result;
      } catch (err) {
        throw err;
      }
    };
  
    function validateInput({ name }) {
      const schema = Joi.string().min(3).max(50).required();
      const { error } = schema.validate(name);
      if (error) {
        throw error.details[0];
      }
    }
  };
  