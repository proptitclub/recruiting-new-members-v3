import React from 'react';
import { Tooltip } from '@chakra-ui/tooltip';
import cls from 'classnames';

interface IProTooltipProps {
  className?: string;
  trigger: JSX.Element;
  content: JSX.Element;
  placement?: 'left' | 'right' | 'top' | 'bottom';
}

export const ProTooltip: React.FC<IProTooltipProps> = ({
  className,
  trigger,
  content,
  placement = 'bottom',
}) => {
  return (
    <Tooltip
      placement={placement}
      label={content}
      className={cls(
        `w-max rounded-xl bg-white text-gray-500 py-3 px-4 text-sm shadow-xl shadow-shadow-500`,
        className
      )}
    >
      {trigger}
    </Tooltip>
  );
};
