module.exports = function makeGetAllUserAction({ user }) {
  return async function getAllUserAction({ id, newUserData }) {
    const userData = await user({ id, newUserData });
    return userData;
  };
};
