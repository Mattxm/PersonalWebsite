import React, {useState, useEffect} from 'react'
import './App.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Simplified from "./components/Simplified"
import Fourofour from "./components/Fourofour"
import Reader from "./experiments/reader/reader"
/* import reactDom from 'react-dom';
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import Experiment from "./experiments" */

const TempPageContainer = styled.div`
  min-height: 100vh;
  background-color: #15161A;
  
`
function Placeholder() {

  return (
    <TempPageContainer>
      <Simplified></Simplified>
    </TempPageContainer>
  )
}

/* function Home(props) {
  
  return (
    <PageContainer>
      {props.load ? <Loading load={props.load}/> : <>  
      <Hero/>
      <About/>
      <Projects/>
      <Contact/></>}
    </PageContainer>
  )
}

function Experiments() {
  return (
    <PageContainer>
      <Experiment/>
    </PageContainer>
  )
} */

function Error() {
  return (
    <TempPageContainer>
      <Fourofour/>
    </TempPageContainer>
  )
}

function App() {
/*   const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1200);
    if (window.location.pathname !== "/")
    {setLoad(false)};
  }, []); */

  return (
    <Router>
      
      {/* { !(window.location.pathname.includes("/reader/") || window.location.pathname === "/reader")  && <Navbar />} */}
      <Switch>
        <Route path="/" exact>
          {/* <Home load={load}/> */}
          <Placeholder />
        </Route>
        {/* <Route path="/experiments" component={Experiments} exact/> */}
        <Route path="/reader" component={Reader} exact/>
        <Route component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
