
interface IButtonLoginProps {
    children: string,
    type?: "submit" | "reset" | "button" | undefined,
    onClick: () => void
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children }) => {
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}