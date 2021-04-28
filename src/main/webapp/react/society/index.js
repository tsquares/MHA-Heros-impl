import QuirkList from "./quotes/quirk-list";
import SuperMoveList from "./supermoves/super-move-list";
import QuirkEditorForm from "./quotes/quirk-editor-form";
import SuperMoveEditorForm from "./supermoves/super-move-editor-form";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
  console.log(window.ReactRouterDOM)
  return (
      <div>
        <HashRouter>
{/*          <Route path={["/quirks", "/"]} exact={true}>
            <QuirkList/>
          </Route>
          <Route path="/quirks/:id" exact={true}>
            <QuirkEditorForm/>
          </Route>*/}
          <Route path={["/quotes", "/"]} exact={true}>
            <SuperMoveList/>
          </Route>
          <Route path="/quotes/:id" exact={true}>
            <SuperMoveEditorForm/>
          </Route>

{/*          <Route path="/super_moves/:superMoveId/quirks" exact={true}>
            <QuirkList/>
          </Route>
          <Route path="/quirks/:quirkId" exact={true}>
            <SuperMoveEditorForm/>
          </Route>*/}

        </HashRouter>
      </div>
  );
}

export default App;
