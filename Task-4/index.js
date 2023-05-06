const parseUser = (str) => {
  try {
    let user = JSON.parse(str);
    return user;
  } catch (e) {
    return null;
  }
};

const userData = '{ "age": 30 }';
