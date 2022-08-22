import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import ControlledTextarea from "../inputs/ControlledTextArea";
import { createPostSchema } from "../../../modules/post/post.schema";
import Button from "../inputs/Button";

const EditPost = ({ id, text }) => {

  const { control, handleSubmit, formState: { isValid } } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })

  const handleSaveEdit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSaveEdit)}>
      <ControlledTextarea 
        placeholder="Digite sua mensagem" 
        rows="4" 
        control={control}
        name="text"
        maxLength="256"
        defaultValue={text}
        />
        <Button disabled={!isValid}>Salvar alterações</Button>
    </form>
  )
}

export default EditPost