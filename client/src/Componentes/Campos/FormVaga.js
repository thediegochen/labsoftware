import React, {Component} from 'react';
import './estiloCampos.css';
import { mask, unMask } from 'remask';
import axios from 'axios';
import { getCookie } from  '../../auth/auth';
class FormVaga extends Component{
	constructor(props){
		super(props);
		this.state = {
			titulo:'', data:'', valor:'', endereco:'', cep:'', cidade:'', uf:'', descricaoR:'', descricao:'', erro:'Campo(s) não preenchidos!'
		}
		this.Cadastrar = this.Cadastrar.bind(this);
	}
	//Criar uma lista para adcionar os dados em sequencia;
	Cadastrar(e){
    	if(this.state.titulo.length !== 'underfined' && this.state.cidade.length !== 'underfined' ){
            const token = getCookie('jwt');
            const api = 'AIzaSyA9DxfHocg60YoYQqAX2Qu-1tqcQ7EXfLI';
            let address = `${this.state.cep}, ${this.state.cidade}, ${this.state.uf}`;
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: api,
            }
            }).then(res => {
                let newState = this.state;
                newState.lat = res.data.results[0].geometry.location.lat;
                newState.lng = res.data.results[0].geometry.location.lng;
                this.setState(newState);
                console.log(this.state);
                axios.post(`http://localhost:8000/api/vagas`, 
                {
                    'name': this.state.titulo,
                    'dataEnd': this.state.data,
                    'wage': this.state.valor,
                    'address': this.state.endereco,
                    'zipcode': this.state.cep,
                    'location': this.state.cidade,
                    'uf': this.state.uf,
                    'descriptionShort': this.state.descricaoR,
                    'description': this.state.descricao,
                    'lat': this.state.lat,
                    'lng': this.state.lng
                },{
                    headers:{
                        Authorization:`Bearer ${token}`
                }}
                ).then((res) =>{
                    console.log(res.data);
                    window.location = 'http://localhost:3000/minhasvagas'; 
                })
            })
           }else{
                alert(this.state.erro);;
            }  
    }

	render(){
		return(
                <div className="alinharCadastroVaga">
                    <div className="linhas">
                        <input id = "titulo" style={{marginTop:'1%'}} type="text" name="titulo" value={this.state.titulo} onChange={(e) => this.setState({titulo: e.target.value})}  maxLength="45" autoComplete="off" required/>
                        <label className="label-name"><span className="content-name">Titulo Da Vaga (até 45 caracteres)</span></label>
                    </div>
                    <div className="colunas2" style={{marginBottom:'20px'}}>
                        <div className="col1">
                            <input id ="data" type="text" name="data" value={this.state.data} onChange={(e) => this.setState({data: mask(e.target.value, ['99/99/9999'])})} autoComplete="off"  required/>
                            <label className="label-name"><span className="content-name">Data (opcional)</span></label>
                        </div>
                        <div className="col2">
                            <input id = "valor" type="text" name="valor" value={this.state.valor} onChange={(e) => this.setState({valor: mask(unMask(e.target.value), ['99,99', '999,99', '9.999,99', '99.999,99'])})} required />
                            <label className="label-name"><span className="content-name">Valor</span></label>
                        </div>    
                    </div>
                    <div className="colunas2">
                    <div className="col3">
                            <label className="sel">Categoria</label>
                            <select name="TipoVaga" id="TipoVaga">
                                
                            </select>
                        </div>
                    </div>    
                    <div className="linhas">
                        <input id = "endereco" type="text" name="endereco" value={this.state.endereco} onChange={(e) => this.setState({endereco: e.target.value})} autoComplete="off" required/>
                        <label className="label-name"><span className="content-name">Endereço</span></label>
                    </div>
                    <div className="colunas2" style={{marginBottom:'20px'}}>
                        <div className="col1">
                            <input id = "cep" type="text" name="cep" value={this.state.cep} onChange={(e) => this.setState({cep: mask(e.target.value, ['99999-999'])})} required/>
                            <label className="label-name"><span className="content-name">CEP</span></label>
                        </div>  
                        <div className="col2">
                            <input id = "cidade" type="text" name="cidade" value={this.state.cidade} onChange={(e) => this.setState({cidade: e.target.value})} required/>
                            <label className="label-name"><span className="content-name">Cidade</span></label>
                        </div> 
                    </div>
                    <div className="colunas2">
                        <div className="col3">
                            <label className="sel">UF</label>
                            <select name="UF" id="UF" onChange={(e) => this.setState({uf: e.target.value})}>
                                <option value="RO">RO</option>
                                <option value="AC">AC</option>
                                <option value="AM">AM</option>
                                <option value="RR">RR</option>
                                <option value="PA">PA</option>
                                <option value="AP">AP</option>
                                <option value="TO">TO</option>
                                <option value="MA">MA</option>
                                <option value="PI">PI</option>
                                <option value="CE">CE</option>
                                <option value="RN">RN</option>
                                <option value="PB">PB</option>
                                <option value="PE">PE</option>
                                <option value="AL">AL</option>
                                <option value="SE">SE</option>
                                <option value="BA">BA</option>
                                <option value="MG">MG</option>
                                <option value="ES">ES</option>
                                <option value="RJ">RJ</option>
                                <option value="SP">SP</option>
                                <option value="PR">PR</option>
                                <option value="SC">SC</option>
                                <option value="RS">RS</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="GO">GO</option>
                                <option value="DF">DF</option>
                            </select>
                        </div>
                    </div>
                    <div className="linhas">
                        <input id = "descricaoR" type="text" name="descricaoR" value={this.state.descricaoR} onChange={(e) => this.setState({descricaoR: e.target.value})} maxLength="55" minLength="45" required/>
                        <label className="label-name" ><span className="content-name">Descrição Resumida (até 55 caracteres)</span></label> 
                    </div> 
                    <div className="textoDescricao">
                        <label>Descrição Completa</label>
                        <textarea id="descricao" type="text" value={this.state.descricao} onChange={(e) => this.setState({descricao: e.target.value})} required/>  
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
export default FormVaga;