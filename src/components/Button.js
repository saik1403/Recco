const Button = ({ label, className, onClick }) => {
    //resuable Button component
    return (
        <div className={`flex cursor-pointer border-emerald-600 border-2 h-11 px-8 rounded-3xl justify-center items-center text-emerald-600 text-sm font-semibold ${className}`} onClick={onClick}>
            <p>{label}</p>
        </div>
    );
}
export default Button;