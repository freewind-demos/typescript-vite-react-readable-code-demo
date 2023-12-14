import {FC} from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const hello = () => {
        console.log("### hello")
        return "Hello, world!"
    }
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div>{hello()}</div>
    </div>;
}
