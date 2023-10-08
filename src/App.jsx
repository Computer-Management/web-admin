import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/login" Component={Login} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" component={Dashboard}></Route>
            </Routes>
        </Layout>
    );
}

export default App;
