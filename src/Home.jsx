// Стартовая структура React-приложения для сайта заметок по локациям и времени

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Основные страницы
function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Дом</h1>
      <ul className="space-y-2">
        <li>
          <Link to="/ideas" className="text-blue-500">
            Идеи
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="text-blue-500">
            Дела
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-blue-500">
            Мероприятия
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-blue-500">
            Проекты
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Ideas() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Идеи</h2>
    </div>
  );
}

function Tasks() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Дела</h2>
    </div>
  );
}

function Events() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Мероприятия</h2>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Проекты</h2>
    </div>
  );
}
