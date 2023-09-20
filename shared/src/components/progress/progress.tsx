import React from 'react';
import cls from 'classnames';

interface IProProgressProps {
  value: number;
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
  width?: string;
}

export const ProProgress: React.FC<IProProgressProps> = ({
  value,
  color = 'default',
  width,
}) => {
  const getColorProgress = () => {
    switch (color) {
      case 'red':
        return 'bg-red-500';
      case 'blue':
        return 'bg-blue-500';
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'orange':
        return 'bg-orange-500';
      case 'teal':
        return 'bg-teal-500';
      case 'navy':
        return 'bg-navy-500';
      case 'lime':
        return 'bg-lime-500';
      case 'cyan':
        return 'bg-cyan-500';
      case 'pink':
        return 'bg-pink-500';
      case 'purple':
        return 'bg-purple-500';
      case 'amber':
        return 'bg-amber-500';
      case 'indigo':
        return 'bg-indigo-500';
      case 'gray':
        return 'bg-gray-500';
      default:
        return 'bg-brand-500';
    }
  };

  return (
    <div
      className={cls(
        'h-2 rounded-full bg-gray-200 dark:bg-navy-700',
        width ? width : 'w-full'
      )}
    >
      <div
        className={cls(
          'flex h-full items-center justify-center rounded-full',
          getColorProgress()
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
