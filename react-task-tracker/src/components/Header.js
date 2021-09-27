
import Button from './Button'

export const Header = ({title}) => {
    const onClick = () => {
        console.log('click');
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color="teal" text='Add' />


        </header>
    )
}

Header.defaultProps ={
    title: 'Task Tracker'
}

export default Header;