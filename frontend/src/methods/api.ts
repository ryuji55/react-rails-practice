import { axiosRegisterPostUrl } from './../constants/url'
import axios from 'axios'

type Props = {
  email: string
  password: string
  passwordConfirmation: string
}

export const axiosRegisterPost = ({
  email,
  password,
  passwordConfirmation,
}: Props): void => {
  axios
    .post(
      axiosRegisterPostUrl,
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
      console.log('registration error', error)
    })
}
