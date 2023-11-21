module.exports = function makeCreateUserAction({ user, Joi }) {
  return async function createUserAction({ newUserData }) {
    const userCreateDataValidation = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    });
    const { error, value } = userCreateDataValidation.validate(newUserData,{abortEarly:false});
    if (error) {
      throw error;
    }
    const newCreateUserData = value;

    const userData = await user({ newCreateUserData });

    return userData;
  };
};
