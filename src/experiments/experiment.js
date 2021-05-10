import react from "react"
import styled from "styled-components"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SiCplusplus, SiReact, SiCss3, SiHtml5, SiUnrealengine, SiJavascript} from "react-icons/si"; // SiMysql, SiAmazonaws, SiWordpress, SiAdobephotoshop 
import Fade from 'react-reveal/Fade';

const ExperimentContainer = styled.div`
    padding-top: 100px;
    max-width: 1000px;
    margin: 0 auto;
    color: #131112;

    ul {
        text-align: center;
    }
    
    li {
        position: relative;
        display: inline-block;     
        margin: 10px;
        text-align: left;
    }

    .card {
        width: 250px;
        background-color: #BFCCCE;
    }
    .title {
        color: black;
    }
    .desc {
        height: 200px;
    }

`
const CardInfo = [
    {
        title: "Manga Reader",
        desc: "Present manga and comics posted on Imgur in a more readable way.",
        tools: [SiReact, SiCss3, SiHtml5, SiJavascript],
        img: {},
        action: () => {window.location.href="/reader"}
    },
    {
        title: "Targetting System",
        desc: "Unreal Engine Targetting system for 3rd person ARPGs.",
        tools: [SiUnrealengine, SiCplusplus],
        img: {},
    },
    {
        title: "Image Sorter",
        desc: "Manually sort images and folders on your PC easier.",
        tools: [SiReact, SiCss3, SiHtml5, SiJavascript],
        img: {},
    },
]

function Experiment() {
    return (
        <ExperimentContainer>
            <p style={{color: "white", textAlign: "center", fontSize: "24px"}}>Under Construction</p>
            <Fade>
                <ul>
                    {CardInfo.map((e,i) => {
                        return (
                            <li key={i}>
                                <Card className="card">
                                    <CardContent>
                                        <Typography className="title" gutterBottom>
                                            {e.title}
                                        </Typography>
                                        <Typography className="desc" variant="body2" component="p">
                                            {e.desc}
                                        </Typography>
                                        <div>
                                        {e.tools.map((e,i)=>{
                                            const C = e
                                            return (<C key={i} size={25} style={{paddingRight: 10}}/>)
                                        })} 
                                        </div>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={e.action}>Open</Button>
                                    </CardActions>
                                </Card>
                            </li>
                        )
                    })}
                </ul>
            </Fade>
            
        </ExperimentContainer>
    )
}

export default Experiment