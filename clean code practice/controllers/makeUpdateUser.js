module.exports = function makeGetAllUserAction({ updateUser }) {
  return async function getAllUserAction(req, res) {
    try {
      const id = +req.params.id;
      const newUserData = req.body;
      const data = await updateUser({ id, newUserData });
      res.status(200).json({
        status: "success",
        data: {
          message: "user data updated",
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  };
};
