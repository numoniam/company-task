module.exports = function makeGetAllEmployee({ getAllEmployeeDb }) {
    return async function getAllEmployee() {
      try {
        const employeeData = await getAllEmployeeDb();
        return employeeData;
      } catch (err) {
        throw err;
      }
    };
  };
  