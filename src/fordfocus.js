function FordFocus(props) {
  console.log(props.color);
  return (
    <>
      <h2>Ford Focus</h2>
      <p>Número de ruedas: {props.ruedas}</p>
      <p>Altura: {props.altura}</p>
      <p>Longitud: {props.longitud}</p>
      <p>Color: {props.color}</p>
      <span>...</span>
    </>
  );
}

export default FordFocus;
