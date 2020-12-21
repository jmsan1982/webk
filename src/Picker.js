import React, {Component} from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

class Picker extends Component{
    state={
        fecha: new Date("2020", "11", "21")
    }

    onChange = fecha => {
        this.setState({fecha: fecha});
    }

    mostrarFecha = fecha =>{
        alert(fecha)
    }

    render() {
        return (
            <div>
                <DatePicker selected={this.state.fecha} onChange={this.onChange}/>
                <input type="button" value="fecha" onClick={()=>this.mostrarFecha(this.state.fecha)}/>
            </div>
        );
    }
}

export default Picker;