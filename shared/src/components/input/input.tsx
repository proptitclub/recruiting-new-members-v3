import React, { HTMLInputTypeAttribute } from 'react';
import cls from 'classnames';

interface IProInputProps {
  id?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  variant?: 'auth' | 'default';
  state?: 'error' | 'success' | 'default';
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
}

export const ProInput: React.FC<IProInputProps> = ({
  label,
  id,
  className,
  type,
  placeholder,
  variant = 'default',
  state = 'default',
  disabled,
}) => {
  const getStyleByState = () => {
    switch (state) {
      case 'error':
        return 'border-red-500 text-red-500 placeholder:text-red-500';
      case 'success':
        return 'border-green-500 text-green-500 placeholder:text-green-500';
      default:
        return 'border-gray-200';
    }
  };

  const getStyleByDisabled = () => {
    if (disabled) {
      return '!border-none !bg-gray-100';
    } else {
      return getStyleByState();
    }
  };

  return (
    <div className={cls(className)}>
      <label
        htmlFor={id}
        className={`text-sm text-navy-700 dark:text-white ${
          variant === 'auth' ? 'ml-1.5 font-medium' : 'ml-3 font-bold'
        }`}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        type={type}
        id={id}
        placeholder={placeholder}
        className={cls(
          `mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none`,
          getStyleByDisabled()
        )}
      />
    </div>
  );
};
