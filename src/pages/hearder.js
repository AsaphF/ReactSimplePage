import Reactlogo from '../imagens/react-logo.svg'

export default function Header (){
    return(
        <>
        <header className="headerPage">
        <div id="headerSection">
            <img className="imgNav" src={Reactlogo} width="40px" ></img>
            <h3 id='titleHeader'>ReactFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
        </header>
        </>    
    ) 
}


