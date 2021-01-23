import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './input'
import { Section } from '../../styled'


const Default = () => (
  <Section>
    <Input
      placeholder='placeholder'
    />
    <pre>
        {`<Input placeholder='placeholder' />`}
    </pre>
    <Input
      placeholder='placeholder'
      error={'Required'}
    />
    <pre>{`
<Input
    placeholder='placeholder'
    error={'Required'}
/>
  `}</pre>
    <Input
      sizes={'sm'}
      placeholder='placeholder'
    />
    <pre>
      {
        `
 <Input
    sizes={'sm'}
    placeholder='placeholder'
  /> 
  `
      }
      </pre>

    <Input
      sizes={'md'}
      placeholder='placeholder'
    />
    <pre>
    {`
<Input
  sizes={'md'}
  placeholder='placeholder'
/>`
    }
    </pre>

  </Section>
)

storiesOf('Input', module)
  .add('Default', Default)