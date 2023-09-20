import React from 'react';
import cls from 'classnames';

interface IProAvatarProps {
  src: string;
  variant?: 'circle' | 'square';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
}

export const ProAvatar: React.FC<IProAvatarProps> = ({
  src,
  variant = 'circle',
  size = 'sm',
  className,
}) => {
  const getSizeAvatar = () => {
    switch (size) {
      case 'sm':
        return 'h-12 w-12';
      case 'md':
        return 'h-14 w-14';
      case 'lg':
        return 'h-16 w-16';
      case 'xl':
        return 'h-20 w-20';
      case '2xl':
        return 'h-24 w-24';
      default:
        return 'h-28 w-28';
    }
  };

  const getVariantAvatar = () => {
    switch (variant) {
      case 'square':
        return 'rounded-xl';
      default:
        return 'rounded-full';
    }
  };

  return (
    <img
      src={src}
      className={cls(
        getVariantAvatar(),
        getSizeAvatar(),
        'object-cover',
        className
      )}
      alt="avatar"
    />
  );
};
