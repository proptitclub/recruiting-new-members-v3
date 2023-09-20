import React from 'react';
import cls from 'classnames';

interface IProCheckboxProps {
  color?:
    | 'red'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'orange'
    | 'teal'
    | 'navy'
    | 'lime'
    | 'cyan'
    | 'pink'
    | 'purple'
    | 'amber'
    | 'indigo'
    | 'gray'
    | 'default';
  className?: string;
}

export const ProCheckbox: React.FC<IProCheckboxProps> = ({
  className,
  color = 'default',
}) => {
  const getColorCheckbox = () => {
    switch (color) {
      case 'red':
        return 'checked:border-none checked:bg-red-500';
      case 'blue':
        return 'checked:border-none checked:bg-blue-500';
      case 'green':
        return 'checked:border-none checked:bg-green-500';
      case 'yellow':
        return 'checked:border-none checked:bg-yellow-500';
      case 'orange':
        return 'checked:border-none checked:bg-orange-500';
      case 'teal':
        return 'checked:border-none checked:bg-teal-500';
      case 'navy':
        return 'checked:border-none checked:bg-navy-500';
      case 'lime':
        return 'checked:border-none checked:bg-lime-500';
      case 'cyan':
        return 'checked:border-none checked:bg-cyan-500';
      case 'pink':
        return 'checked:border-none checked:bg-pink-500';
      case 'purple':
        return 'checked:border-none checked:bg-purple-500';
      case 'amber':
        return 'checked:border-none checked:bg-amber-500';
      case 'indigo':
        return 'checked:border-none checked:bg-indigo-500';
      case 'gray':
        return 'checked:border-none checked:bg-gray-500';
      default:
        return 'checked:border-none checked:bg-brand-500';
    }
  };

  return (
    <input
      type="checkbox"
      className={cls(
        `defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s] checked:text-white hover:cursor-pointer`,
        getColorCheckbox(),
        className
      )}
    />
  );
};
