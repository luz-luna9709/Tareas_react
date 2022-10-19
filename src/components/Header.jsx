import Button from './Button'
const Header = () => {
       const agregar = () => {
        console.log('agregar')
       }
       const borrar = () => {
        console.log('borrar')
       }
  return (
    <header className='header'>
        <h1>Tareas</h1>
       <Button texto='Agregar' color='green' onClick={agregar}></Button>
       <Button texto='Borrar' color='green' onClick={borrar}></Button>
    </header>
  )
}

export default Header