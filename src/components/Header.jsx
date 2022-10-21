import Button from './Button'
const Header = ({onAdd,mostrarForm}) => {

  return (
    <header className='header'>
        <h1>Tareas</h1>
       <Button texto={mostrarForm ? 'Cerrar': 'Agregar' } color={mostrarForm ? 'red' : 'green'} onClick={onAdd}></Button>
    
    </header>
  )
}

export default Header