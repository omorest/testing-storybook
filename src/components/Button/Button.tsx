import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button ${variant}`} >
      {children}
    </button>
  )
}
