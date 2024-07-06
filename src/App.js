
import CreateUser from './create-user';
import LoginUser from './login-user'; // Assuming LoginUser is default exported
import NotFound from './not-found'; // Assuming NotFound is default exported
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/" element={<CreateUser />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
