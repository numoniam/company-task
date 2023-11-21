module.exports = function makeGetAllUserAction({ getAllUser }) {
  return async function getAllUserAction(req, res) {
    try {
      const data = await getAllUser();
      res.status(200).json({
        status: "success",
        data: {
          data,
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
