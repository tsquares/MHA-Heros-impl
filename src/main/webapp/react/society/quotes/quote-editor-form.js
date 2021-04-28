import quoteService from "./quote-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const QuoteEditorForm = () => {
  const [quote, setQuote] = useState({})
  const {id} = useParams()
  const history = useHistory()
  useEffect(() => {
    if (id !== "new") {
      findQuoteById(id)
    }
  }, []);
  const findQuoteById = (id) =>
      quoteService.findQuoteById(id)
      .then(quote => setQuote(quote))
  const updateQuote = (id, newQuote) =>
      quoteService.updateQuote(id, newQuote)
      .then(() => history.goBack())
  const deleteQuote = (id) =>
      quoteService.deleteQuote(id)
      .then(() => history.goBack())
  const createQuote = (quote) =>
      quoteService.createQuote(quote)
      .then(() => history.goBack())

  return (
      <div>
        <h2>
          Quote Editor
        </h2>
        <label>ID (auto-fill)</label>
        <input value={quote.id}/><br/>
        <label>Text</label>
        <input
            onChange={(e) =>
                setQuote(quote =>
                    ({...quote, text: e.target.value}))}
            value={quote.text}/><br/>
        <label>Favorite?</label>
        <input
            onChange={(e) =>
                setQuote(quote =>
                    ({...quote, favorite: e.target.value}))}
            value={quote.favorite}/><br/>
        <label>Upvotes</label>
        <input
            onChange={(e) =>
                setQuote(quote =>
                    ({...quote, upvotes: e.target.value}))}
            value={quote.upvotes}/><br/>
        <label>Hero ID</label>
        <input
            onChange={(e) =>
                setQuote(quote =>
                    ({...quote, heroId: e.target.value}))}
            value={quote.heroId}/><br/>
        <br/>
        <button className="btn btn-warning"
                onClick={() => {
                  history.goBack()
                }}>
          Cancel
        </button>
        <button className="btn btn-danger"
                onClick={() => deleteQuote(quote.id)}>
          Delete
        </button>
        <button className="btn btn-success"
                onClick={() => createQuote(quote)}>
          Create
        </button>
        <button className="btn btn-primary"
                onClick={() => updateQuote(quote.id, quote)}>
          Update
        </button>
      </div>
  )
}

export default QuoteEditorForm