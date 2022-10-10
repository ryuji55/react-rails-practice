import axios from 'axios'
import { createUserUrl } from '../../constants/url'

type Props = {
  email: string
  password: string
  passwordConfirmation: string
  handleSuccessfulAuthentication: (data: any) => void
}

export const createUser = ({
  email,
  password,
  passwordConfirmation,
  handleSuccessfulAuthentication,
}: Props): void => {
  axios
    .post(
      createUserUrl,
      {
        user: {
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
      },
      { withCredentials: true },
    )
    .then((response) => {
      if (response.data.status === 'created') {
        handleSuccessfulAuthentication(response.data)
      }
      console.log('registration res', response)
    })
    .catch((error) => {
      console.error('registration error', error)
    })
}
