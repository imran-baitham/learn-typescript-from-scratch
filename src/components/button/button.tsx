import { classNames } from '../../utils/string'
import { overrideTailwindClasses } from 'tailwind-override'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  xs?: boolean
  sm?: boolean
  lg?: boolean
  xl?: boolean
  transparent?: boolean
  danger?: boolean
  full?: boolean
}

/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
export const Button = ({
  children,
  className = '',
  xs = false,
  sm = false,
  lg = false,
  xl = false,
  transparent = false,
  danger = false,
  full = false,
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && 'cursor-not-allowed opacity-50'
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          'cursor-pointer px-3 py-2',
          'inline-flex items-center border border-transparent',
          'text-sm font-medium rounded-md shadow-sm ',
          'focus:outline-none focus:ring-2',
          'focus:ring-offset-2 focus:ring-blue-500',
          'flex justify-center',
          full ? 'w-full' : '',
          xs ? 'px-2.5 py-1.5 text-xs rounded' : '',
          sm ? 'px-3 py-2 leading-4 rounded-md' : '',
          lg ? 'px-4 py-2 text-base' : '',
          xl ? 'px-6 py-3 text-base' : '',
          transparent
            ? 'border-gray-300 text-gray-700 bg-white' +
                ' hover:bg-gray-50 ripple-on-surface'
            : 'bg-blue-600 text-white',
          danger ? 'bg-red-500 text-white' : '',
          transparent && danger
            ? 'bg-white-700 border-red-500 text-red-500'
            : '',
          isDisabled ? isDisabled : '',
          className,
        ),
      )}
      {...props}
    >
      {children}
    </button>
  )
}
