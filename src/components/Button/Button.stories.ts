import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import {fn, within, userEvent} from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "superapp/Button",
  component: Button,
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: Button,
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  render: Button,
  args: {
    children: "Secondary",
    variant: "secondary",
  }
};

