import './index.scss'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home__img">
          <img src="/assets/books.png" alt="" />
        </div>
        <div className="home__content">
          <h1>Biblioteca DNC</h1>
          <p>Um acervo de E-Books gratuitos, baixe e aproveite</p>
        </div>
      </div>
    </>
  )
}