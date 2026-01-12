import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', isLoading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest font-medium text-xs md:text-sm',
                    {
                        'bg-gold text-white hover:bg-[#9d8463] shadow-md hover:shadow-lg': variant === 'primary',
                        'bg-transparent border border-gold text-gold hover:bg-gold hover:text-white': variant === 'outline',
                        'bg-charcoal text-ivory hover:bg-navy border border-white/10': variant === 'secondary',
                        'bg-transparent text-slate hover:text-gold': variant === 'ghost',
                        'h-10 px-6 py-2': size === 'default',
                        'h-8 px-4 text-xs': size === 'sm',
                        'h-12 px-8 text-sm': size === 'lg',
                    },
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
