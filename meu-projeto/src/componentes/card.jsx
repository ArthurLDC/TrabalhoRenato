function Card({ nome, matricula }) {
  return (
    <div className="card">
      <h4>{nome}</h4>
      <p>Matrícula: {matricula}</p>
    </div>
  );
}

export default Card;