import styled from "styled-components";

export const ModalOverlay = styled.div`
  /* position: fixed; */
  position: fixed;
  inset: 0;
  background: rgba(13, 13, 13, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.12);
  padding: 32px 28px 24px 28px;
  min-width: 320px;
  max-width: 90vw;
  color: #f5f5f5;
  font-family: "Inter", "Poppins", "Space Grotesk", sans-serif;
  animation: fadeIn 0.3s ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

export const ModalTitle = styled.h2`
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 18px;
  text-align: center;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background: #0d0d0d;
  border: 1.5px solid #ffd70055;
  border-radius: 8px;
  padding: 10px 14px;
  color: #f5f5f5;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: #ffd700;
    background: #181818;
  }
  &::placeholder {
    color: #999;
    opacity: 1;
  }
`;

export const AddBtn = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #ffd700 70%, #c8b897 100%);
  color: #1a1a1a;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  margin-top: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.08);
  transition: background 0.2s;
  &:hover {
    background: #ffe066;
    color: #0d0d0d;
  }
`;

export const CancelBtn = styled.button`
  background: none;
  color: #ffd700;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  padding: 10px 0;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #ffe066;
    text-decoration: underline;
  }
`;

export const DivButImportance = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 18px;
  background: none;
  border: none;
  padding: 0;

  button {
    background: linear-gradient(90deg, #ffd700 70%, #c8b897 100%);
    color: #1a1a1a;
    font-weight: 600;
    font-size: 0.98rem;
    border: none;
    border-radius: 8px;
    padding: 10px 18px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.08);
    transition: background 0.2s, color 0.2s,
      transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    margin: 0 2px;
    animation: popIn 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background: #ffe066;
      color: #0d0d0d;
      transform: translateY(-2px) scale(1.06);
      box-shadow: 0 4px 16px rgba(255, 215, 0, 0.16);
    }
  }

  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.85) translateY(12px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;