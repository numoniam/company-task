
module.exports = function makeUpdateUserAction({ user ,Joi}) {
  return async function updateUserAction({ id, updateUserData }) {
    const userDataValidation = Joi.object({
      name: Joi.string().required().optional(),
      email: Joi.string().email().required().optional(),
    });
    const { error, value } = userDataValidation.validate(updateUserData,{abortEarly:false});
    if (error) {
      throw error;
    }
    const newUpdateUserData = value;
    await user({ id,newUpdateUserData });
  };
};
