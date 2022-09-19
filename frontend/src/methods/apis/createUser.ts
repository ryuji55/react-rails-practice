import axios from 'axios'
import { createUserUrl } from '../../constants/url'

type Props = {
  email: string
  password: string
  passwordConfirmation: string
}

export const createUser = ({
  email,
  password,
  passwordConfirmation,
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
      console.log('registration res', response)
    })
    .catch((error) => {
      console.error('registration error', error)
    })
}
