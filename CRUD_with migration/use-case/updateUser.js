module.exports = function makeUpdateUserAction({ user, Joi }) {
  return async function updateUserAction({ id, updateUserData }) {

    const newUpdateUserData = validateMyInputData({updateUserData,Joi});

    const newValidatedId=validateMyId({id,Joi})
    
    await user({ newValidatedId, newUpdateUserData });
  };
};

//function for user data validation
function validateMyInputData({updateUserData,Joi}) {
  const userDataValidation = Joi.object({
    name: Joi.string().required().optional(),
    email: Joi.string().email().required().optional(),
  });
  const { error, value } = userDataValidation.validate(updateUserData, {
    abortEarly: false,
  });
  if (error) {
    throw error;
  }

  return value
}

//user Id Validation
function validateMyId({id,Joi}){
  const validateUserId = Joi.number().integer().positive().required();
  const { error, value } = validateUserId.validate(id);
  if (error) {
    throw error;
  }
  return value
}
