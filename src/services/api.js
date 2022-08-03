import axios from "axios";

const URI = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(data) {
  return axios.post(`${URI}/auth/login`, data);
}

function postSignUp(data) {
  return axios.post(`${URI}/auth/sign-up`, data);
}

function postHabit(data, auth) {
  return axios.post(`${URI}/habits`, data, {header: auth});
}

function getHabits(auth) {
  return axios.get(`${URI}/habits`, {header: auth});
}

function deleteHabits(id, auth) {
  return axios.delete(`${URI}/habits/${id}`, {header: auth});
}

function postCheckHabit(id, auth) {
  return axios.post(`${URI}/habits/${id}/check`, {header: auth});
}

function postUncheckHabit(id, auth) {
  return axios.post(`${URI}/habits/${id}/uncheck`, {header: auth});
}

function getHistory(auth) {
  return axios.get(`${URI}/habits/history/daily`, {header: auth});
}

export {
  postLogin,
  postSignUp,
  postHabit,
  getHabits,
  deleteHabits,
  postCheckHabit,
  postUncheckHabit,
  getHistory,
};
