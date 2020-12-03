//import { useState } from "react";
import "./App.css";

//function App() {
// 1. Crea una aplicación en la que muestres en un componente la información del siguiente objeto:
// let evento = {
//   nombre: "Salsa dance party",
//   fecha: "24/07/2020",
//   hora: "16:00",
//   lugar: {
//     direccion: "Done Bikendi Kalea, 2",
//     ciudad: "Bilbao",
//   },
// };
// return (
//   <>
//     <h1>{evento.nombre}</h1>
//     <p>{evento.fecha}</p>
//     <p>{evento.hora}</p>
//     <p>{evento.lugar.direccion}</p>
//     <p>{evento.lugar.ciudad}</p>
//   </>
// );
//}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2. Crea una aplicación y crea un componente que tenga un array de tres elementos. Haz que el componente tenga un <ul> y que dentro del mismo haya un <li> con cada uno de los elementos del array.

// function App() {
//   const nombres = ["Manu", "Ander", "ilona"];

//   const mostrarNombres = nombres.map(function (nombre) {
//     console.log(nombre);
//     return (
//       <ul key={nombre}>
//         <li>{nombre}</li>
//       </ul>
//     );
//   });
//   return mostrarNombres;
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3. Crea una aplicación  con la que mostrar una lista de 4 coches Ford Focus. Todos tienen las siguientes características iguales: número de ruedas, altura y longitud, pero cada uno tiene un color diferente.
// Crea tantos componentes hijo como coches tengas y muestra la información de cada uno de ellos.

// import FordFocus from "./fordfocus";

// function App() {
//   const fordFocus = [
//     {
//       ruedas: 4,
//       altura: 2.3,
//       longitud: 5.2,
//       color: "Amarillo",
//     },
//     {
//       ruedas: 4,
//       altura: 2.3,
//       longitud: 5.2,
//       color: "Verde",
//     },
//     {
//       ruedas: 4,
//       altura: 2.3,
//       longitud: 5.2,
//       color: "Naranja",
//     },
//     {
//       ruedas: 4,
//       altura: 2.3,
//       longitud: 5.2,
//       color: "Rojo",
//     },
//   ];

//   const nuevoFocus = fordFocus.map(function (coche) {
//     console.log(coche);
//     return (
//       <div key={coche.color}>
//         <FordFocus
//           ruedas={coche.ruedas}
//           altura={coche.altura}
//           longitud={coche.longitud}
//           color={coche.color}
//         />
//       </div>
//     );
//   });
//   return nuevoFocus;
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//4. Crea una aplicación con un contador de clicks. Cada vez que hagas click en un botón se sumará 1.

// import React, { useState } from "react";

// function App() {
//   let [numero, setNumero] = useState(0);
//   function sumarUno() {
//     setNumero(numero + 1);
//   }
//   return (
//     <>
//       <h1>{numero}</h1>
//       <button onClick={sumarUno}>Click</button>
//     </>
//   );
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 5. Crea una aplicación en la que tienes un array de 3 nombres. Al cargar la página se muestra el primer elemento del array en un h1.
//Añade un botón, y cuando se haga click, mostraremos el segundo nombre. Con otro click mostraremos el tercero y con otro click volveremos a mostrar el primero (y así sucesivamente).

// import React, { useState } from "react";
// const nombres = ["Ilona", "Manu", "Ander"];

// function App() {

//Creo una variable de estado que será por defecto 0, para que me de el valor del índice 0 del array
// let [contador, setContador] = useState(0);

//Cuando haga click al botón quiero que el contador sume uno para que se imprima el siguiente nombre
// function Nuevo() {
//   setContador(contador + 1);
// }
//Pero me encuentro con el problema de que al llegar al final del array deja de mostrarme nombres por lo que voy a crear una condición para que vuelva al índice 0 una vez que finalice de recorrer el array.

//   function Nuevo() {
//     if (contador === nombres.length - 1) {
//       setContador(0);
//     } else {
//       setContador(contador + 1);
//     }
//   }

//   return (
//     <>
//       <h1>{nombres[contador]}</h1>
//       <button onClick={Nuevo}>Nuevo nombre</button>
//     </>
//   );
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 6. Crea una aplicación de una librería.

//  Pon los datos del objeto libreria únicamente en el componente App.

// En el componente de la cabecera, haz que se muestre el nombre del usuario y su imagen.
//En caso de que sea un cliente VIP en vez de sólo mostrar su nombre muestra un saludo. Añade un botón que haga que el usuario pase de no ser VIP a ser VIP.

// En el main de la página (en otro componente) muestra los elementos del array libros. Por cada uno de ellos, muestra el título en un h1, el autor en un h2, la descripción en un p y la imagen y otro p para el stock. Utiliza un componente Libro para mostrarlos. Dentro del componente libro añade un botón que cuando se pulse quite uno del stock del libro. Cuando llegue a cero, en vez de mostrar el mensaje “Stock: 0” muestra el mensaje “No quedan copias”

// Finalmente en el footer muestra un componente Libro como "el libro de oferta" que recibirá uno de los libros del array libros de manera aleatoria (cada vez que recarguemos la página debería mostrar uno)
import { useState } from "react";
import libreria from "./libreria";

function App() {
  return (
    <Cabecera
      nombre={libreria.usuario.nombre}
      imagen={libreria.usuario.imagen}
      vip={libreria.usuario.vip}
    />
  );
}

function Cabecera(props) {
  const [vip, setVip] = useState(props.vip);

  function SoyVip() {
    if (vip === true) {
      setVip(false);
    } else {
      setVip(true);
    }
  }

  if (vip === true) {
    return (
      <>
        <h1>Hellou Mister {props.nombre}</h1>
        <img src={props.imagen} alt="Usuario" height="200px" />
        <br></br>
        <button onClick={SoyVip}>No soy VIP</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Hola petardo</h1>
        <img src={props.imagen} alt="Usuario" height="200px" />
        <br></br>
        <button onClick={SoyVip}>Soy VIP</button>
      </>
    );
  }
}

export default App;
