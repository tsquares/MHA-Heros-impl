import QuoteList from "./quotes/quote-list";
import SuperMoveList from "./supermoves/super-move-list";
import QuoteEditorForm from "./quotes/quote-editor-form";
import SuperMoveEditorForm from "./supermoves/super-move-editor-form";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
  console.log(window.ReactRouterDOM)
  return (
      <div>
        <HashRouter>
          <Route path={["/quotes", "/"]} exact={true}>
            <QuoteList/>
          </Route>
          <Route path="/quotes/:id" exact={true}>
            <QuoteEditorForm/>
          </Route>
          <Route path={["/super_moves", "/"]} exact={true}>
            <SuperMoveList/>
          </Route>
          <Route path="/super_moves/:id" exact={true}>
            <SuperMoveEditorForm/>
          </Route>
        </HashRouter>
      </div>
  );
}

export default App;
