import HeroList from "./heros/hero-list";
import HeroFormEditor from "./heros/hero-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path={["/heros","/"]} exact={true}>
                    <HeroList/>
                </Route>
                <Route path="/heros/:id" exact={true}>
                    <HeroFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}
export default App;
