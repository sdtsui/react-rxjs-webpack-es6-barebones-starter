let Rx = require('rx');
let React = require('react');
let ReactDOM = require('react-dom');

let Model = {
  subject : new Rx.ReplaySubject(1);
};

let Observable = Model.subject.map((appState) => {return appState;});

