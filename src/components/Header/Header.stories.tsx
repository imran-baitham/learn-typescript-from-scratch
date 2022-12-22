import { Meta, Story } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Header {...args} />

export const Navbar = Template.bind({})

Navbar.args = {
  /*👇 The args you need here will depend on your component */
}
