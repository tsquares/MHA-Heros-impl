import Heros from "./heros";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Heros/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
