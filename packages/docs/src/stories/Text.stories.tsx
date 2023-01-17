import { StoryObj, Meta } from '@storybook/react/'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae suscipit enim expedita laudantium inventore ipsam quibusdam labore maxime sapiente velit veritatis, vel consectetur cupiditate, officia porro eum, ea exercitationem.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
