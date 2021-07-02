import React, {useState} from 'react';
import styles from './Nav.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código. //Como esta funcion no tiene parametro no se debe colocar la funcion con()-->{props.onSearch()} porque eso hace que se ejecute apenas refresque la pag y deshabilita el boton, en cambio se puede pasar una funcion que luego ejecute la que queremos
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      {/* <div className={styles.container}> */}
      <input
        type="text" 
        placeholder="Ciudad..." 
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      {/* <button className={styles.boton} onClick={() => onSearch("Buscando...")}>Agregar</button> */}
      <input className={styles.boton} type="submit" value="Agregar" />
      {/* </div> */}
    </form>
  );
}
