import { CustomClassType } from '@/types/components'

export const SavedIcon = ({
  customClass = 'w-full h-full',
}: CustomClassType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='none'
    className={customClass}
  >
    <path
      d='M14.6608 2.76838C15.5775 2.87505 16.25 3.66588 16.25 4.58922V17.5L10 14.375L3.75 17.5V4.58922C3.75 3.66588 4.42167 2.87505 5.33917 2.76838C8.43599 2.40891 11.564 2.40891 14.6608 2.76838Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
