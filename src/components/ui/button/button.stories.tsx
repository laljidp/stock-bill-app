import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './button'

const Section: React.FC = ({children}) => (
  <div style={{padding: 48}}>{children}</div>
)

const ButtonWithType = () => (
  <Section>
    <Button>default</Button>
    <Button type='primary'>primary</Button>
    <Button type='secondary'>secondary</Button>
    <Button type='danger'>danger</Button>
    <Button type='warning'>warning</Button>
    <Button type='outline'>outline</Button>
    <pre>
      {`
    <Button>default</Button>
    <Button type='primary'>primary</Button>
    <Button type='secondary'>secondary</Button>
    <Button type='danger'>danger</Button>
    <Button type='warning'>warning</Button>
    <Button type='outline'>outline</Button>
      `}
    </pre>
  </Section>
)

const WithLoading = () => (
  <Section>
    <Button type='primary' loading={true}>Primary loading</Button>
  </Section>
)

storiesOf('Button', module)
  .add('with type', ButtonWithType)
  .add('with loading', WithLoading)