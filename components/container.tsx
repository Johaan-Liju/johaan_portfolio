import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ className, as: Component = 'section', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('py-20 px-4', className)}
        {...props}
      >
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </Component>
    );
  }
);

Container.displayName = 'Container';
