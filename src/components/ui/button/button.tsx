import React from 'react'
import cx from 'classnames'
import Spinner from '../Spinner'
import './button.css'

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'danger' | 'warning' | 'outline';
  full?: boolean
  loadingColor?: string
  className?: string
  loading?: boolean
}

const Button: React.FC<ButtonProps &
  React.HTMLProps<HTMLButtonElement>> =
  ({
     type,
     className = null,
     loadingColor,
     full,
     loading,
     children
   }): React.ReactElement => {
    return (
      <button
        className={cx('app-button', className, {
          primary: type === 'primary',
          secondary: type === 'secondary',
          danger: type === 'danger',
          warning: type === 'warning',
          outline: type === 'outline',
          'app-button-loading': loading,
          full: full
        })}
      >
        {children}
        {loading && <>&nbsp;&nbsp;
          <Spinner size={20} color={loadingColor || '#fff'} width={3}/></>
        }
      </button>
    )
  }

export default Button