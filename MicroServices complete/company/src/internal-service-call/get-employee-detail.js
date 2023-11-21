module.exports = function makeGetEmployeeDetail({ axios }) {
    return async function getEmployeeDetail({ id }) {
      try {
        const response = await axios.get(
          `http://localhost:3001/employee/detail/${id}`
        );

        const employeeDetail = response.data;
  
        if (employeeDetail.data.items.length === 0) {
          throw new Error("Employee data not found");
        }
        return employeeDetail.data.items;
      } catch (err) {
        throw err;
      }
    };
  };
  