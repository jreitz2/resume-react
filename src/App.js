import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";
import './index.css';
import { useState } from "react";

function App() {

  const [ info, setInfo ] = useState({
    name: '',
    email: ''
  });

  const [addJob, setAddJob] = useState(false);

  return (
    <div className="App">
      <InputForm info={info} setInfo={setInfo} addJob={addJob} setAddJob={setAddJob}/>
      <OutputForm info={info} addJob={addJob}/>
      
    </div>
  );
}

export default App;
