module.exports = function makeCreateUserAction({ createUser}) {
  return async function createUserAction(req, res) {
    try {
      console.log(req.body);
      const {name,email,access_token} = req.body;
      const result=await createUser({name,email,access_token});
      res.status(201).json({
        status: "success",
        data: {
          message: result,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        data: {
          error:err
        },
      });
    }
  };
};

