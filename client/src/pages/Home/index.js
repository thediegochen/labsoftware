import React, {Component} from 'react';
import './estiloHome.css';
import {Link} from 'react-router-dom';
import Header from '../../Componentes/Header/Header1Inicial.js';
class Home extends Component{
	render(){
  		return (
    		<div>
              <Header />     
              <div className="alinhamentoInicio">
                   <div className="margensInicio">
                         <div className="superior">
                              <div className="lin1">
                                   <label>Encontre As Melhores Oportunidades No Mercado Informal</label>
                              </div>  
                              <div className="lin2">
                                   <label>Em busca daquele emprego temporário para dar uma aliviada no final do mês? Aqui você encontra as melhores vagas em mais de 50 categorias de serviço!</label>
                              </div> 
                              <div className="lin3">
                                   <button>Saiba Mais</button>                         
                              </div> 
                              <div className="lin4">
                                   <img src ={require('../../imagem/tela1.png')} className="img" />
                              </div> 
                         </div> 
                         <div className="meio">
                              <div className="colunas2">
                                   <div className="col1">
                                        <div className="lin1">
                                             <label>Como funciona</label>
                                        </div>
                                        <div className="lin2">
                                              <p>A vizinha não tem tempo de passear com o cachorrinho dela? Então ela cria uma vaga na categoria "Pets" e aguarda a pessoa certa aparecer!</p>
                                              <p>Precisou de um marceneiro, mas não tem algum de confiança?
                                                 Na categoria "Construção" você encontra diversos trabalhadores,
                                                 podendo ver as avaliações de serviços anteriores,
                                                 comentários e valor cobrado.</p>
                                        </div>
                                   </div>
                                   <div className="col2">
                                        <img src ={require('../../imagem/tela2.png')} />     
                                   </div>
                              </div>
                              <div className="al2">
                                   <div className="colunas2">
                                        <div className="col2">
                                             <img src ={require('../../imagem/tela3.png')} />                                            
                                        </div>
                                        <div className="col1"> 
                                             <div className="lin1">
                                                  <label>Estamos aqui para ajudar você a achar o serviço ideal</label>
                                             </div>
                                             <div className="lin2">
                                                  <p>De pessoa física a jurídica, todos podem criar vagas nos mais variados setores, de forma prática e eficaz.</p>
                                                  
                                             </div>    
                                        </div>
                                   </div> 
                              </div>         
                         </div> 
                         <div className="fim">
                              <div className="colunas3">
                                   <div className="cardSobre">
                                        <div className="lin1">
                                             <img src ={require('../../imagem/bolasobre1.png')} style={{width:'70%'}} />
                                        </div>
                                        <div className="lin2">
                                             <label>Transparência</label>   
                                        </div>
                                        <div className="lin3">
                                             <label>Nossa plataforma está aqui para facilitar o encontro de um trabalhador com o serviço informal de forma simples e sem segredos</label>   
                                        </div>
                                   </div>         
                                   <div className="cardSobre">
                                        <div className="lin1">
                                        <img src ={require('../../imagem/bolasobre2.png')} style={{width:'70%'}} />
                                        </div>
                                        <div className="lin2">
                                             <label>Variedade</label>   
                                        </div>
                                        <div className="lin3">
                                             <label>No Freelas você encontrará vagas em mais de 50 categorias, tudo bem organizadinho </label>   
                                        </div>
                                   </div> 
                                   <div className="cardSobre">
                                        <div className="lin1">
                                             <img src ={require('../../imagem/bolasobre3.png')} style={{width:'70%'}} />
                                        </div>
                                        <div className="lin2">
                                             <label>Avaliações</label>   
                                        </div>
                                        <div className="lin3">
                                             <label>Nosso sistema de avaliação permite que todos se sintam mais seguros ao solicitar um serviço, ou oferecer uma vaga</label>   
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

export default Home;
