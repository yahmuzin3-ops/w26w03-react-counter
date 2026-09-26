// 테이블 하나를 보여주는 카드
function TableCard({ number, occupied, onToggle }) {
  return (
    <div
      className={"table " + (occupied ? "occupied" : "empty")}
      onClick={onToggle}
    >
      <div className="num">{number}번</div>
      <div className="status">{occupied ? "사용중" : "비어있음"}</div>
    </div>
  );
}

export default TableCard;
