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
  return async function createUser({ newUserData }) {
    try {
      const name = newUserData.name;

      const email = newUserData.email;

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
  return async function getUser(id) {
    try {
      const db = await getDbConnection();

      const users = await db.query(`SELECT * FROM myinfo WHERE usrid=${id}`);

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
  return async function updateUser({ id, updateUserData }) {
    try {
      const name = updateUserData.name;
      const email = updateUserData.email;

      const value = [name, email];

      const db = await getDbConnection();

      await db.query(
        `UPDATE myinfo SET name=?,email=? WHERE usrid=${id}`,
        value
      );

      await db.end();
    } catch (err) {
      console.log("we cant able to update data", err.message);
      throw err;
    }
  };
}

function makeDeleteUser({ getDbConnection }) {
  return async function deleteUser(id) {
    try {
      const db = await getDbConnection();

      await db.query(`DELETE FROM myinfo WHERE usrid=${id}`);

      await db.end();
    } catch (err) {
      console.log("we cant able to delete data", err.message);
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
