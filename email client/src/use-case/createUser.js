module.exports = function makeCreateUserAction({ user, Joi }) {
  return async function createUserAction({ name, email,access_token }) {
    try {
      const { name: userName, email: userEmail,access_token:token } = validateMyInputData({
        name,
        email,
        access_token,
        Joi,
      });
    
      const userData = await user({ userName, userEmail ,token});
      
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

//user data validation
function validateMyInputData({ name, email,access_token, Joi }) {
  const userCreateDataValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    access_token:Joi.string().required()
  });
  const { error, value } = userCreateDataValidation.validate({ name, email,access_token });

  if (error) {
    throw error.details[0].message;
  }
  return value;
}
