module.exports = function makeCreateUserAction({ user }) {
  return async function createUserAction({ name, email, password }) {
    const userData = await user({ name, email, password });
    return userData;
  };
};
