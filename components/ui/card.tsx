import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'group relative overflow-hidden rounded-sm bg-charcoal border border-white/5 p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5',
                    className
                )}
                {...props}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                <div className="relative z-10">{children}</div>
            </div>
        );
    }
);
Card.displayName = 'Card';

export { Card };
