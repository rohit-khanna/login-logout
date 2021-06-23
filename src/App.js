
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import Home from './Home';
import LoginForm from './components/loginForm';
import { isAuthenticated } from './utils';

import Student from './components/student';
import Teacher from './components/teacher';
import LoginAuthButton from './components/loginAuthButton'
import configureStore from "./redux/configureStore"
import { Provider as ReduxProvider } from "react-redux";
const store = configureStore();


function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Router>
          <header className="App-header">
            <LoginAuthButton />
          </header>  <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LoginForm} />
              <PrivateRoute exact path="/student" component={Student} />
              <PrivateRoute exact path="/teacher" component={Teacher} />
              <Route path="/not-authorized" component={() => <h3>Not Authorized</h3>} />
            </Switch>
          </main>

        </Router>
      </div>
    </ReduxProvider>
  );
}

const PrivateRoute = ({ component: C, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <C {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default App;
