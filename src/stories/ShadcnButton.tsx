import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

export function ShadcnButton({ variant, size, ...props }: ButtonProps) {
    return (
        <Button variant={variant} size={size} {...props}>
            {props.children || 'Button example'}
        </Button>
    );
}
