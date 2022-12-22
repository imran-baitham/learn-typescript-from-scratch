import { Story, Meta } from '@storybook/react';
import { GenericLoader } from './GenericLoader';

export default {
  component: GenericLoader,
  title: 'GenericLoader',
} as Meta;

const Template: Story = (args) => <GenericLoader />;

export const Primary = Template.bind({});
Primary.args = {};
