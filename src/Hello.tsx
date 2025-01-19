import { FC } from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  const handleClick = () => {
    throw new Error('This is a demo error from button click')
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleClick}>
        Click me to throw an error
      </button>
    </div>
  )
}
