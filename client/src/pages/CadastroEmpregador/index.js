import React, { Component } from 'react';
import './estiloEmpregador.css';
import Form1 from '../../Componentes/Campos/Form1';
import Form2 from '../../Componentes/Campos/Form2';
import Header3 from "../../Componentes/Header/Header3Empregador.js";
import { Link } from 'react-router-dom';

class CadastroEmpregador extends Component{
    constructor(props){
        super(props);
        this.state = {     
        }
        this.botao = this.botao.bind(this);
    }
    componentDidMount(){
        let texto = document.getElementById('fisica'); 
        texto.style.color="#A174DB";
     }   
     botao(e, id){ 
        let botao = document.getElementById(e);
        let texto = document.getElementById('fisica');
        let texto2 = document.getElementById('juridica');    
        let formulario = document.getElementById('cardEmpregadorMeio');   
        let formulario2 = document.getElementById('cardEmpregadorMeio2');   
        if(id === '1'){
            botao.style.marginLeft= "-75px";
            texto.style.color="#A174DB";
            texto2.style.color="black";
            formulario.style.width ="90%";
            formulario.style.height ="auto";
            formulario.style.marginLeft ="5%";
            formulario.style.opacity = "1";
            formulario2.style.width = "0px";
            formulario2.style.height = "0px";
            formulario2.style.opacity = "0";
        }else{
            botao.style.marginLeft = "65px";
            texto2.style.color="#A174DB";
            texto.style.color="black";
            formulario.style.width ="0px";
            formulario.style.height ="0px";
            formulario.style.opacity = "0";
            formulario2.style.width = "90%";
            formulario2.style.height = "auto";
            formulario2.style.marginLeft ="5%";
            formulario2.style.opacity = "1";
        }
    }
    render(){
    	return(
            <div>
                <Header3 />
                <div className="container">
                    <div className="alinhamentoEmpregador">
                        <div className="empregadorSuperior">
                            <div className="colunas2-page">
                                <div className="col1">

                                </div>
                                <div className="col2">
                                    Cadastro
                                </div>
                            </div>
                        </div>
                        <div className="empregadorInferior">  
                            <div className="colunas2-page">
                                <div className="col1">
                                    <img src ={require('../../imagem/img1.png')} className="img" />
                                </div>
                                <div className="col2">
                                    <div className="card">
                                        <div className="cardEmpregadorSuperior">
                                            <input type="submit" id="fisica" name="fisica" value="Física" className="fisica" onClick={() => this.botao('bola', '1')} />
                                            <input type="submit" id="juridica" name="juridica" value="Jurídica" className="juridica" onClick={() => this.botao('bola', '2')}/>
                                            <div>
                                                <label id="bola" name="bola" className="bola"></label>
                                            </div>
                                        </div>
                                        <div id="cardEmpregadorMeio" className="cardEmpregadorMeio">
                                            <Form1 />                                                                                                
                                        </div>
                                        <div id="cardEmpregadorMeio2" className="cardEmpregadorMeio2">
                                            <Form2 />             
                                        </div>
                                        <div className="cardEmpregadorFinal">
                                            <label>Já se cadastrou? <Link to="/login">Clique aqui</Link></label>
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

export default CadastroEmpregador;