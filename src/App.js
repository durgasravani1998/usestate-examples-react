
// import './App.css';
// import UseStateExample1 from './Components/UseStateExample1';
// import UseStateExample2 from './Components/UseStateExample2';
// import UseStateExample3 from './Components/UseStateExample3';
// // import UseStateExample3copy from './Components/UseStateExample3copy';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import VideoDisplay from './Components/Video';

// function App() {
//   return (
//     <div className="App">
//       {/* <UseStateExample1/> */}
//       {/* <UseStateExample2/> */}
//       {/* <UseStateExample3/> */}
//       {/* <UseStateExample3copy/> */}
//       <VideoDisplay/>


      
//     </div>
//   );
// }

// export default App;




import VideoDisplay from './Components/Video';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
// import Routing from './Components/Routing';

function App() {
  return(
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videodisplay' element={<VideoDisplay/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
  </Router>
)
}

export default App;

