module.exports = function makeCreateUserAction({ user }) {
  return async function createUserAction({newUserData}) {
    const userData = await user({newUserData});
    return userData;
  };
};
