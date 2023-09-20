import React from 'react';
import cls from 'classnames';

interface IProButtonProps {
  color?:
    | 'default'
    | 'secondary'
    | 'dark'
    | 'blue'
    | 'red'
    | 'green'
    | 'purple'
    | 'yellow'
    | 'orange';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const ProButton: React.FC<IProButtonProps> = ({
  color = 'default',
  variant = 'solid',
  size = 'md',
  iconLeft,
  iconRight,
  className,
  onClick,
  children,
}) => {
  const getColorButtonSolid = () => {
    switch (color) {
      case 'secondary':
        return 'bg-gray-100 text-navy-700 hover:bg-gray-200 active:bg-gray-300';
      case 'dark':
        return 'bg-navy-700 text-white hover:bg-navy-800 active:bg-navy-900';
      case 'blue':
        return 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700';
      case 'red':
        return 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700';
      case 'green':
        return 'bg-green-500 text-white hover:bg-green-600 active:bg-green-700';
      case 'purple':
        return 'bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700';
      case 'yellow':
        return 'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700';
      case 'orange':
        return 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700';
      default:
        return 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700';
    }
  };

  const getColorButtonOutline = () => {
    switch (color) {
      case 'secondary':
        return 'border-2 border-gray-300 text-navy-700 hover:bg-gray-200/10 active:bg-gray-300/10';
      case 'dark':
        return 'border-2 border-navy-700 text-navy-700 hover:bg-navy-800/5 active:bg-navy-900/5';
      case 'blue':
        return 'border-2 border-blue-500 text-blue-500 hover:bg-blue-600/5 active:bg-blue-700/5';
      case 'red':
        return 'border-2 border-red-500 text-red-500 hover:bg-red-600/5 active:bg-red-700/5';
      case 'green':
        return 'border-2 border-green-500 text-green-500 hover:bg-green-600/5 active:bg-green-700/5';
      case 'purple':
        return 'border-2 border-purple-500 text-purple-500 hover:bg-purple-600/5 active:bg-purple-700/5';
      case 'yellow':
        return 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-600/5 active:bg-yellow-700/5';
      case 'orange':
        return 'border-2 border-orange-500 text-orange-500 hover:bg-orange-600/5 active:bg-orange-700/5';
      default:
        return 'border-2 border-brand-500 text-brand-500 hover:bg-brand-600/5 active:bg-brand-700/5';
    }
  };

  const getColorButtonGhost = () => {
    switch (color) {
      case 'secondary':
        return 'text-navy-700 hover:bg-gray-200/10 active:bg-gray-300/10';
      case 'dark':
        return 'text-navy-700 hover:bg-navy-800/5 active:bg-navy-900/5';
      case 'blue':
        return 'text-blue-500 hover:bg-blue-600/5 active:bg-blue-700/5';
      case 'red':
        return 'text-red-500 hover:bg-red-600/5 active:bg-red-700/5';
      case 'green':
        return 'text-green-500 hover:bg-green-600/5 active:bg-green-700/5';
      case 'purple':
        return 'text-purple-500 hover:bg-purple-600/5 active:bg-purple-700/5';
      case 'yellow':
        return 'text-yellow-500 hover:bg-yellow-600/5 active:bg-yellow-700/5';
      case 'orange':
        return 'text-orange-500 hover:bg-orange-600/5 active:bg-orange-700/5';
      default:
        return 'text-brand-500 hover:bg-brand-600/5 active:bg-brand-700/5';
    }
  };

  const getColorButtonLink = () => {
    switch (color) {
      case 'secondary':
        return 'text-navy-700 hover:underline active:underline';
      case 'dark':
        return 'text-navy-700 hover:underline active:underline';
      case 'blue':
        return 'text-blue-500 hover:underline active:underline';
      case 'red':
        return 'text-red-500 hover:underline active:underline';
      case 'green':
        return 'text-green-500 hover:underline active:underline';
      case 'purple':
        return 'text-purple-500 hover:underline active:underline';
      case 'yellow':
        return 'text-yellow-500 hover:underline active:underline';
      case 'orange':
        return 'text-orange-500 hover:underline active:underline';
      default:
        return 'text-brand-500 hover:underline active:underline';
    }
  };

  const getVariantButton = () => {
    switch (variant) {
      case 'outline':
        return getColorButtonOutline();
      case 'ghost':
        return getColorButtonGhost();
      case 'link':
        return getColorButtonLink();
      default:
        return getColorButtonSolid();
    }
  };

  const getSizeButton = () => {
    switch (size) {
      case 'xs':
        return 'rounded-lg p-2 text-xs';
      case 'sm':
        return 'rounded-lg px-3 py-2.5 text-sm';
      case 'lg':
        return 'rounded-xl px-5 py-4 text-lg';
      case 'xl':
        return 'rounded-xl px-10 py-8 text-xl';
      default:
        return 'rounded-xl px-4 py-3 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      className={cls(
        getVariantButton(),
        getSizeButton(),
        'linear flex flex-row items-center font-medium transition duration-200',
        className
      )}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};
