module.exports = function makeDeleteUserAction({ deleteUser }) {
  return async function deleteUserAction(req, res) {
    try {
      const id = +req.params.id;
      const data = await deleteUser(id);
      res.status(200).json({
        status: "success",
        data: {
          message: "User deleted",
        },
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message,
      });
    }
  };
};
