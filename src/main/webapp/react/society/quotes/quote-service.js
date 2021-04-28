const QUOTES_URL = "http://localhost:8080/api/quotes"

// retrieve all quotes from the server
export const findAllQuotes = () =>
    fetch(QUOTES_URL)
    .then(response => response.json())

// retrieve a single quote by their ID
export const findQuoteById = (id) =>
    fetch(`${QUOTES_URL}/${id}`)
    .then(response => response.json())

// delete a quote by their ID
export const deleteQuote = (id) =>
    fetch(`${QUOTES_URL}/${id}`, {
      method: "DELETE"
    })

// create a new quote
export const createQuote = (quote) =>
    fetch(QUOTES_URL, {
      method: 'POST',
      body: JSON.stringify(quote),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// update a quote by their ID
export const updateQuote = (id, quote) =>
    fetch(`${QUOTES_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(quote),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

// export all functions as the API to this service
export default {
  findAllQuotes,
  findQuoteById,
  deleteQuote,
  createQuote,
  updateQuote
}
