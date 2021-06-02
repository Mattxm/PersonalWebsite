import react, {useState, useEffect} from "react"
import styled from 'styled-components'
import {AiOutlineFileSearch} from "react-icons/ai"
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import {IoCloseOutline} from 'react-icons/io5'
import {AiOutlineOneToOne, AiOutlineDrag, AiOutlineColumnHeight, AiOutlineColumnWidth } from 'react-icons/ai'
import {Helmet} from 'react-helmet'
import ReactTooltip from 'react-tooltip';

const ReaderContainer = styled.div`
    min-height: 100vh;
    height: 100%;
    background-color: #15161A; // #BFCCCE;
    color: #ffffff;


    .content {
        text-align: center;
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        outline: none;
        outline-style: none;
        box-shadow: none;
        border-color: transparent;
        
        ul {
            width: 100%;
            margin: 0 auto;
        }

        li {
            width: 100%;
            list-style: none;
            line-height: 0px;
            text-align: center;
        }

        .default {
            overflow: auto;
        }

        .naturalfit {
            max-width: calc(100vw - (100vw - 100%));
        }

        .verticalfit {
            max-height: 100vh;
            max-width: calc(100vw - (100vw - 100%));
        }

        .horizontalfit {
            width: calc(100vw - (100vw - 100%));
        }

        
    }



    .main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
    }

    .search{
        white-space: nowrap;
        line-height: 1.15;
        display: flex;
        margin: 0 auto;
        color: #ffffff;
        background-color: white;
        overflow: hidden;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
    .searchbar {
        border: none;
        font-size: 1.2rem;
        height: 3rem;
        line-height: 3rem;
        padding: 0 .8rem;
        width: 100%;
        outline: none;
    }
    .searchbtn {
        width: 3rem;
        height: 3rem;
        border: none;
        background-color: white;
        padding: 0;
        text-align: center;
        color: red;
        margin: 0;
        line-height: 3rem;
        outline: none;
        transition: color .25s;
        :hover {
            color: darkred;
        }
    }
    h1 {
        text-align:center;
        padding-top: 40vh;
        padding-bottom: 1.5rem;
    }
    .err {
        color: red;
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: .8rem;
    }

    .sample {
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        text-align: center;
        margin: .2rem;
        border-color: grey;
        border-width: 2px;
        padding: .2rem;
        border-style: solid;
        border-radius: 4px;
        margin-bottom: .3rem;
    }

    .menubtncontainer{
        z-index: 1;
        position: fixed;
        width: 0;
        height: 0;
        border-top: 50px solid #363636;
        border-right: 50px solid transparent;
    }
    .settings{
        display: flex;
        padding: 10px;
        background-color: #363636;
    }
    .menu{
        width: 100%;
        z-index: 10;
        position: fixed;
    }
    .historycontainer{ 
        width: 100%;
        margin: 0 auto;
    }
    .historyclear{
        text-align: center;
        width: 4rem;
        border-radius: 4px;
        margin: 0 auto;
        padding: .5rem;
        margin-bottom: 1rem;
        transition: background-color .25s;
        :hover{
            background-color: darkred;
        }
        
    }
    .history{
        display: flex;
        background-color: #292929;
        margin-bottom: .5rem;
        border-radius: 4px;
        width: 100%;
        img{
            padding: .5rem;
        }
    }

    .historydescription{
        max-width: 300px;
        margin: 0 auto;
        text-align: center;
        line-height: 1.5rem;
    }
    
`




function Reader(){
    const types = ["default", "naturalfit", "verticalfit", "horizontalfit"]
    const typeicons = [AiOutlineOneToOne, AiOutlineDrag, AiOutlineColumnHeight, AiOutlineColumnWidth]
    const [album, setAlbum] = useState("")
    const [data, setData] = useState(false)
    const [images, setImages] = useState(false)
    const [err, setErr] = useState(false)
    const [title, setTitle] = useState("Home")
    const [menuOpen, setMenuOpen] = useState(false)
    const [view, setView] = useState(1)
    const [viewtooltip, setviewtooltip] = useState("")
    const [previous, setPrevious] = useState({})
    
    useEffect(() => {
        if (localStorage.getItem("prev"))
            setPrevious(JSON.parse(localStorage.getItem("prev")))
    }, [])

    useEffect(()=>{
        localStorage.setItem("prev", JSON.stringify(previous))
    },[previous])

    const makehistory = () =>{
        let temp = []
        for (const [k, v] of Object.entries(previous)) {
            temp.push(<div key={k} className="history" onClick={()=>search(k)}><img style={{height: 150, width: 100, paddingRight: ".5rem", objectFit: "cover"}} alt={k} src={v.cover} /><h2>{v.title ? v.title : "Untitled"}</h2> </div>)
        }
        return temp;
    }

    const search = (id) => {
        fetch("https://api.imgur.com/3/album/" + id, {headers: {'Authorization': 'Client-ID 14f26bd597c439e'}}) //Wht7z
        .then(res => res.json())
        .then(res => {setData(res);
            if (res.data.images) 
                if (!previous[res.data.id])
                    setPrevious({...previous, [res.data.id]: {title: res.data.title, cover: res.data.images[0].link}})
        },
        error =>  {console.log(error)}   
        )

    }

    const iconupdate = () => {
        const E = typeicons[view]
        return <E size={50} onClick={()=>setView(view + 1 > 3 ? 0 : view + 1)} />
    }

    useEffect(() => {
        if (data){
            if (data.data.images){
                if (data.data.title != null)
                    setTitle(data.data.title)
                else
                    setTitle("Untitled")
                setImages(data.data.images.map((img,i)=>{return <li key={i}><img className={types[view]} src={img.link} alt={i}/></li>}))
                setErr(false)
            }
            else{
                setImages(false)
                setErr(true)
            }
        }
    }, [data])

    useEffect(()=>{
        switch (view){
            case 0: setviewtooltip("Default image size."); break;
            case 1: setviewtooltip("Image scales with width or height."); break;
            case 2: setviewtooltip("Image fits within window height."); break;
            case 3: setviewtooltip("Image fills window width."); break;
            default: setviewtooltip("Default image size.");
        }
        if (images){
            setImages(data.data.images.map((img,i)=>{return <li key={i}><img className={types[view]} src={img.link} alt={i}/></li>}))
        }
        
    },[view])


    return (
        <ReaderContainer>
            <Helmet>
                <title>Imgur Reader {" - " + title}</title>
            </Helmet>
            
            
            {images ? 
            <>
                
                {menuOpen ?
                <div className="menu">
                    <div className="settings">
                        <ReactTooltip place="right" getContent={()=>viewtooltip}/>
                        <IoCloseOutline size="50" onClick={()=>{setImages(false); setTitle("Home") }}/>
                        <div data-tip={viewtooltip}>{iconupdate()}</div>
                    </div>
                    <div className={"menubtncontainer"} onClick={()=>setMenuOpen(!menuOpen)}><IoIosArrowUp style={{transform: "translate(0px, -45px)"}} color="white" size={25}/></div>
                </div> 
                :
                <div className={"menubtncontainer"} onClick={()=>setMenuOpen(!menuOpen)}><IoIosArrowDown style={{transform: "translate(0px, -45px)"}} color="white" size={25}/></div>
                }
                <div className="content">
                    <ul>
                        {images}
                    </ul>
                </div>
            </> : 

            <section className="main">
                <h1>Imgur Album Reader</h1>
                <div className="search">
                    <input type="text" className="searchbar" placeholder="Paste an Imgur album ID" autoFocus={true} value={album} onChange={(x) => setAlbum(x.target.value)} onKeyDown={(v) => {
                        if (v.key === 'Enter') 
                            search(album) //search("Wht7z")
                        }}>
                    </input><button className="searchbtn" onClick={() => search(album)}><AiOutlineFileSearch size="50"/></button>
                </div>
                {<div className="sample" onClick={() => search("Wht7z")}>Sample</div>
                }
                {err && 
                <div className="err">
                    Could not find album with given ID.
                </div>}
                
                { Object.keys(previous).length !== 0 ?
                <div className="historycontainer">                
                    <div className="historyclear" onClick={()=>{setPrevious({})}}>History</div>
                    <ul style={{width: "100%"}}>
                        {makehistory()}
                    </ul>
                </div> : 
                <p className="historydescription">
                    Your history will appear here. 
                    <br/>
                    Browse an album and check back here if you need to view it again.
                </p>
                }

            </section>
            }



        </ReaderContainer>
    )
}
export default Reader
