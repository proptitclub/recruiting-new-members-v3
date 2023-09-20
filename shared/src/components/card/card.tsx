import React from 'react';
import cls from 'classnames';

interface IProCardProps {
  className?: string;
  children?: React.ReactNode;
}

export const ProCard: React.FC<IProCardProps> = ({ className, children }) => {
  return (
    <div
      className={cls(
        '!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500',
        className
      )}
    >
      {children}
    </div>
  );
};
