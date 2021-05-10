import react, {useState, useEffect} from "react"
import styled from 'styled-components'

const ReaderContainer = styled.div`
    height: 100%;
    width: 100%;

    .view{
        display: grid;
    }
    .content {
        height: 100%;
        width: 100%;
        overflow: auto;
        padding-right: 20px;
    }

    ul {
        margin: 0px;
    }

    li {
        list-style: none;
        line-height: 0px;
        text-align: center;
    }

    img {
        max-width: calc(100vw);
        max-height: 100vh;
    }
`

function GetAlbum(id, set, err){
    fetch("https://api.imgur.com/3/album/" + id, {headers: {'Authorization': 'Client-ID 14f26bd597c439e'}}) //Wht7z
    .then(res => res.json())
    .then(res => {set(res); err(false)},
        error =>  {console.log(error); err(true)}   
        )
}

function FormatImages(data){
// {!err && album.data.images.map((img,i)=>{return <img src={img.link} id={i}/>})}
    if (data.data)
    {
        return data.data.images.map((img,i)=>{return <li key={i}><img src={img.link}/></li>})
    }
    return <></>
}

function Reader(){
    const [data, setData] = useState({})
    const [err, setErr] = useState(null)
    const [images, setImages] = useState([])

    useEffect(() => {
        (GetAlbum("TAXYCmf", setData, setErr));
        setImages(FormatImages(data));
        console.log("test")        
      }, []);

    return (
        <ReaderContainer>
            <div>
                test
            </div>
            <div className="view">
                <div className="content">
                    {!err ? 
                        <ul>
                            {images}
                        </ul>
                        :
                        <>Error</>
                    }
                </div>
            </div>
        </ReaderContainer>
    )
}
export default Reader
