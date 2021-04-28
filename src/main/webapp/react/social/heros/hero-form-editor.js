import heroService from "./hero-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const HeroFormEditor = () => {
  const {id} = useParams()
  const [hero, setHero] = useState({})
  useEffect(() => {
    if (id !== "new") {
      findHeroById(id)
    }
  }, []);
  const findHeroById = (id) =>
      heroService.findHeroById(id)
      .then(hero => setHero(hero))
  const history = useHistory()
  const deleteHero = (id) =>
      heroService.deleteHero(id)
      .then(() => history.goBack())
  const createHero = (hero) =>
      heroService.createHero(hero)
      .then(() => history.goBack())
  const updateHero = (id, newHero) =>
      heroService.updateHero(id, newHero)
      .then(() => history.goBack())
  return (
      <div>
        <h2>Hero Editor</h2>
        <label>ID (auto-fill)</label>
        <input value={hero.id}/><br/>
        <label>First Name</label>
        <input
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, firstName: e.target.value}))}
            value={hero.firstName}/><br/>
        <label>Last Name</label>
        <input
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, lastName: e.target.value}))}
            value={hero.lastName}/><br/>
        <label>Username</label>
        <input
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, username: e.target.value}))}
            value={hero.username}/><br/>
        <label>Password</label>
        <input
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, password: e.target.value}))}
            value={hero.password}/><br/>
        <label>Email</label>
        <input
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, email: e.target.value}))}
            value={hero.email}/><br/>
        <label>Date Of Birth</label>
        <input
            type="date"
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, dateOfBirth: e.target.value}))}
            value={hero.dateOfBirth}/><br/>
        <label>Blood Type</label>
        <input
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, bloodType: e.target.value}))}
            value={hero.bloodType}/><br/>
        <label>Affiliation</label>
        <input
            onChange={(e) =>
                setHero(hero =>
                    ({...hero, affiliation: e.target.value}))}
            value={hero.affiliation}/><br/>
        <br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.goBack()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteHero(hero.id)}>
          Delete
        </button>
        <button className="btn btn-success"
                onClick={() => createHero(hero)}>
          Create
        </button>
        <button className="btn btn-primary"
                onClick={() => updateHero(hero.id, hero)}>
          Update
        </button>
      </div>
  )
}

export default HeroFormEditor