module.exports = function makeCreateCompany({ createCompanyDb }) {
  return async function createCompany({ name, contact, city, address }) {
    try {
      const userData = await createCompanyDb({ name, contact, city, address });

      if (userData.rowCount === 1) {
        return "user data created successfully";
      } else {
        throw new Error("user data not created");
      }
    } catch (err) {
      throw err;
    }
  };
};
