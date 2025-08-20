import LoginForm from "./pages/landing/login";
import SignUp from "./pages/landing/signup";
import Dashboard from "./pages/dashboard/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/landing/home";
import { ToastProvider } from "./components/contextapi/toster/toastContext";
import ProtectedRoot from "./components/services/protectRoot";
import Tasks from "./pages/dashboard/tasks";
import Profile from "./pages/dashboard/profile";
import { UserDataProvider } from "./components/contextapi/userdata/userdata";
import Display from "./pages/dashboard/list";
import TaskForm from "./pages/dashboard/taskform";
import Detail from "./pages/dashboard/taskdetail";

function App() {
  return (
    <ToastProvider>
      <UserDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/dashboard/home"
              element={
                <ProtectedRoot>
                  <Dashboard />
                </ProtectedRoot>
              }
            />
            <Route
              path="/dashboard/tasks"
              element={
                <ProtectedRoot>
                  <Tasks />
                </ProtectedRoot>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <ProtectedRoot>
                  {" "}
                  <Profile />
                </ProtectedRoot>
              }
            />
            <Route
              path="/dashboard/tasks/list"
              element={
                <ProtectedRoot>
                  <Display />
                </ProtectedRoot>
              }
            />
            <Route
              path="/dashboard/taskform"
              element={
                <ProtectedRoot>
                  <TaskForm />
                </ProtectedRoot>
              }
            />

            <Route
              path="/dashboard/tasks/list/detail"
              element={
                <ProtectedRoot>
                  <Detail/>
                </ProtectedRoot>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </UserDataProvider>
    </ToastProvider>
  );
}

export default App;
