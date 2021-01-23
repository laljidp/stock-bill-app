import React from 'react'
import { storiesOf } from '@storybook/react'
import Spinner from './spinner'

const Section: React.FC = ({children}) => (
  <div style={{padding: 48}}>{children}</div>
)


const Default = () => (
  <Section>
    <Spinner width={3} size={25} color={'red'}/>

    <pre>
      {`<Spinner width={3} size={25} color={'red'}/>`}
    </pre>

    <Spinner width={5} size={50} color={'blue'}/>
    <pre>
      {`<Spinner width={5} size={50} color={'blue'}/>`}
    </pre>
    <Spinner width={4} size={75} color={'purple'}/>
    <pre>
      {`<Spinner width={4} size={75} color={'purple'}/>`}
    </pre>
  </Section>
)

storiesOf('Spinner', module)
  .add('Default', Default)