import styled from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const DIVAppFon = styled.div`
  color: #ffffff;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  min-height: 100vh;
  font-family: "Segoe UI", "Arial", sans-serif;
`;

function App() {
  return (
    <DIVAppFon>
      {/* тут в <Header />   есть только верхний переход к другим страницам и сам таймер */}
      <Header />
      {/* тут в  <Main /> выводится задачи  по лакациям */}
      <Main />
    </DIVAppFon>
  );
}

export default App;

// ! пример : при нажати на кнопку нажималось на WIN + . ---> и выводилось смайлики 🏠📖 и тогдали
// ! мне нужен что бы при надатии на кнопку срабатывали автомотически без мешательство со сторонв пользователя (как горячий клавиша)
// при нажатии на гороший клавиш   открывается окно смайликов и мне нужно сделать так ---> то что написано в инпуте логотип оно должно сразу написатся поиске внутри смайликов .
// тут нужно изменить внуртению систему добавитьёёё
