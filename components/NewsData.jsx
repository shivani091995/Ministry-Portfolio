import "./News.css";


function NewsData(props) {
    return(
        <div className="n-card">
            <div className="n-image">
                <img alt="imag" src={props.image}></img>
            </div>
            <a href={props.url}>
                <h4>{props.heading}</h4>
            </a>
            <p>{props.para}</p>
        </div>
    ) 
    
}
export default NewsData;