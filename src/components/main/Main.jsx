import TimeClock from "../header/TimeClock";
import TodayTasks from "../todayTasks/TodayTasks";

export default function Main() {
  return (
    <div>
      <h1>main</h1>
      <TodayTasks />

      {/* таймер  */}
      <TimeClock />
    </div>
  );
}
