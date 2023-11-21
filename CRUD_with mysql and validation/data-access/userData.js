function makeGetAllUser({ getDbConnection }) {
  return async function getAllUser() {
    try {
      const db = await getDbConnection();

      const users = await db.query("SELECT * FROM myinfo");

      await db.end();

      const result = Object.values(JSON.parse(JSON.stringify(users)));

      return result;
    } catch (err) {
      console.log("we cant able to read data", err.message);
      throw err;
    }
  };
}

function makeCreateUser({ getDbConnection }) {
  return async function createUser({ newCreateUserData }) {
    try {
      const name = newCreateUserData.name;

      const email = newCreateUserData.email;

      const values = [name, email];

      const db = await getDbConnection();

      const users = await db.query(
        "INSERT INTO myinfo (name,email) value(?,?)",
        values
      );

      await db.end();

      const result = Object.values(JSON.parse(JSON.stringify(users)));

      return result;
    } catch (err) {
      console.log("we cant able to create read data", err.message);
      throw err;
    }
  };
}

function makeGetUser({ getDbConnection }) {
  return async function getUser(validatedId) {
    try {
      const db = await getDbConnection();

      const users = await db.query(
        `SELECT * FROM myinfo WHERE usrid=${validatedId}`
      );

      await db.end();

      const result = Object.values(JSON.parse(JSON.stringify(users)));

      return result;
    } catch (err) {
      console.log("we cant able to read data", err.message);
      throw err;
    }
  };
}

function makeUpdateUser({ getDbConnection }) {
  return async function updateUser({ id,newUpdateUserData }) {
    try {
      //update user data according user provided data 
      const { name, email} = newUpdateUserData;

      let updateUserField = "";
      const values = [];

      if (name) {
        updateUserField += "name=?, ";
        values.push(name);
      }

      if (email) {
        updateUserField += "email=?, ";
        values.push(email);
      }

      // Remove the comma and space from updateFields
      updateUserField = updateUserField.slice(0,-2);
      
      values.push(id);

      const db = await getDbConnection();
  

      const { affectedRows } = await db.query(
        `UPDATE myinfo SET ${updateUserField} WHERE usrid=?`,
        values
      );

      await db.end();

      //validation on user data not found
      if (affectedRows === 0) {
        throw new Error("User Data Not Found");
      }
    } catch (err) {
      console.log("we can't able to update data", err.message);
      throw err;
    }
  };
}

function makeDeleteUser({ getDbConnection }) {
  return async function deleteUser(validatedId) {
    try {
      const db = await getDbConnection();

      const { affectedRows } = await db.query(
        `DELETE FROM myinfo WHERE usrid=${validatedId}`
      );

      await db.end();

      //validation on user data not found
      if (affectedRows === 0) {
        throw new Error("User Data Not Found");
      }
    } catch (err) {
      console.log("we can't able to delete data", err.message);
      throw err;
    }
  };
}

module.exports = {
  makeGetAllUser,
  makeCreateUser,
  makeGetUser,
  makeUpdateUser,
  makeDeleteUser,
};
