const SUPERMOVES_URL = "http://localhost:8080/api/superMoves"

// retrieve all super moves from the server
export const findAllSuperMoves = () =>
    fetch(SUPERMOVES_URL)
    .then(response => response.json())

// retrieve a single super move by their ID
export const findSuperMoveById = (id) =>
    fetch(`${SUPERMOVES_URL}/${id}`)
    .then(response => response.json())

export const findSuperMoveByHeroId = (hid) =>
    fetch(`${SUPERMOVES_URL}/h${hid}`)
    .then(response => response.json())

// delete a super move by their ID
export const deleteSuperMove = (id) =>
    fetch(`${SUPERMOVES_URL}/${id}`, {
      method: "DELETE"
    })

// create a new super move
export const createSuperMove = (superMove) =>
    fetch(SUPERMOVES_URL, {
      method: 'POST',
      body: JSON.stringify(superMove),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// update a super move by their ID
export const updateSuperMove = (id, superMove) =>
    fetch(`${SUPERMOVES_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(superMove),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllSuperMoves,
  findSuperMoveById,
  deleteSuperMove,
  createSuperMove,
  updateSuperMove,
  findSuperMoveByHeroId
}
