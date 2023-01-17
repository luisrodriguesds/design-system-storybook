import { StoryObj, Meta } from '@storybook/react/'
import { HeadingProps, Heading } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
