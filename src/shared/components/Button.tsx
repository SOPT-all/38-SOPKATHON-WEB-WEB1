interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export const Button = ({
  label,
  className,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      className={`flex cursor-pointer items-center justify-center ${className}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};
