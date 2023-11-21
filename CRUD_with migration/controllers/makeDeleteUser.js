module.exports = function makeDeleteUserAction({ deleteUser }) {
  return async function deleteUserAction(req, res) {
    try {
      const id = +req.params.id;
      await deleteUser(id);
      res.status(200).json({
        status: "success",
        data: {
          message: `Data deleted on id ${id}....`,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "fail",
        data: {
          message:"we can't able to delete data....",
          error: err.message,
        },
      });
    }
  };
};
