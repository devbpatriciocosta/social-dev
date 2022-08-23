import styled from "styled-components";
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi'
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import { loginSchema } from "../modules/user/user.schema";

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1";
import H4 from "../src/components/typography/H4";
import H2 from "../src/components/typography/H2";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`
const Text = styled.p`
  text-align: center;
`

function LoginPage () {
  const router = useRouter()
  const { control, handleSubmit, formState: { errors }, setError } = useForm({
    resolver:joiResolver(loginSchema)
  })

  const [loadingButton, setLoadingButton] = useState(false)

  const onSubmit = async (data) => {
    try {
      setLoadingButton(true)
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200) {
        router.push('/')
      }
    } catch ({ response }) {
      if (response.data === 'password incorrect') {
        setError('password', {
          message: 'A senha está incorreta!'
        })
      }
      else if (response.data === 'not found') {
        setError('userOrEmail', {
          message: 'Usuário ou e-mail não encontrado'
        })
      }
    } finally { 
      setLoadingButton(false)
    }
  }

  return (
    
      <ImageWithSpace>
        <H1> # Social Dev </H1>
        <H4> Tudo que acontece no mundo DEV, está aqui! </H4>
        <FormContainer>
          <H2> Entre em sua conta! </H2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input label="E-mail ou usuário" name="userOrEmail" control={control}/>
            <Input label="Senha" type="password" name="password" control={control}/>
            <Button loading={loadingButton} type="submit" disabled={Object.keys(errors).length} > Entrar </Button>
          </Form>
          <Text> Não possui uma conta? <Link href="/signup">Cadastre-se aqui!</Link> </Text>
        </FormContainer>
      </ImageWithSpace>
    
  )
}

export default LoginPage