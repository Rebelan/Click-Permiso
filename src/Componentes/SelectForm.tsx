
interface selectInfo{
    opcion: Array<String>,
    nombreForm: string
}

export const SelectForm = ({opcion, nombreForm}: selectInfo) => {
  return (
    <>
        <h3>{nombreForm}</h3>
        <select name="" id="">
            {
                opcion.map((op) =>{
                    return <option value="">{op.toString()}</option>
                })
            }
        
        </select>
    </>
  )
}
