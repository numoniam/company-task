module.exports = function makeGetUserAction({ user }) {
  return async function getUserAction(id) {
    const userData = await user(id);
    return userData;
  };
};
