import { ButtonI } from '../types'

function Button({ type, children, id, className, onClick }: ButtonI) {
    return (
        <button type={type} id={id} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
