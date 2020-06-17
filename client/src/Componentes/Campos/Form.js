import React, {Component} from 'react';
import './estiloCampos.css';
import { mask, unMask } from 'remask';
import axios from 'axios';
class Form extends Component{
	constructor(props){
		super(props);
		this.state = {
			nome:'', cpf:'', telefone:'', email:'', senha:'', confirmarsenha:''
		}
		this.Cadastrar = this.Cadastrar.bind(this);
	}
	//Criar uma lista para adcionar os dados em sequencia;
	Cadastrar(e){
        axios.post('http://localhost:8000/api/users/cadastrar', {
            'name': this.state.nome, 
            'email': this.state.email,
            'identifier': this.state.cpf,
            'telephone': this.state.telefone,
            'password': this.state.senha,
            'passwordConfirm': this.state.confirmarsenha,
            'role': 'empregado'
        }).then((res) => {
            window.location = 'http://localhost:3000/login';       
        });
    }
    	     
	render(){
		return(
                <div className="alinharEmpregado">
                    <div className="linhas">
                        <input id = "nome" type="text" name="nome" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} autoComplete="off" required/>
                        <label className="label-name"><span className="content-name">Nome Completo</span></label>
                    </div>
                    <div className="colunas2">
                        <div className="col1">
                            <input id ="cpf" type="text" name="cpf" value={this.state.cpf} onChange={(e) => this.setState({cpf: mask(e.target.value, ['999.999.999-99'])})} autoComplete="off"  required/>
                            <label className="label-name"><span className="content-name">CPF</span></label>
                        </div>
                        <div className="col2">
                            <input id = "telefone" type="text" name="telefone" value={this.state.telefone} onChange={(e) => this.setState({telefone: mask(unMask(e.target.value), ['(99)9999-9999', '(99)99999-9999'])})} required />
                            <label className="label-name"><span className="content-name">Telefone</span></label>
                        </div>    
                    </div>
                    <div className="linhas">
                        <input id = "email" type="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required/>
                        <label className="label-name"><span className="content-name">E-mail</span></label>
                    </div>
                    <div className="colunas2">
                        <div className="col1">
                            <input id = "senha" type="password" name="senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} required/>
                            <label className="label-name"><span className="content-name">Senha</span></label>
                        </div>
                        <div className="col2">
                            <input id = "confirmarsenha" type="password" name="confirmarsenha" value={this.state.confirmarsenha} onChange={(e) => this.setState({confirmarsenha: e.target.value})} required/>
                            <label className="label-name" ><span className="content-name">Confirmar Senha</span></label> 
                        </div>    
                    </div>
                    <div className="linhas">
                        <div className="alinharBotao">
                            <button className="botaoCadastro" onClick= {this.Cadastrar}>Cadastrar</button>
                        </div>    
                    </div>    
                </div>
        );
    }     
}    

export default Form;