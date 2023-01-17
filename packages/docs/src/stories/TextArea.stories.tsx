import { StoryObj, Meta } from '@storybook/react/'
import { Box, TextArea, TextAreaProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        <Text size="sm">Observation</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type something',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
