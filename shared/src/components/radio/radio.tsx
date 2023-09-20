import React from 'react';
import cls from 'classnames';

interface IProRadioProps {
  className?: string;
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
  id: string;
  [x: string]: any;
}

export const ProRadio: React.FC<IProRadioProps> = ({
  color,
  id,
  name,
  ...rest
}) => {
  const getColorRadio = () => {
    switch (color) {
      case 'red':
        return 'checked:!border-red-500 checked:before:!bg-red-500';
      case 'blue':
        return 'checked:!border-blue-500 checked:before:!bg-blue-500';
      case 'green':
        return 'checked:!border-green-500 checked:before:!bg-green-500';
      case 'yellow':
        return 'checked:!border-yellow-500 checked:before:!bg-yellow-500';
      case 'orange':
        return 'checked:!border-orange-500 checked:before:!bg-orange-500';
      case 'teal':
        return 'checked:!border-teal-500 checked:before:!bg-teal-500';
      case 'navy':
        return 'checked:!border-navy-500 checked:before:!bg-navy-500';
      case 'lime':
        return 'checked:!border-lime-500 checked:before:!bg-lime-500';
      case 'cyan':
        return 'checked:!border-cyan-500 checked:before:!bg-cyan-500';
      case 'pink':
        return 'checked:!border-pink-500 checked:before:!bg-pink-500';
      case 'purple':
        return 'checked:!border-purple-500 checked:before:!bg-purple-500';
      case 'amber':
        return 'checked:!border-amber-500 checked:before:!bg-amber-500';
      case 'indigo':
        return 'checked:!border-indigo-500 checked:before:!bg-indigo-500';
      case 'gray':
        return 'checked:!border-gray-500 checked:before:!bg-gray-500';
      default:
        return 'checked:!border-brand-500 checked:before:!bg-brand-500';
    }
  };

  return (
    <input
      id={id}
      name={name}
      type="radio"
      className={cls(
        `before:contet[""] relative h-5 w-5 cursor-pointer appearance-none rounded-full
         border !border-gray-300 transition-all duration-[0.2s] before:absolute before:top-[3px]
         before:left-[50%] before:h-3 before:w-3 before:translate-x-[-50%] before:rounded-full before:transition-all before:duration-[0.2s]`,
        getColorRadio()
      )}
      {...rest}
    />
  );
};
