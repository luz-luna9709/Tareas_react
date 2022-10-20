import { useState } from "react"

const AddTarea = () => {

    const [texto,setTexto] = useState('')
    const [fecha,setFecha] = useState('')
    const [terminada,setTerminada] = useState(false)
    
    const onSubmit =(e) => {
        e.preventDefault()

        if(!texto){
            alert('Por favor ingresa una descripcion para esta tarea')
            return
        }
        
    
      if(!fecha){
        alert('Por favor ingresa una fecha para esta tarea')
        return
      }
         
    }
    
  return (
    <form  className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
    <label>Tarea:</label>
    <input type="text" placeholder='Descripcion' 
      value={texto} 
      onChange={(e) => setTexto(e.target.value)}
      />
        
        </div>
        <div className='form-control'>
       <label>Fecha:</label>
       <input type="text" placeholder='Fecha' 
          value={fecha} 
         onChange={(e) => setFecha(e.target.value)}
      />
        </div>
        <div className='form-control  form-control-check'>
       <label>Terminada:</label>
       <input 
         type="checkbox" 
         checked={terminada}
         value={terminada}
         onChange={(e) => setTerminada(e.currentTarget.checked)}
       />
        </div>
        <input type="submit" value ='Agregar Tarea' className='btn btn-block'/>

    </form>
  )
}

export default AddTarea