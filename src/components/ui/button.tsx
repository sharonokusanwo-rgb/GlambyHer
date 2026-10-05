interface buttonProps {
  buttonText: string;
  className: string;
}

const Button = ({ buttonText, className }: buttonProps) => {
  return (
    <button className={`px-3 py-2 text-sm md:text-base rounded-sm bg-purple-600 text-white font-medium hover:bg-purple-700 ${className}`}>
      {buttonText}
    </button>
  );
};

export default Button;
