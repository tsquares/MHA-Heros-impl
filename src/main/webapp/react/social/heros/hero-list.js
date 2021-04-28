import heroService from "./hero-service"

const {useState, useEffect} = React;

const {Link, useHistory} = window.ReactRouterDOM;

const HeroList = () => {
  const history = useHistory()
  const [heros, setHeros] = useState([])
  useEffect(() => {
    findAllHeros()
  }, [])
  const findAllHeros = () =>
      heroService.findAllHeros()
      .then(heros => setHeros(heros))
  return (
      <div>
        <h2>Hero List</h2>
        <button className="btn btn-primary"
                onClick={() => history.push("/heros/new")}>
          Add Hero
        </button>
        <ul>
          {
            heros.map(hero =>
                <li key={hero.id}>
                  <Link to={`/heros/${hero.id}`}>
                    {hero.firstName},
                    {hero.lastName},
                    {hero.username}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}

export default HeroList;