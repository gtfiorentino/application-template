import request from 'superagent';
const noCache = require('superagent-no-cache');

/* eslint-disable no-undef */
const server = (__DEV__) ? 'http://localhost:4000' : '';

/* eslint-enable no-undef */
export default {
  getSession() {
    return new Promise((resolve, reject) => {
      request
        .get(server + '/api/optymyze/handshake')
        .use(noCache)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + window.localStorage.getItem('__token'))
        .end((err, res) => {
          if (res.ok) {
            resolve(JSON.parse(res.text));
          } else {
            reject(res);
          }
        });
    });
  },

  getTables() {
    return new Promise((resolve, reject) => {
      request
        .get(server + '/api/describe/')
        .use(noCache)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + window.localStorage.getItem('__token'))
        .end((err, res) => {
          if (res.ok) {
            resolve(JSON.parse(res.text));
          } else {
            reject(res);
          }
        });
    });
  },

  getParameters() {
    return new Promise((resolve) => {
      request
        .get(server + '/api/parameters/')
        .use(noCache)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + window.localStorage.getItem('__token'))
        .end((err, res) => {
          resolve(JSON.parse(res.text));
        });
    });
  },

  getAccounts(page, size) {
    return new Promise((resolve) => {
      request
        .get(server + '/api/accounts?page=' + page + '&size=' + size)
        .use(noCache)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + window.localStorage.getItem('__token'))
        .end((err, res) => {
          resolve(JSON.parse(res.text));
        });
    });
  },

  getAccountsCount() {
    return new Promise((resolve, reject) => {
      request
        .get(server + '/api/accounts/count')
        .use(noCache)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + window.localStorage.getItem('__token'))
        .end((err, res) => {
          if (err) {
            reject(JSON.parse(res.text));
          } else {
            resolve(JSON.parse(res.text));
          }
        });
    });
  }
};