module.exports = function makeGetAllUserAction({ user }) {
  return async function getAllUserAction() {
    const userData = await user();
    return userData;
  };
};
