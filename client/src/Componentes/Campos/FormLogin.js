import React, {Component} from 'react';
import './estiloCampos.css';
import '../../auth/auth';
import axios from 'axios';
import { setCookie } from '../../auth/auth';
class FormLogin extends Component{
	constructor(props){
		super(props);
		this.state = {
			email:'', senha:'', 'info':[]
        }
        this.Cadastrar = this.Cadastrar.bind(this);
    }
    Cadastrar(e){
        axios.post('http://localhost:8000/api/users/entrar', {email: this.state.email, password: this.state.senha}).then(res => {
            console.log(res.data);
            setCookie('jwt',res.data.token);
            let newState = this.state;
            newState.info = res.data.data.user; 
            this.setState(newState);
        }).then((res) => {
            setCookie('role', this.state.info.role);
            setCookie('email', this.state.info.email);
            if(this.state.info.role === 'empregador' || this.state.info.role === 'empregado'){
                window.location = 'http://localhost:3000/vagas';  
            }   
        });
    }
    render(){
		return(
            <div className="alinharCampoLogin">
                {this.state.erro && <p>{this.state.erro}</p>}
                <div className="lin1">
                    <input id = "emailLogin" type="email" name="emailLogin" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required/>
                    <label className="label-name"><span className="content-name">E-mail</span></label>
                </div>
                <div className="lin2">
                    <input id = "senhaLogin" type="password" name="senhaLogin" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} autoComplete="off" required/>
                    <label className="label-name"><span className="content-name">Senha</span></label>
                </div>
                <div className="colunas2">
                        <div className="col1">
                            <input type="checkbox"/> 
                            <label> Mantenha-se conectado</label>
                        </div>
                        <div className="col2">
                            <label>Esqueceu a senha?</label>                           
                        </div>
                </div>
                <div className="linhas">
                    <div className="alinharBotao">
                        <button className="botaoCadastro" onClick= {this.Cadastrar}>Entrar</button>
                    </div>    
                </div>    
            </div>
        );
    }    
}
export default FormLogin        