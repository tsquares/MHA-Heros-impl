import Hero from "./hero";

const {useState, useEffect} = React;

const Heros = () => {
  const [heros, setHeros] = useState([])
  const [newHero, setNewHero] = useState({})
  const createHero = (hero) =>
      fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/heros`, {
        method: 'POST',
        body: JSON.stringify(hero),
        headers: {'content-type': 'application/json'}
      })
      .then(response => response.json())
      .then(hero => setHeros(heros => ([...heros, hero])))
  const updateHero = (id, newHero) =>
      fetch(`http://localhost:8080/orm/update/hero/${id}/${newHero.password}`)
      .then(response => response.json())
      .then(hero => setHeros(
          heros => (heros.map(hero => hero._id === id ? newHero : hero))))
  const findAllHeros = () =>
      fetch(`http://localhost:8080/orm/find/heros`)
      .then(response => response.json())
      .then(heros => setHeros(heros))
  const deleteHero = (id) =>
      fetch(
          `https://wbdv-generic-server.herokuapp.com/api/jannunzi/heros/${id}`,
          {
            method: "DELETE"
          })
      .then(response => response.json())
      .then(heros => setHeros(heros => heros.filter(hero => hero._id !== id)))
  useEffect(() => {
    findAllHeros()
  }, [])
  return (
      <div>
        <h2>Heros {heros.length}</h2>
        <input value={newHero.title}
               onChange={(e) => setNewHero(
                   newHero => ({...newHero, title: e.target.value}))}/>
        <input value={newHero.owner}
               onChange={(e) => setNewHero(
                   newHero => ({...newHero, owner: e.target.value}))}/>
        <button onClick={() => createHero(newHero)}>Create</button>
        {
          heros.map(hero =>
              <Hero key={hero._id}
                    updateHero={updateHero}
                    deleteHero={deleteHero}
                    hero={hero}/>)
        }
      </div>
  )
}

export default Heros;


