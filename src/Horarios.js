import React, {Component} from 'react';
import axios from 'axios';

class Horarios extends Component {
    state = {
        fecha: this.props.fecha,
        horarios: [],
        status: null
    }

    componentWillMount() {
        this.getData()
    }

    getData = () => {
        axios.defaults.headers.common["Authorization"] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZENvbXBhbnkiOjF9.PRKLjlVvM7QHIiBL4gxz5HRREunU8gpWmw78oycSLaU";
        //llamada axios
        axios.get("test.services.pixeltiming.com:4400/booking/availability?date=" + this.state.fecha, {
            headers: {
                "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZENvbXBhbnkiOjF9.PRKLjlVvM7QHIiBL4gxz5HRREunU8gpWmw78oycSLaU"
            }
        })
            .then(res => {
                this.setState({
                    //asigno el array de datos al arrat vacio y seteo su estado
                    horarios: res.data,
                    status: 'success'
                })
            })
    }


    render() {
        if (this.state.horarios.length >= 1) {//compruebo si hay horarios y los listo
            let listadoHorarios = this.state.horarios.map((horario) =>{
                return (
                    <div>

                    </div>
                )
            })
            return (
                <div>
                    <h3>No hay horarios para ese dia</h3>
                </div>
            );

        } else if (this.state.horarios.length === 0 && this.state.status === 'success') {//compruebo que hay respuesta pero no hay dia disponible

            return (
                <div>
                    <h3>No hay horarios para ese dia</h3>
                </div>
            );
        } else {
            return (//spiner de carga
                <div>

                </div>
            );
        }

    }

}

export default Horarios;