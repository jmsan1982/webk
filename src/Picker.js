import React, {Component} from "react";
import DatePicker,{registerLocale} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import Horarios from "./Horarios";
import es from 'date-fns/locale/es';
registerLocale("es", es);

class Picker extends Component{
    //asigno estados
    state={
        fecha: new Date()
    }

    //funcion para cambiar fecha
    onChange = fecha => {

        this.setState({
            fecha: fecha
        });
    }


    render() {

        return (

            <div>
                <DatePicker
                    selected={this.state.fecha}
                    onChange={this.onChange}
                    locale="es"
                    dateFormat="yyyy-MM-dd"
                />
                <Horarios
                    fecha={this.state.fecha}
                />
            </div>
        );
    }
}

export default Picker;