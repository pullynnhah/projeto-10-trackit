import axios from "axios";

const URI = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(data) {
  return axios.post(`${URI}/auth/login`, data);
}

function postSignUp(data) {
  return axios.post(`${URI}/auth/sign-up`, data);
}

function postHabit(data, auth) {
  return axios.post(`${URI}/habits`, data, {headers: auth});
}

function getHabits(auth) {
  return axios.get(`${URI}/habits`, {headers: auth});
}

function deleteHabits(id, auth) {
  return axios.delete(`${URI}/habits/${id}`, {headers: auth});
}

function postCheckHabit(id, auth) {
  return axios.post(`${URI}/habits/${id}/check`, {headers: auth});
}

function postUncheckHabit(id, auth) {
  return axios.post(`${URI}/habits/${id}/uncheck`, {headers: auth});
}

function getHistory(auth) {
  return axios.get(`${URI}/habits/history/daily`, {headers: auth});
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
