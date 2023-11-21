module.exports = function makeDeleteEmployee({ deleteEmployeeDb, Joi }) {
    return async function deleteEmployee({ id }) {
      try {
        validateInput({ id });
        await deleteEmployeeDb({ id });
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
  