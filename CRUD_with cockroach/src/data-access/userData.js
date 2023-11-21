function makeGetAllUser({ getDbConnection }) {
  return async function getAllUser() {
  
    const db = await getDbConnection.connect();

    const users = await db.query("SELECT * FROM myinfos");

    const result = users.rows;

    return result;
  };
}

function makeCreateUser({ getDbConnection }) {
  return async function createUser({ userName, userEmail }) {
    // const values = [userName, userEmail];

    const db = await getDbConnection.connect();

    const outPutArray = await db.query(
      "INSERT INTO myinfos (name,email) values($1,$2)",
      [userName, userEmail]
    );

    return outPutArray;
  };
}

function makeGetUser({ getDbConnection }) {
  return async function getUser(validatedId) {
    const db = await getDbConnection.connect();

    const apiUUID = validatedId;

    const users = await db.query("SELECT * FROM myinfos WHERE usrid=$1", [
      apiUUID,
    ]);

    const result = users;

    return result;
  };
}

function makeUpdateUser({ getDbConnection }) {
  return async function updateUser({ newValidatedId, newUpdateUserData }) {
    //update user data according user provided data
    const { name, email } = newUpdateUserData;

    let updateUserField = "";
    const values = [];

    if (name) {
      updateUserField += "name=$1, ";
      values.push(name);
    }

    if (email) {
      updateUserField += "email=$2, ";
      values.push(email);
    }

    // Remove the trailing comma and space from updateFields
    updateUserField = updateUserField.slice(0, -2);

    values.push(newValidatedId);

    const db = await getDbConnection.connect();

    const outPutArray = await db.query(
      `UPDATE myinfos SET ${updateUserField} WHERE usrid=$3`,
      values
    );

    return outPutArray;
  };
}

function makeDeleteUser({ getDbConnection }) {
  return async function deleteUser(validatedId) {
    const db = await getDbConnection.connect();

    const apiUUID = validatedId;
    const outPutArray = await db.query("DELETE FROM myinfos WHERE usrid=$1", [
      apiUUID,
    ]);

    return outPutArray;
  };
}

module.exports = {
  makeGetAllUser,
  makeCreateUser,
  makeGetUser,
  makeUpdateUser,
  makeDeleteUser,
};
