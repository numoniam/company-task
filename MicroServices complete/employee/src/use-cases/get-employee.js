module.exports = function makeGetEmployee({
  getEmployeeDb,
  getCompanyDetail,
  Joi,
}) {
  return async function getEmployee({ id }) {
    try {
      validateInput({ id });
      const employeeDetail = await getEmployeeDb({ id });
      // const cmpId = employeeDetail[0].company_id;
      
      //internal service call for getting company information
      const companyDetail = await getCompanyDetail({ id:employeeDetail[0].company_id });

      //remove company id from company Detail
      delete companyDetail.id;

      //remove company id from employee Detail
      delete employeeDetail[0].company_id;

      employeeDetail[0].companyDetail = companyDetail;
      return employeeDetail;
    } catch (err) {
      throw err;
    }
  };

  function validateInput({ id }) {
    const schema = Joi.string().guid().trim().required();
    const { error, value } = schema.validate(id);
    if (error) {
      throw error.details[0];
    }
    return value;
  }
};
