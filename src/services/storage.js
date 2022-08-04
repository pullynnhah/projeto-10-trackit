function getUserData() {
  return JSON.parse(localStorage.getItem("user-data"));
}

function setUserData(data) {
  return localStorage.setItem("user-data", JSON.stringify(data));
}

export {getUserData, setUserData};
