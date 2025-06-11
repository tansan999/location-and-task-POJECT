import styled from "styled-components";
import avatar from "../ItemsImg/logotip_avatar_.png";
import logo from "../ItemsImg/logotip_haha_.png";
// Можно добавить иконку смены темы, например, через emoji или SVG

const DivHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0d0d0d;
  padding: 20px 32px;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 4px 24px rgba(255, 215, 0, 0.05);
`;

const Logo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px #ffd70055);
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  color: #ffd700;
  font-family: "Inter", "Poppins", "Space Grotesk", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffd700;
  background: #1a1a1a;
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  color: #ffd700;
  font-size: 1.6rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #fffbe6;
  }
`;

export default function Header() {
  return (
    <DivHeader>
      <Logo src={logo} alt="логотип" />
      <Center>
        Привет,{" "}
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Пользователь
      </Center>
      <ProfileBlock>
        {/*   <button> День/Ночь</button> у него будет задача переключать на тёмную и светлую тему сайт  */}

        <ThemeButton title="Сменить тему">🌗</ThemeButton>

        {/* переход к личному кобинету  внутри него же  переход к множесту другим инструментом  */}
        <Avatar src={avatar} alt="аватар пользователя" />
      </ProfileBlock>
    </DivHeader>
  );
}
