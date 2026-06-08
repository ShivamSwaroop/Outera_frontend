import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pipeline from "./pages/Pipeline"
import Landing from "./pages/Landing"
import Results from "./pages/Results"

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/run/:campaignId" element={<Pipeline/>}/>
      <Route path="/results/:campaignId" element={<Results/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
