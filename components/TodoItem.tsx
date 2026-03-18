import { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  editingText: string;
  isEditing: boolean;
  onToggleCompleted: (id: number) => void;
  onDelete: (id: number) => void;
  onStartEdit: (todo: Todo) => void;
  onChangeEditingText: (value: string) => void;
  onSaveEdit: (id: number) => void;
  onCancelEdit: () => void;
};

export function TodoItem({
  todo,
  editingText,
  isEditing,
  onToggleCompleted,
  onDelete,
  onStartEdit,
  onChangeEditingText,
  onSaveEdit,
  onCancelEdit,
}: TodoItemProps) {
  return (
    <li className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleCompleted(todo.id)}
          aria-label="タスク完了の切り替え"
        />

        {isEditing ? (
          <input
            type="text"
            value={editingText}
            onChange={(event) => onChangeEditingText(event.target.value)}
          />
        ) : (
          <span className={`todo-text ${todo.completed ? "done" : ""}`}>{todo.text}</span>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button className="primary" onClick={() => onSaveEdit(todo.id)}>
              保存
            </button>
            <button onClick={onCancelEdit}>キャンセル</button>
          </>
        ) : (
          <button onClick={() => onStartEdit(todo)}>編集</button>
        )}

        <button className="danger" onClick={() => onDelete(todo.id)}>
          削除
        </button>
      </div>
    </li>
  );
}
