type TodoInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

export function TodoInput({ value, onChange, onAdd }: TodoInputProps) {
  return (
    <div className="todo-input-row">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="例: TypeScriptの勉強を30分する"
      />
      <button className="primary" onClick={onAdd}>
        追加
      </button>
    </div>
  );
}
