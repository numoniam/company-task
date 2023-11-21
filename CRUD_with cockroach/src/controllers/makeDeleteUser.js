module.exports = function makeDeleteUserAction({ deleteUser }) {
  return async function deleteUserAction(req, res) {
    try {
      const id = req.params.id;
      const userData=await deleteUser(id);
      res.status(200).json({
        status: "success",
        data: {
          message: userData,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        data: {
          error: err.message,
        },
      });
    }
  };
};
