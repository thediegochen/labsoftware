import React, { Component } from 'react';
import './estiloFooter.css';

class Rodape extends Component{
    render(){
    	return(
    		  <div className="fundoFooter">
				<div className="footerSuperior">
					<div className="col1">
						<label>Contato</label>
						<div className="conteudoContato">
							<div className="colunas2">
								<div className="col1">
								<img src ={require('../../imagem/Telefone.png')} style={{maxWidth: '40px', maxHeight: '40px'}}/>
								</div>
								<div className="col2" style={{marginTop:'8px'}}>
									<label>(11) 97261-2352</label>
								</div>
							</div>
							<div className="colunas2">
								<div className="col1">
								<img src ={require('../../imagem/Telefone.png')} style={{maxWidth: '40px', maxHeight: '40px', marginTop: "-3px"}}/>
								</div>
								<div className="col2" style={{marginTop:'5px'}}>
									<label >São Paulo, SP</label>
								</div>
							</div>
							<div className="colunas2">
								<div className="col1">
								<img src ={require('../../imagem/email.png')} style={{maxWidth: '40px', maxHeight: '40px', marginTop: "3px"}}/>
								</div>
								<div className="col2">
									<label>email@gmail.como</label>
								</div>
							</div>
						</div>
					</div>
					<div className="col2">
						<label>Nossa empresa</label>
						<div className="conteudoEmpresa">
							<div className="linhas">
								<label>Sobre</label>
							</div>
							<div className="linhas" style={{marginTop:'17px'}}>
								<label>Serviço</label>
							</div>
						</div>
					</div>
					<div className="col3">
						<label>Redes sociais</label>
						<div className="conteudoRedes">
							<div className="linhas">
								<label>Facebook</label>
							</div>
							<div className="linhas" style={{marginTop:'17px'}}>
								<label>Instagram</label>
							</div>
						</div>
					</div>
					<div className="col4">
						<label>Endereço</label><br/>
						<div className="conteudoRedes">
							<div className="linhas">
								<label>Av. Paulista, 2000 - São Paulo</label>
							</div>	
							<div className="linhas" style={{fontSize:'16px', marginTop:'12px'}}>
								<label>Segue a gente!</label>
							</div>
							<div className="colunas2">
								<div className="col1">
									<img src ={require('../../imagem/facebook1.png')} style={{maxWidth: '40px', maxHeight: '40px', marginTop: "3px", marginLeft:'10px'}}/>
								</div>
								<div className="col2">
									<img src ={require('../../imagem/instagram1.png')} style={{maxWidth: '40px', maxHeight: '40px', marginTop: "3px", marginLeft:'-70px'}}/>
								</div>	
							</div>
						</div>
					</div>
				</div>
				<div className="footerInferior" >
					<div className="col1">
						<img src ={require('../../imagem/imagem_esquerda.png')}style={{marginTop:'7%'}}/>
					</div>
					<div className="col2">
						<img src ={require('../../imagem/imagem_direita.png')} style={{height:'110%'}}/>
					</div>		
				</div>    		    
              </div>
    		);
    }

}

export default Rodape;