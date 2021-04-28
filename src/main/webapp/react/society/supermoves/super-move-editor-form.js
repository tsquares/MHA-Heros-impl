import superMoveService from "./super-move-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const SuperMoveEditorForm = () => {
  const [superMove, setSuperMove] = useState({})
  const {id} = useParams()
  const history = useHistory()
  useEffect(() => {
    if (id !== "new") {
      findSuperMoveById(id)
    }
  }, []);
  const findSuperMoveById = (id) =>
      superMoveService.findSuperMoveById(id)
      .then(superMove => setSuperMove(superMove))
  const updateSuperMove = (id, newSuperMove) =>
      superMoveService.updateSuperMove(id, newSuperMove)
      .then(() => history.goBack())
  const deleteSuperMove = (id) =>
      superMoveService.deleteSuperMove(id)
      .then(() => history.goBack())
  const createSuperMove = (superMove) =>
      superMoveService.createSuperMove(superMove)
      .then(() => history.goBack())

  return (
      <div>
        <h2>
          Super Move Editor
        </h2>
        <label>ID (auto-fill)</label>
        <input value={superMove.id}/><br/>
        <label>Name</label>
        <input
            onChange={(e) =>
                setSuperMove(superMove =>
                    ({...superMove, name: e.target.value}))}
            value={superMove.name}/><br/>
        <label>Description</label>
        <input
            onChange={(e) =>
                setSuperMove(superMove =>
                    ({...superMove, description: e.target.value}))}
            value={superMove.description}/><br/>
        <label>Range</label>
        <input
            onChange={(e) =>
                setSuperMove(superMove =>
                    ({...superMove, range: e.target.value}))}
            value={superMove.range}/><br/>
        <label>Usage</label>
        <input
            onChange={(e) =>
                setSuperMove(superMove =>
                    ({...superMove, usage: e.target.value}))}
            value={superMove.usage}/><br/>
        <label>Hero ID</label>
        <input
            onChange={(e) =>
                setSuperMove(superMove =>
                    ({...superMove, heroId: e.target.value}))}
            value={superMove.heroId}/><br/>
        <label>Quirk ID</label>
        <input
            onChange={(e) =>
                setSuperMove(superMove =>
                    ({...superMove, quirkId: e.target.value}))}
            value={superMove.quirkId}/><br/>
        <br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.goBack()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteSuperMove(superMove.id)}>
          Delete
        </button>
        <button className="btn btn-success"
                onClick={() => createSuperMove(superMove)}>
          Create
        </button>
        <button className="btn btn-primary"
                onClick={() => updateSuperMove(superMove.id, superMove)}>
          Update
        </button>
      </div>
  )
}

export default SuperMoveEditorForm