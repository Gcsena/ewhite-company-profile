import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './pages/MainLayout.jsx';
import Home from './pages/Home.jsx';
// import Homef from './pages/Homef.jsx';
import About from './pages/About.jsx';
import Posts from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import Reseller from './pages/Reseller.jsx';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
// import Contact from './pages/Contact';
import Register from './pages/Register.jsx';
import { Accordion, Accordion2 } from './components/accordion.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './Appf.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} /> 
						<Route path='products' element={<Products />} />
						<Route path='posts' element={<Posts />} />
						<Route path='Reseller' element={<Reseller />} />
						{/* <Route path='Contact' element={<Contact />} />  */}
					</Route>
					<Route path='Login' element={<Login />} />
					<Route path='Register' element={<Register />} />
					{ <Route path='accordion' element={<Accordion />} /> }
					<Route path='*' element={<Error />} />

				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
