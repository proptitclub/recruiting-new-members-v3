import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/popover';
import cls from 'classnames';

interface IProPopoverProps {
  trigger: JSX.Element;
  className?: string;
  content: JSX.Element;
}

export const ProPopover: React.FC<IProPopoverProps> = ({
  className,
  trigger,
  content,
}) => {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cls(
          'w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500',
          className
        )}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};
