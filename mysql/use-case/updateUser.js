module.exports = function makeUpdateUserAction({ user }) {
  return async function updateUserAction({ id, updateUserData }) {
    await user({ id, updateUserData });
  };
};
