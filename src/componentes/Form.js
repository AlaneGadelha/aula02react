import './Form.css'
import logo from '../download.png'

function Form(){
    return(
        <div className="main">
            <img className="logo" src={logo} alt ='logomarca Infinity'></img>
            <form className ="form">
                <label>Nome:</label>
                <input type='text'></input>
                <label>CPF:</label>
                <input type="text"></input>
                <input type="submit"></input>

            </form>
        </div>
    )
}

export default Form