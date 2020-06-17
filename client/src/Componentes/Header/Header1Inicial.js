import React, { Component } from 'react';
import './estiloHeader.css';
import {Link} from 'react-router-dom';
class Header extends Component{
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
                                <div className="colunas6">
                                    <div className="col3" style={{color:'#A174DB'}}>
                                        <label>Início</label>                                   
                                    </div>  
                                    <div className="col4">
                                        <label>Sobre</label>                                 
                                    </div> 
                                    <div className="col5">
                                        <Link to="/cadastroempregador" style={{textDecoration:"none",color:'black'}}><label>Para sua empresa</label> </Link>                              
                                    </div>  
                                    <div className="col6">
                                        <label>Contato</label>                                  
                                    </div>   
                                    <div className="col7">
                                        <Link to="/cadastroempregado"><button className="botaoDeLoginCadastro">Criar Conta</button></Link>                                
                                    </div>   
                                    <div className="col8">
                                        <Link to="/login"><button className="botaoDeLoginCadastro">Login</button></Link>                              
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
export default Header;