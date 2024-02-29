import GlobalStyles from "@/styles/components/global";
import {Landing} from "@/pages";
import {GamePreview} from '@/components';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Landing />      
      <Routes>
        <Route path='/games/:id' element={<GamePreview />}/>
      </Routes>	
    </>
  );
}

export default App;
