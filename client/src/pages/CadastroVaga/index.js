import React, { Component } from 'react';
import './estiloCadastroVaga.css';
import FormVaga from '../../Componentes/Campos/FormVaga';
import HeaderEmpregador3 from '../../Componentes/Header/HeaderEmpregador3.js'
import { Link } from 'react-router-dom';
class CadastroVaga extends Component{
    render(){
        return(
            <div>  
                <HeaderEmpregador3 />
                <div className="alinhamentoCadastroVaga">
                    <div className="titulo">
                        Cadastre sua vaga!
                    </div>
                    <div className="cardCadastroVaga">
                        <div className="superiorCadastroVaga">
                            <FormVaga />
                        </div>
                        <div className="inferiorCadastroVaga">
                            <label><Link to="/minhasvagas" style={{ textDecoration: 'none' }}>Voltar</Link></label>                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CadastroVaga;