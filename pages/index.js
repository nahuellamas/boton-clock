import SimpleCounter from '../components/SimpleCounter';

export default function Home() {
  return (
    <>
      <div className="App">
        <div className="container-titulo">
          <h1 className="titulo">¡Jugá y ganá!</h1>
          <span>Premios en Cripto</span>
        </div>
        <SimpleCounter/>
      </div>
    </>
  )
}
