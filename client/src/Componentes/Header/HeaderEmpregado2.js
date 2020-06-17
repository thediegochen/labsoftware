import React, { Component } from 'react';
import './estiloHeader.css';
import {Link} from 'react-router-dom';
import { getCookie, signOut } from '../../auth/auth';
class HeaderEmpreagdo extends Component{
    constructor(props){
        super(props);
        this.state={
            emailEmpregado:''
        }
        this.sair = this.sair.bind(this);
    }
    componentDidMount(){
        const emailEmpregado = getCookie('email');
        let newState = this.state;
        newState.emailEmpregado = emailEmpregado;
        this.setState(newState);
    }
    sair(){
        signOut();
    }
    render(){
    	return(
            <div className="fundoHeader">
            <div className="alinhamentoHeader">
                <div className="alinahmentoTexto">
                    <div className="colunas2">
                        <div className="col1">
                            <img src ={require('../../imagem/logo.png')}/>
                        </div>   
                        <div className="col2">
                            <div className="colunas4-Header">
                                <div className="col3" style={{color:'black'}}>
                                    <Link to='/vagas' style={{textDecoration:"none", color:'black'}}><label>Vagas</label></Link>                                  
                                </div>  
                                <div className="col4">
                                    <label>Ajuda</label>                                 
                                </div> 
                                <div className="col5">
                                    <label>Contato</label>                               
                                </div>  
                                <div className="col6">
                                    <input type="checkbox" id="check"/>
                                    <label htmlFor="check" className="bolaLogin"></label>
                                    <div className="barra">
                                        <nav>
                                            <p className="bolaLogin" style={{ width:'70px', height:'70px'}}></p>
                                            <div className="email-linhas">
                                                <p className="email">{this.state.emailEmpregado}</p>
                                            </div>
                                            <div className="linhas">
                                                <Link to="/" style={{textDecoration:'none'}}><label className="link">Meu perfil</label></Link>
                                            </div>    
                                            <div className="linhas">
                                                <Link to="/" style={{textDecoration:'none'}}><label className="link">Ajuda</label></Link>
                                            </div>
                                            <div className="linhas">
                                                <Link to="/" style={{textDecoration:'none'}}><label className="link" onClick={this.sair}>Sair</label></Link>
                                            </div>
                                        </nav>
                                    </div>
                                </div>    
                            </div>
                        </div> 
                    </div>
                </div>    
            </div>
        </div>
    		);
    }

}

export default HeaderEmpreagdo;