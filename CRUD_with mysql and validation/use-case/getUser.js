module.exports = function makeGetUserAction({ user, Joi }) {
  return async function getUserAction(id) {

    const validateUserId = Joi.number().integer().positive().required();
    const { error, value } = validateUserId.validate(id);
    if (error) {
      throw error;
    }
    validatedId = value;
    const userData = await user(validatedId);
    
    //validation on big UserID
    if(userData.length === 0)
    {
      throw new Error("User Data Not Found")
    }
    return userData;
  };
};
