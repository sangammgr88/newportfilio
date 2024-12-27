
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project  from './components/Project';
import Contact  from './components/Contact';
import About from "./components/About";

function App() {
  return (
    <div className="bg-slate-200">
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
<Contact/>
    </div>
  );
}

export default App;
