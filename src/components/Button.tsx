import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-gradient-to-r from-gold to-goldLight text-background hover:opacity-90',
      secondary: 'bg-charcoal text-warmWhite hover:bg-charcoal/80',
      outline: 'border border-gold text-gold hover:bg-gold/10',
    }

    const sizes = {
      sm: 'px-6 py-3 text-xs tracking-widest',
      md: 'px-8 py-4 text-sm tracking-widest',
      lg: 'px-10 py-5 text-base tracking-widest',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'magnetic-button uppercase font-medium transition-all duration-300 rounded-sm',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
