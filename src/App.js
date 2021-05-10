import React, {useState, useEffect} from 'react'
import './App.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import Fourofour from "./components/Fourofour"
import Experiment from "./experiments"
import Reader from "./experiments/reader/reader"

const PageContainer = styled.div`
  min-height: calc(100vh - 80px);
  background-color: #15161A;
  
  

  @media only screen and (max-width: 768px) {
    padding: 30px;
  }
  @media only screen and (min-width: 769px){
    padding-left: 50px;
    padding-right: 50px;
  }

  @media only screen and (min-width: 1200px){
    padding-left: 80px;
    padding-right: 80px;
  }
  


`


function Home(props) {
  
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
}

function Error() {
  return (
    <PageContainer>
      <Fourofour/>
    </PageContainer>
  )
}

function App() {
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1200);
    console.log(window.location.pathname)
    if (window.location.pathname !== "/")
    {setLoad(false)};
  }, []);

  return (
    <Router>
      
      { !(window.location.pathname.includes("/reader/") || window.location.pathname === "/reader")  && <Navbar />}
      <Switch>
        <Route path="/" exact>
          <Home load={load}/>
        </Route>
        <Route path="/experiments" component={Experiments} exact/>
        <Route path="/reader" component={Reader} exact/>
        <Route component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
