import { createPortal } from "react-dom";
import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  Fields,
  Input,
  DivButImportance,
  CancelBtn,
  AddBtn,
} from "./ModalCss";

const modalPortalAddTAsk = document.getElementById("modal");

export default function ModalAddTask({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [icon, setIcon] = useState("");
  const [priority, setPriority] = useState("низкий"); // по умолчанию low

  const handleAdd = () => {
    if (title.trim() === "") return;
    onAdd({ title, category, icon, priority });
    setTitle("");
    setCategory("");
    setIcon("");
    setPriority("низкий");
  };

  const modalPortalAddTAsk = document.getElementById("modal");

  // Для примера: модалка всегда открыта
  return createPortal(
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>Добавить задачу</ModalTitle>
        <Fields>
          <Input
            type="text"
            placeholder="Название задачи"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Локация задачи"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Логотип или смайлик задачи"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </Fields>
        <DivButImportance as="div">
          <button
            style={{
              border: priority === "высокий" ? "2px solid #ffd700" : "none",
              background:
                priority === "высокий"
                  ? "linear-gradient(90deg, #ffd700 70%, #c8b897 100%)"
                  : "",
              color: priority === "высокий" ? "#1a1a1a" : "",
            }}
            onClick={() => setPriority("высокий")}
            type="button"
          >
            Высокий
          </button>
          <button
            style={{
              border: priority === "средний" ? "2px solid #ffd700" : "none",
              background:
                priority === "средний"
                  ? "linear-gradient(90deg, #ffd700 70%, #c8b897 100%)"
                  : "",
              color: priority === "средний" ? "#1a1a1a" : "",
            }}
            onClick={() => setPriority("средний")}
            type="button"
          >
            Средний
          </button>
          <button
            style={{
              border: priority === "низкий" ? "2px solid #ffd700" : "none",
              background:
                priority === "низкий"
                  ? "linear-gradient(90deg, #ffd700 70%, #c8b897 100%)"
                  : "",
              color: priority === "низкий" ? "#1a1a1a" : "",
            }}
            onClick={() => setPriority("низкий")}
            type="button"
          >
            Низкий
          </button>
        </DivButImportance>
        <CancelBtn onClick={onClose}>Отмена</CancelBtn>
        <AddBtn onClick={handleAdd}>Добавить</AddBtn>
      </ModalContent>
    </ModalOverlay>,
    modalPortalAddTAsk
  );
}
