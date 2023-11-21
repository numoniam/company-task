module.exports = function makeGetAllEmployeeById({ getAllEmployeeByIdDb, Joi }) {
    return async function getAllEmployeeById({ id }) {
      try {
        validateInput({ id });
        const employeeData = await getAllEmployeeByIdDb({ id });
        //remove compnay ID form Employee Details
        const result = employeeData.map(obj => {
            delete obj.company_id;
            return obj;
          });
        return result;
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
  