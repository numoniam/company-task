module.exports = function makeGetCompany({ getCompanyDb,getEmployeeDetail, Joi }) {
  return async function getCompany({ id }) {
    try {
      validateInput({ id });
      const companyDetail = await getCompanyDb({ id });
      //internal service call for employee details
      const companyAllEmployee=await getEmployeeDetail({id:companyDetail[0].id})
      //add employee into company detail object 
      companyDetail[0].employee=companyAllEmployee

      const finalObj={
        companyDetail:companyDetail,
      }
      return finalObj;
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
