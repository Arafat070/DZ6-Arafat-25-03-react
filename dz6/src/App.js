import './App.css'
import Counter from "./component/Counter/Counter.jsx";
import GetData from "./component/GetData/GetData.jsx";
import Header from "./component/header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Images from "./component/Images/Images.jsx";
import OnePost from "./component/OnePost/OnePost.jsx";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/counter' element={<Counter/>}/>
                <Route path='/getdata' element={<GetData/>}/>
                <Route path='/image' element={<Images/>}/>
                <Route path='/:number' element={<OnePost/>}/>
            </Routes>
        </>
    )
}

export default App