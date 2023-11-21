module.exports = function makeGetUserAction({ user, Joi }) {
  return async function getUserAction(id) {
    try {
      
      const validatedId = validateMyInputData({ id, Joi });

      const userData = await user(validatedId);

      //validation on not available UserID
      if (userData.rowCount === 0) {
        throw new Error("User Data Not Found");
      }
      else{
        return userData.rows;
      }
      
    } catch (err) {
      throw err;
    }
  };
};

//function for userId validation

function validateMyInputData({ id, Joi }) {
  const validateUserId = Joi.string().required();
  const { error, value } = validateUserId.validate(id);
  if (error) {
    throw error;
  }
  return value;
}
