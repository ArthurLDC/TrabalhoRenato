import Card from './Card';

function ListaAlunos() {
  // Lista de alunos inserida manualmente
  const alunos = [
    { id: 1, nome: 'Arthur Lucas Dantas', matricula: '2025111' },
    { id: 2, nome: 'Beatriz Costa', matricula: '2025112' },
    { id: 3, nome: 'Carlos Eduardo', matricula: '2025113' },
    { id: 4, nome: 'Daniela Ferreira', matricula: '2025114' },
  ];

  return (
    <section>
      <h3>Lista de Alunos</h3>
      <div className="lista-cards">
        {/* Usamos .map() para percorrer a lista e renderizar um Card para cada aluno */}
        {alunos.map((aluno) => (
          <Card key={aluno.id} nome={aluno.nome} matricula={aluno.matricula} />
        ))}
      </div>
    </section>
  );
}

export default ListaAlunos;