import React from 'react';
import cls from 'classnames';

interface IProSwitchProps {
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
  [x: string]: any;
}

export const ProSwitch: React.FC<IProSwitchProps> = ({
  className,
  color = 'default',
  ...rest
}) => {
  const getColorSwitch = () => {
    switch (color) {
      case 'red':
        return 'checked:bg-red-500';
      case 'blue':
        return 'checked:bg-blue-500';
      case 'green':
        return 'checked:bg-green-500';
      case 'yellow':
        return 'checked:bg-yellow-500';
      case 'orange':
        return 'checked:bg-orange-500';
      case 'teal':
        return 'checked:bg-teal-500';
      case 'navy':
        return 'checked:bg-navy-500';
      case 'lime':
        return 'checked:bg-lime-500';
      case 'cyan':
        return 'checked:bg-cyan-500';
      case 'pink':
        return 'checked:bg-pink-500';
      case 'purple':
        return 'checked:bg-purple-500';
      case 'amber':
        return 'checked:bg-amber-500';
      case 'indigo':
        return 'checked:bg-indigo-500';
      case 'gray':
        return 'checked:bg-gray-500';
      default:
        return 'checked:bg-brand-500';
    }
  };

  return (
    <input
      type="checkbox"
      className={cls(
        `relative h-5 w-10 appearance-none rounded-[20px] bg-[#e0e5f2] outline-none transition duration-[0.5s] 
        before:absolute before:top-[50%] before:h-4 before:w-4 before:translate-x-[2px] before:translate-y-[-50%] before:rounded-[20px]
        before:bg-white before:shadow-[0_2px_5px_rgba(0,_0,_0,_.2)] before:transition before:content-[""]
        checked:before:translate-x-[22px] hover:cursor-pointer`,
        getColorSwitch()
      )}
      name="weekly"
      {...rest}
    />
  );
};
