import { useState } from "react";
import TableCard from "./TableCard.jsx";

const TABLE_COUNT = 12;

function App() {
  // 각 테이블 상태: false = 비어있음, true = 사용중
  const [tables, setTables] = useState(
    Array.from({ length: TABLE_COUNT }, () => false)
  );

  const toggle = (idx) => {
    setTables((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const occupiedCount = tables.filter(Boolean).length;

  return (
    <div className="app">
      <h1>🍽️ 테이블 점유 현황</h1>

      <div className="summary">
        <span>전체: <b>{TABLE_COUNT}</b></span>
        <span>사용중: <b>{occupiedCount}</b></span>
        <span>비어있음: <b>{TABLE_COUNT - occupiedCount}</b></span>
      </div>

      <div className="grid">
        {tables.map((occupied, idx) => (
          <TableCard
            key={idx}
            number={idx + 1}
            occupied={occupied}
            onToggle={() => toggle(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
