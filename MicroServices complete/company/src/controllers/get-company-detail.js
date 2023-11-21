module.exports = function makeGetCompanyDetailAction({ getCompanyDetail }) {
  return async function getCompanyDetailAction(req, res) {
    try {
      const name = req.params.name;
      const result = await getCompanyDetail({ name });
      res.status(200).json({
        status: "success",
        data: {
          item: result,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        data: {
          error: err.message,
        },
      });
    }
  };
};
