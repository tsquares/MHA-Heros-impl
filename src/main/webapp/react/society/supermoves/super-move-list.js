import superMoveService from "./super-move-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

const SuperMoveList = () => {
  const history = useHistory()
  const [superMoves, setSuperMoves] = useState([])
  useEffect(() => {
    findAllSuperMoves()
  }, [])
  const findAllSuperMoves = () =>
      superMoveService.findAllSuperMoves()
      .then(superMoves => setSuperMoves(superMoves))
  return (
      <div>
        <h2>Super Move List</h2>
        <button className="btn btn-primary"
                onClick={() => history.push("/superMoves/new")}>
          Add Super Move
        </button>
        <ul>
          {
            superMoves.map(superMove =>
                <li key={superMove.id}>
                  Hero ID {superMove.heroId}:
                  <Link to={`/superMoves/${superMove.id}`}>
                    {superMove.name}
                  </Link>
                </li>)
          }
        </ul>
      </div>
  )
}

export default SuperMoveList;