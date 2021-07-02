import React from 'react';
import Card from './Card.jsx';
import styles from './Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if(cities) {
    return (
      <div className={styles.container}>
        {cities.map(ciudad => <Card  //o en lugar del if,aca se puede utilizar "el encadenamiento opcional": cities?.map(ciudad => (...
          key={ciudad.id}
          max={ciudad.max}
          min={ciudad.min}
          name={ciudad.name}
          img={ciudad.img}
          onClose={() => onClose(ciudad.id)}
          id={ciudad.id}
        /> )}
      </div>
    );
  }else {
    return(
      <div >No hay Registro</div>
    )
  }  
}

//export default function Cards(props) {
  //   
  //   if(!props.cities) {
  //     return <h1>No hay ciudades</h1>;
  //   }
  //   return (
  //     <div>
  //       {
  //         props.cities && props.cities.map(city => (...
  
