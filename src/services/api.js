import axios from "axios";

const URI = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(data) {
  return axios.post(`${URI}/auth/login`, data);
}

function postSignUp(data) {
  return axios.post(`${URI}/auth/sign-up`, data);
}

function postHabit(data, token) {
  return axios.post(`${URI}/habits`, data, {headers: {Authorization: `Bearer ${token}`}});
}

function getHabits(token) {
  return axios.get(`${URI}/habits`, {headers: {Authorization: `Bearer ${token}`}});
}

function deleteHabits(id, token) {
  return axios.delete(`${URI}/habits/${id}`, {headers: {Authorization: `Bearer ${token}`}});
}

function postCheckHabit(id, token) {
  return axios.post(`${URI}/habits/${id}/check`, {headers: {Authorization: `Bearer ${token}`}});
}

function postUncheckHabit(id, token) {
  return axios.post(`${URI}/habits/${id}/uncheck`, {headers: {Authorization: `Bearer ${token}`}});
}

function getHistory(token) {
  return axios.get(`${URI}/habits/history/daily`, {headers: {Authorization: `Bearer ${token}`}});
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
