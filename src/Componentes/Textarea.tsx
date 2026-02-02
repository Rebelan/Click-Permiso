interface textareaInfo{
    nombreArea: string
}

export const Textarea = ({nombreArea}: textareaInfo) => {
  return (
    <>
        <h3>{nombreArea}</h3>
        <textarea name="" id="">

        </textarea>
    </>
  )
}
