module.exports = function makeGetCompanyDetail({ axios }) {
  return async function getCompanyDetail({ id }) {
    try {
      const response = await axios.get(`http://localhost:3002/company/${id}`);
      const companyDetail = response.data;
      // console.log(companyDetail.data.item.companyDetail[0]);
      if (companyDetail.data.item.companyDetail.length === 0) {
        throw new Error("Company data not found");
      }
      return companyDetail.data.item.companyDetail[0];
    } catch (err) {
      throw err;
    }
  };
};
