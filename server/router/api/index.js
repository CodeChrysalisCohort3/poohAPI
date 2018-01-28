'use strict';

const router = require('express').Router();
const OK = 200;

const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};

module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('this is db', db);
    return db.list()
      .then(list => {
        send(res, OK, list, false);
      });
  });
  router.post('/', (req, res) => {
    return db.create(req.body)
      .then(store => {
        send(res, OK, store, false);
      });
  });
  router.delete('/', (req, res) => {
    return db.remove(req.body)
      .then(store => {
        store = String(store);
        send(res, OK, store, false);
      });
  });
  router.put('/', (req, res) => {
    return db.update(req.body)
      .then(store => {
        store = String(store);        
        send(res, OK, store, false);
      });
  });
  return router;
};