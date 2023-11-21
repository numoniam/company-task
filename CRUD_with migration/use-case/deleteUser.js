module.exports = function makeDeleteUserAction({ user, Joi }) {
  return async function deleteUserAction(id) {

    const validatedId = validateMyInputData({id,Joi});
    
    await user(validatedId);
  };
};

//function for userid validation
function validateMyInputData({id,Joi}) {
  const validateUserId = Joi.number().integer().positive().required();
  const { error, value } = validateUserId.validate(id);
  if (error) {
    throw error;
  }
  return value
}
