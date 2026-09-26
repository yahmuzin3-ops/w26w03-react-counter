// 고양이 한 마리 정보를 보여주는 카드 컴포넌트
function CatCard({ cat, onClick }) {
  return (
    <div className="cat-card" onClick={() => onClick(cat)}>
      <h3>{cat.name}</h3>
      <p className="origin">원산지: {cat.origin}</p>
    </div>
  );
}

export default CatCard;
