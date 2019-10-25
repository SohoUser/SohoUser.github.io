import React from 'react';
import { Spinner } from 'react-bootstrap';
import style from './preloader.module.css';

export default function () {
  return (
    <div className={style.preloader}>
      <Spinner animation="border" variant="primary" />
      <p className={style.preloader__text}>Load application</p>
    </div>
  );
}