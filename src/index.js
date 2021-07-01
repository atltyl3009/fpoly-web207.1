import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const person = {
  name: 'Lưu Tiến Anh',
  age: 19,
  status: false
}
function total(giatriA, giatriB){
  return giatriA + giatriB
}
const a = 30;
const b = 40;
const element = <h1>Tổng là :{total(a, b)}</h1>
ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
