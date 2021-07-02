import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({name, min, max, img, onClose,id}) {
  // acá va tu código
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.boton}>x</button>
      <Link to={`/ciudad/${id}`} >
        <h5 className="card-title">{name}</h5>
      </Link>
      {/* <h4>{name}</h4> */}
      <div>
        <div className={styles.container}>
          <div>
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div>
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='No encontrada' /> 
        </div>
      </div>
    </div>
  );
};
