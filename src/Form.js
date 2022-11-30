import './Form.css';


const Form = ({user, handleChange, handleSubmit, sucess, error}) =>{
    const disabled = !(user.nombre && user.mail && user.mensaje)
    return(
        <div><h1 className="titulouno">YesCan</h1>
            <form className="forminicio" onSubmit={handleSubmit}>
           <label className='nombrelabel' htmlFor="nombre">Nombre:</label>
                <input className="inputs" value={user.nombre}  onChange={handleChange} name="nombre" type="text" placeholder="Juan"/><br/>
                <label  className='nombrelabel' htmlFor="mail">email</label>
                <input className="inputs" value={user.email} onChange={handleChange} name="mail" type="email" placeholder="jperez@mail.com"/><br/>
                <label  className='nombrelabel' htmlFor="mensaje">mensaje</label>
                <textarea className="inputs" value={user.mensaje} onChange={handleChange} name="mensaje" placeholder="Deja tu mensaje..."/>
                <input className='botons' disabled={disabled} type="submit"/>
            </form>
            {sucess && <p>Mensaje enviado correctamente!</p>}
            {error && <p>Ocurrio un error al intentar enviar el mensaje!</p>}

        </div>
    )
}

export default Form;