import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import { Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed } from './components';


function App() {
	return (
		<Router>
			<Box sx={{backgroundColor: '#000' }}> 
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Feed />} />
					<Route exact path='/video/:id' element={<VideoDetail />} />
					<Route exact path='/channel/:id' element={<ChannelDetail />} />
					<Route exact path='/search/:searchTerm' element={<SearchFeed />} />
				</Routes>
			</Box>
		</Router>
	);
}

export default App;
