import { Text } from '../Text'
import { MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  const arrStep = Array.from({ length: size }, (_, i) => i + 1)
  return (
    <MultiStepContainer>
      <Text>
        Passo {currentStep} de {size}
      </Text>
      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {arrStep.map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
MultiStep.displayName = 'TextInput'
