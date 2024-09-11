import type { Meta, StoryObj } from '@storybook/react';
import { ShadcnButton } from './ShadcnButton';

const meta = {
    title: 'Components/ShadcnButton',
    component: ShadcnButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
            description: 'Select the button variant',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
            description: 'Select the button size',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the button',
        },
        children: {
            control: 'text',
            description: 'Button label',
        },
    },
} satisfies Meta<typeof ShadcnButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
        children: 'Default Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        size: 'default',
        children: 'Destructive Button',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'default',
        children: 'Outline Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'default',
        children: 'Secondary Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'default',
        children: 'Ghost Button',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        size: 'default',
        children: 'Link Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
};

export const Icon: Story = {
    args: {
        size: 'icon',
        children: '🔍', // Example icon, replace with your icon component or emoji
    },
};

export const Disabled: Story = {
    args: {
        variant: 'default',
        size: 'default',
        disabled: true,
        children: 'Disabled Button',
    },
};
