import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useState } from "react";

import ControlledTextarea from "../inputs/ControlledTextarea";
import { createPostSchema } from "../../../modules/post/post.schema";
import Button from "../inputs/Button";

const EditPost = ({ id, text, onSave }) => {

  const { control, handleSubmit, formState: { isValid } } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })

  const [loadingButton, setLoadingButton] = useState(false)

  const handleSaveEdit = async (data) => {
    try{
      setLoadingButton(true)
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        id, 
        text: data.text
      })
      if (response.status === 200) {
        onSave()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingButton(false)
    }
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
        <Button loading={loadingButton} disabled={!isValid}>Salvar alterações</Button>
    </form>
  )
}

export default EditPost