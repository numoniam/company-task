module.exports = function makeCreateUserAction({ user, Joi }) {
  return async function createUserAction({ newUserData }) {

    const newCreateUserData = validateMyInputData({ newUserData, Joi });

    const userData = await user({ newCreateUserData });

    return userData;
  };
};

//user data validation 
function validateMyInputData({ newUserData, Joi }) {
  const userCreateDataValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });
  const { error, value } = userCreateDataValidation.validate(newUserData, {
    abortEarly: false,
  });
  if (error) {
    throw error;
  }
  return value;
}
