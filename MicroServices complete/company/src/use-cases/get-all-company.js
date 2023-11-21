module.exports = function makeGetAllCompany({ getAllCompanyDb }) {
  return async function getAllCompany() {
    try {
      const companysData = await getAllCompanyDb();
      return companysData;
    } catch (err) {
      throw err;
    }
  };
};
