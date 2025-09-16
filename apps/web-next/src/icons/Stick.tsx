import { CustomClassType } from '@/types/components'

export const StickIcon = ({
  customClass = 'w-full h-full',
}: CustomClassType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 20'
    fill='none'
    className={customClass}
  >
    <path
      d='M23.2536 0.252736C23.8044 0.668905 23.9135 1.4528 23.4973 2.00361L10.7473 18.8786C10.5376 19.1563 10.2215 19.3339 9.87529 19.3688C9.52904 19.4037 9.18393 19.2926 8.92299 19.0624L0.422988 11.5624C-0.094667 11.1056 -0.144037 10.3157 0.312718 9.79804C0.769472 9.28039 1.55939 9.23102 2.07704 9.68777L9.56573 16.2954L21.5027 0.496529C21.9188 -0.0542836 22.7027 -0.163433 23.2536 0.252736Z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill='currentColor'
    />
  </svg>
)
