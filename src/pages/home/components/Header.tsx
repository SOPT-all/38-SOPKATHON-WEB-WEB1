import { useNavigate } from 'react-router';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
      >
        뒤로가기 버튼
      </button>
      <span>
        {title}
      </span>
    </div>
  );
}
