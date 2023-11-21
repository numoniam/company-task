module.exports = function makeDeleteUserAction({ user }) {
  return async function deleteUserAction(id) {
    await user(id);
  };
};
