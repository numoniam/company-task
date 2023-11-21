module.exports = function makeDeleteUserAction({ user ,Joi}) {
  return async function deleteUserAction(id) {
    const validateUserId = Joi.number().integer().positive().required();
    const { error, value } = validateUserId.validate(id);
    if (error) {
      throw error;
    }
    const validatedId=value
    await user(validatedId);
  };
};
