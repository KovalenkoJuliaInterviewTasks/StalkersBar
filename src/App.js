import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App()
{
    console.log("✅ App component is rendering!");
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );

}

export default App;
