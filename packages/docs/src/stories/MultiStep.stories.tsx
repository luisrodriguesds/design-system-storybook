import { StoryObj, Meta } from '@storybook/react/'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
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
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
