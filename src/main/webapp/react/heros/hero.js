const {useState, useEffect} = React;

const Hero = ({hero, deleteHero, updateHero}) => {
  const [heroCopy, setHeroCopy] = useState(hero)
  const [editing, setEditing] = useState(false)
  return (
      <div>
        {
          editing &&
          <div>
            <input value={heroCopy.firstName} onChange={(e) => setHeroCopy(
                heroCopy => ({...heroCopy, firstName: e.target.value}))}/>
            <input value={heroCopy.lastName} onChange={(e) => setHeroCopy(
                heroCopy => ({...heroCopy, lastName: e.target.value}))}/>
            <button onClick={() => deleteHero(hero._id)}>Delete</button>
            <button onClick={() => {
              setEditing(false)
              updateHero(heroCopy._id, heroCopy)
            }}>Save
            </button>
          </div>
        }
        {
          !editing &&
          <div>
            {heroCopy.firstName}
            {heroCopy.lastName}
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
        }
      </div>
  )
}

export default Hero;