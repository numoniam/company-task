module.exports = function makeGetUserAction({ getUser }) {
  return async function getUserAction(req, res) {
    try {
      const id = +req.params.id;
      const data = await getUser(id);
      res.status(200).json({
        status: "success",
        data: {
          data,
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
