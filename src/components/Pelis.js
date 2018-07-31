import React from 'react';
const fr= new FileReader();
class Pelis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descripcion:'',
      seleccion:'',
      url:''
    };
    this.fileInput = React.createRef();
    this.cambiar = this.cambiar.bind(this);
    this.descripcionCambiar=this.descripcionCambiar.bind(this);
    this.seleccionCambio=this.seleccionCambio.bind(this);
    this.cargarfoto=this.cargarfoto.bind(this);
    this.cambiarsrc=this.cambiarsrc.bind(this);
  }
  cambiar(event){
    this.setState({name: event.target.value.toUpperCase()});
  }
  descripcionCambiar(event){
    this.setState({descripcion:event.target.value});
  }
  seleccionCambio(event){
    this.setState({seleccion:event.target.value});
  }
  cargarfoto(event){
    event.preventDefault();
    fr.addEventListener('load',this.cambiarsrc);
    fr.readAsDataURL(this.fileInput.current.files[0])
  }
  cambiarsrc(){
    this.setState({url:fr.result});
  }
  render(){

    return (
      <form className="form">
        <label className="label" htmlFor="name">Nombre:</label>
        <input id="name" type="text" value={this.state.name}   onChange={this.cambiar} />
        <label className="label">Descripción:</label>
        <textarea className="label" value={this.state.descripcion} onChange={this.descripcionCambiar} name="descripcion"></textarea>
        <select className="label" onChange={this.seleccionCambio} value={this.state.seleccion}>
          <option selected hidden>Seleccionar género</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Infantil">Infantil</option>
        </select>
        <input  className="boton1" type="file" name="" id="" ref={this.fileInput} />
        <input type="submit" name="" id="" onClick={this.cargarfoto}/>
        <img className="photo" src={this.state.url} alt=""/>

      </form>
    );
  }
}

export default Pelis;
