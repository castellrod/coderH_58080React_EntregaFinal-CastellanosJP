function Button({ onClick, children }) {
    return <button onClick={onClick} className="item-hijo">{children}</button>;

}

export default Button;