module.exports = function makeUpdateEmployee({ updateEmployeeDb, Joi }) {
    return async function updateEmployee({ receivedData, id }) {
      try {
        const values = validateInput({ receivedData, id });
        await updateEmployeeDb({ receivedData:values.receivedData, id:values.id });
      } catch (err) {
        throw err;
      }
    };
  
    function validateInput({ receivedData, id }) {
      const schema = Joi.object({
        receivedData: Joi.object({
            name: Joi.string().optional(),
            email: Joi.string().email().optional(),
            salary: Joi.number().integer().positive().optional(),
            role: Joi.string().optional(),
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
  