# app-todo

Next.js + React + TypeScript で作る、学習用のシンプルな Todo アプリです。

## このアプリで学べること

- React の `useState` で状態を管理する基本
- コンポーネント分割の考え方
- TypeScript で Todo の型を定義する方法
- 追加 / 編集 / 削除 / 完了切り替えの実装パターン

## 使用技術

- Next.js (App Router)
- React
- TypeScript

## 機能

- タスク追加
- タスク削除
- タスク編集
- 完了 / 未完了の切り替え

## ファイル構成

```txt
.
├── app
│   ├── globals.css        # 全体のスタイル
│   ├── layout.tsx         # 共通レイアウト
│   └── page.tsx           # ルートページ
├── components
│   ├── TodoApp.tsx        # 画面全体と状態管理
│   ├── TodoInput.tsx      # 入力欄と追加ボタン
│   └── TodoItem.tsx       # 1件分の表示・編集・削除
├── types
│   └── todo.ts            # Todo型定義
├── package.json
└── tsconfig.json
```

## 実行方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認できます。
