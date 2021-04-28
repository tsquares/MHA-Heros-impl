import quoteService from "./quote-service"

const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const QuoteList = () => {
    const history = useHistory()
    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        findAllQuotes()
    }, [])
  const findAllQuotes = () =>
      quoteService.findAllQuotes()
      .then(quotes => setQuotes(quotes))
  return (
      <div>
        <h2>Quote List</h2>
        <button className="btn btn-primary"
                onClick={() => history.push("/quotes/new")}>
          Add Quote
        </button>
        <ul>
          {
            quotes.map(quote =>
                <li key={quote.id}>
                  Hero ID {quote.heroId}:
                  <Link to={`/quotes/${quote.id}`}>
                    {quote.text}
                  </Link>
                </li>)
          }
        </ul>
      </div>
    )
}

export default QuoteList;