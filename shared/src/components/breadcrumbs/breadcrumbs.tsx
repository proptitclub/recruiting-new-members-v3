import React from 'react';
import cls from 'classnames';
import Link from 'next/link';

interface IProBreadcrumbsProps {
  className?: string;
}

export const ProBreadcrumbs: React.FC<IProBreadcrumbsProps> = ({
  className,
}) => {
  return (
    <div className={cls(className)}>
      <Link
        className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
        href="#"
      >
        Pages
      </Link>
      <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
        {' '}
        /{' '}
      </span>
      <Link
        className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
        href="#"
      >
        Main Dashboard
      </Link>
    </div>
  );
};
