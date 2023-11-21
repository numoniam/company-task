module.exports = function makeCreateCompanyAction({createCompany}) {
    return async function createCompanyAction(req, res) {
      try {
        const {name,contact,city,address} = req.body;
        await createCompany({name,contact,city,address});
        res.status(201).json({
          status: "success",
          data: {
            message: "company data created successfully",
          },
        });
      } catch (err) {
        res.status(500).json({
          status: "fail",
          data: {
            error:err.message
          },
        });
      }
    };
  };
  
  