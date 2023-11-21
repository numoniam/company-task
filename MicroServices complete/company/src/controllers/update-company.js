module.exports = function makeUpdateCompanyAction({ updateCompany }) {
  return async function updateCompanyAction(req, res) {
    try {
      const id = req.params.id;
      const receivedData = req.body;
      await updateCompany({ receivedData, id });
      res.status(200).json({
        status: "success",
        data: {
          message: "company data updated successfully",
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
