import styled from "styled-components";
import ModalAddTask from "../modal/ModalAddTask";
import { useState } from "react";

// Пример данных задач оддельный компонент
const initialTasks = [
  // {
  //   id: 1,
  //   title: "Купить продукты",
  //   priority: "high", // high, medium, low
  //   category: "Дом",
  //   icon: "🏠",
  //   done: false,
  // },
  // {
  //   id: 2,
  //   title: "Сделать домашку по математике",
  //   priority: "medium",
  //   category: "Учёба",
  //   icon: "🎓",
  //   done: true,
  // },
  // {
  //   id: 3,
  //   title: "Отправить отчёт",
  //   priority: "high",
  //   category: "Работа",
  //   icon: "💼",
  //   done: false,
  // },
];

const Block = styled.section`
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.05);
  padding: 24px 20px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  color: #ffd700;
  font-size: 1.2rem;
  font-family: "Inter", "Poppins", "Space Grotesk", sans-serif;
  margin-bottom: 16px;
  font-weight: 600;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  background: #0d0d0d;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.05);
  gap: 12px;
  opacity: ${(props) => (props.$done ? 0.6 : 1)};
`;

const TaskTitle = styled.span`
  flex: 1;
  color: ${(props) => (props.$done ? "#999" : "#f5f5f5")};
  text-decoration: ${(props) => (props.$done ? "line-through" : "none")};
  transition: color 0.2s;
`;

const Checkbox = styled.input`
  accent-color: #ffd700;
  width: 18px;
  height: 18px;
`;

const PriorityDot = styled.span`
  font-size: 1.1rem;
  margin-right: 4px;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffd700;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  cursor: pointer;
  transition: background 0.2s;
  margin: 0 auto 16px auto;
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.08);

  &:hover {
    background: #ffe066;
  }
`;

function getPriorityDot(priority) {
  if (priority === "высокий") return <PriorityDot>🔴</PriorityDot>; // high -- высокий
  if (priority === "средний") return <PriorityDot>🟡</PriorityDot>; // medium --  середина
  return <PriorityDot>⚪</PriorityDot>;
}

export default function TodayTasks() {
  const [addTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const doneCount = tasks.filter((t) => t.done).length;

  // Добавление новой задачи оддельный компонент
  const handleAddTask = (newTask) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.title,
        category: newTask.category,
        icon: newTask.icon,
        priority: newTask.priority,
        done: false,
      },
    ]);
    setAddTask(false);
  };

  // Обработка клика по чекбоксу
  const handleToggleDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <Block>
      <Title>Задачи на сегодня</Title>
      {/* добавление задач  */}
      <AddButton onClick={() => setAddTask(true)}>
        добавить задачу ! +
      </AddButton>
      {addTask && (
        <ModalAddTask onClose={() => setAddTask(false)} onAdd={handleAddTask} />
      )}
      {/* Прогресс-бар  линия выполнении*/}
      <div style={{ marginTop: 8 }}>
        <div
          style={{
            height: 8,
            borderRadius: 6,
            background: "#222",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${(doneCount / tasks.length) * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg, #ffd700 60%, #c8b897 100%)",
              transition: "width 0.3s",
            }}
          />
        </div>
        <div style={{ color: "#999", fontSize: 13, marginTop: 4 }}>
          {doneCount} из {tasks.length} выполнено
        </div>
      </div>
      {/* вывод задач */}
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id} $done={task.done}>
            <Checkbox
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggleDone(task.id)}
            />
            {getPriorityDot(task.priority)}
            <span style={{ fontSize: "1.2rem" }}>{task.icon}</span>
            <TaskTitle $done={task.done}>{task.title}</TaskTitle>
          </TaskItem>
        ))}
      </TaskList>
    </Block>
  );
}
