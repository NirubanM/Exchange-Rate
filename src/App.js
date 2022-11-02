import "./App.css";
import{Routes,Route} from 'react-router-dom'
import Horizontalchart from './components/Chart';

import Form from "./components/Register";





 

function App() {
  return (
    < >
    <Form/>
      <div>

      <Routes>
        <Route path= '/about' element={<Horizontalchart/>}/>
      </Routes>
      
      </div>



    </>
  );
}

export default App;
