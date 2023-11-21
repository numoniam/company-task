function makeGetAllUser({ cons }) {
  return async function getAllUser() {
    cons.query("select * from customers", (err, data) => {
      if (err) {
        console.error("Error retrieving data...");
        throw err
      }
      const result = Object.values(JSON.parse(JSON.stringify(data)));
      console.log(result);
     return result;
    });
  };
}

function makeGetUser({ cons }) {
    return async function getUser(id) {
      cons.query(`select * from customers where cid=${id}`, (err, data) => {
        if (err) {
          console.error("Error retrieving data...");
          throw err
        }
        console.log(data);
        return data;
      });
    };
  }

function makeCreateUser({cons}){
    return async function createUser({newUserData}){
       console.log(newUserData);
    }
}

module.exports = {
  makeGetAllUser,
  makeGetUser,
  makeCreateUser
};
