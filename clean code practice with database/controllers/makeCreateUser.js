module.exports = function makeCreateUserAction({ createUser }) {
  return async function createUserAction(req, res) {
    try {
      const { name, email, password } = req.body;
      const data = await createUser({ name, email, password });
      res.status(201).json({
        status: "success",
        message: {
          data: "Data Created successfully",
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
