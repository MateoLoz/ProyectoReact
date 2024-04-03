import '../navbar.css'
import React from 'react'

export function Form(){
    return(
        <form for="">
  <article className='card-form'>
    <header className='tittle'>
     Inicio Sesion
    </header>
    <main className='card-body'>
     <label htmlFor="name">
        name
     </label>
     <input type="text" placeholder='nombre' id='name'/>
     <label htmlFor="password">
        Contrasena
     </label>
     <input type="password" placeholder='password' id='password' />
    </main>
    <footer className='Sesion-button'>
        <input type="submit" value={"iniciar Sesion"} className='button'/>
    </footer>
    <aside className='links'>
        <a href="" className='sesion-links'><h5>Registro</h5></a>
        <a href="" className='sesion-links'><h5>Olvido su contrasena?</h5></a>
    </aside>
  </article>
</form>
    )
}
export default Form