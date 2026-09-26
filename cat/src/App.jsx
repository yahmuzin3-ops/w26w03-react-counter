import { useState } from "react";
import { cats } from "./cats.js";
import CatCard from "./CatCard.jsx";

function App() {
  // 현재 선택된 고양이를 저장 (처음엔 아무것도 선택 안 됨)
  const [selectedCat, setSelectedCat] = useState(null);

  return (
    <div className="app">
      <h1>🐱 고양이 백과사전</h1>
      <p className="subtitle">카드를 클릭하면 자세한 설명을 볼 수 있어요.</p>

      <div className="cat-list">
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onClick={setSelectedCat} />
        ))}
      </div>

      {selectedCat && (
        <div className="detail" onClick={() => setSelectedCat(null)}>
          <h2>{selectedCat.name}</h2>
          <p>
            <strong>원산지:</strong> {selectedCat.origin}
          </p>
          <p>
            <strong>성격:</strong> {selectedCat.personality}
          </p>
          <p>{selectedCat.description}</p>
          <p className="close-hint">(클릭하면 닫힘)</p>
        </div>
      )}
    </div>
  );
}

export default App;
