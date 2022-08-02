function getUserData() {
  return JSON.parse(localStorage.getItem("user-data"));
}

function setUserData(data) {
  return localStorage.getItem(JSON.stringify("user-data"));
}

export {getUserData, setUserData};
