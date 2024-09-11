// src/stories/ShadcnAccordion.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ShadcnAccordion } from './ShadcnAccordion'

const meta = {
    title: 'Components/ShadcnAccordion',
    component: ShadcnAccordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ShadcnAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
