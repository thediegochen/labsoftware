import React, { Component } from 'react';
import './estiloEmpregado.css';
import Form from '../../Componentes/Campos/Form';
import Header2 from "../../Componentes/Header/Header2.js";
import { Link } from 'react-router-dom';
class CadastroEmpregado extends Component{
    render(){
    	return(
            <div>
                <Header2 />
                <div className="container">
                    <div className="alinhamentoEmpregado">
                        <div className="empregadoSuperior">
                            <div className="colunas2-page">
                                <div className="col1">

                                </div>
                                <div className="col2">
                                    Cadastro
                                </div>
                            </div>
                        </div>
                        <div className="empregadoInferior">  
                            <div className="colunas2-page">
                                <div className="col1">
                                    <img src ={require('../../imagem/img1.png')} className="img" />
                                </div>
                                <div className="col2">
                                    <div className="cardEmpregado">
                                        <div id="cardEmpregadoMeio" className="cardEmpregadoMeio">
                                            <Form />                                                                                                
                                        </div>
                                        <div className="cardEmpregadoFinal">
                                            <label>Já se cadastrou? <Link to="/login" >Clique aqui</Link></label>
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

export default CadastroEmpregado;