import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./admin/page/dashboard/dashboard.page";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/admin/:feature">
          <Dashboard />
        </Route>
        {/* Page not found */}
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
