import { useClickOutside } from '../../hooks';
import React from 'react';

interface IProDropdownProps {
  button: JSX.Element;
  children: JSX.Element;
  classNames: string;
  animation?: string;
}

export const ProDropdown: React.FC<IProDropdownProps> = ({
  button,
  children,
  classNames,
  animation,
}) => {
  const wrapperRef = React.useRef(null);
  const [openWrapper, setOpenWrapper] = React.useState(false);
  useClickOutside(wrapperRef, setOpenWrapper);

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : 'origin-top-right transition-all duration-300 ease-in-out'
        } ${openWrapper ? 'scale-100' : 'scale-0'}`}
      >
        {children}
      </div>
    </div>
  );
};
