import { UserModel } from '@/types'

import { MOCK_IMAGE } from './image'

export const MOCK_USER: UserModel = {
  username: 'thanghq',
  email: 'thanghq@gmail.com',
  image: MOCK_IMAGE,
  cartItems: [
    {
      id: 3,
      size: 'large',
      quantity: 2,
    },
    {
      id: 4,
      size: 'small',
      quantity: 2,
    },
    {
      id: 5,
      size: 'medium',
      quantity: 3,
    },
  ],
}
