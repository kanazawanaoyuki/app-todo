"use client";

import { useMemo, useState } from "react";
import { TodoInput } from "@/components/TodoInput";
import { TodoItem } from "@/components/TodoItem";
import { Todo } from "@/types/todo";

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newText, setNewText] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  const handleAddTodo = () => {
    const text = newText.trim();
    if (!text) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
    setNewText("");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    if (editingId === id) {
      setEditingId(null);
      setEditingText("");
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleStartEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const handleSaveEdit = (id: number) => {
    const text = editingText.trim();
    if (!text) return;

    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    setEditingId(null);
    setEditingText("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <main>
      <h1>Todoアプリ</h1>
      <p>
        合計: {todos.length}件 / 完了: {completedCount}件
      </p>

      <TodoInput value={newText} onChange={setNewText} onAdd={handleAddTodo} />

      {todos.length === 0 ? (
        <div className="empty">タスクがありません。まずは1件追加してみましょう。</div>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editingText={editingText}
              isEditing={editingId === todo.id}
              onToggleCompleted={handleToggleCompleted}
              onDelete={handleDeleteTodo}
              onStartEdit={handleStartEdit}
              onChangeEditingText={setEditingText}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={handleCancelEdit}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
