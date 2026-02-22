# 📚 タスク別 学習計画 — Streak Buddy を作りながら学ぶ

> **方針**: 座学より手を動かすことを優先。各タスクは「これを作る → こうなる」が明確。
> **目標**: Streak Buddy (ストリーク継続 × バーチャルペット育成 App) を3ヶ月で公開する。

---

## 📦 リポジトリの役割分担

| リポジトリ | 内容 |
|---|---|
| `platypuscode-portfolio` | このポートフォリオサイト。Streak Buddyへのリンクも掲載する |
| `streak-buddy` | メインのフルスタックアプリ。フェーズ1週2から作り始める |

> **Streak Buddy リポジトリの作成**: フェーズ1 Week2 のTask 5 で `streak-buddy` という名前で作成する。
> そのリポジトリに、このドキュメントを `docs/learning-plan.md` としてコピーして継続して使うこと。

---

## 全タスク一覧

| # | タスク | 📦 リポジトリ | フェーズ | 状態 |
|---|---|---|---|---|
| 1 | このポートフォリオをVercelにデプロイ | portfolio | Phase 1 Week 1 | ⬜ |
| 2 | CLAUDE.md を作成する | portfolio | Phase 1 Week 1 | ⬜ |
| 3 | TypeScriptでStreak Buddyのデータ型を定義する | portfolio | Phase 1 Week 1 | ⬜ |
| 4 | useLocalStorage カスタムフックを作る | portfolio | Phase 1 Week 1 | ⬜ |
| 5 | Streak Buddy リポジトリを初期化する | streak-buddy | Phase 1 Week 2 | ⬜ |
| 6 | GitHub APIでfetch練習をポートフォリオに追加する | portfolio | Phase 1 Week 2 | ⬜ |
| 7 | Express + TypeScript APIサーバーを立ち上げる | streak-buddy | Phase 2 Week 3 | ⬜ |
| 8 | Prisma + SQLite でDBに繋ぐ | streak-buddy | Phase 2 Week 3 | ⬜ |
| 9 | ユーザー登録・ログインAPIを実装する | streak-buddy | Phase 2 Week 4 | ⬜ |
| 10 | Streak CRUD APIを実装する | streak-buddy | Phase 2 Week 4 | ⬜ |
| 11 | Zodバリデーションを全APIに追加する | streak-buddy | Phase 2 Week 4 | ⬜ |
| 12 | ReactフロントからAPIを呼び出す | streak-buddy | Phase 3 Week 5 | ⬜ |
| 13 | TanStack Queryを導入する | streak-buddy | Phase 3 Week 5 | ⬜ |
| 14 | ログイン画面〜ダッシュボードの認証フローを作る | streak-buddy | Phase 3 Week 6 | ⬜ |
| 15 | Streak一覧・作成・チェックイン機能のUIを作る | streak-buddy | Phase 3 Week 6 | ⬜ |
| 16 | ペット育成システムを実装する | streak-buddy | Phase 3 Week 7 | ⬜ |
| 17 | Supabaseへ移行する (DB + Auth) | streak-buddy | Phase 3 Week 7 | ⬜ |
| 18 | バックエンドをRailwayにデプロイする | streak-buddy | Phase 3 Week 8 | ⬜ |
| 19 | フロントをVercelにデプロイ→ポートフォリオにリンク追加 | both | Phase 3 Week 8 | ⬜ |
| 20 | Next.js App Routerを学ぶ | streak-buddy | Phase 4 | ⬜ |
| 21 | Streak BuddyをNext.js + Supabaseでリライト | streak-buddy | Phase 4 | ⬜ |
| 22 | テストを書く (Vitest + Testing Library) | streak-buddy | Phase 4 | ⬜ |
| 23 | 型安全なAPIクライアントを実装する | streak-buddy | Phase 4 | ⬜ |
| 24 | ポートフォリオを最終整備する | portfolio | Phase 4 | ⬜ |

---

---

# Phase 1: 基盤固め (2週間)

---

## Task 1: このポートフォリオをVercelにデプロイする

**📦 リポジトリ**: `platypuscode-portfolio`
**⏱ 目安**: 30分〜1時間

### 🎯 この課題で学ぶこと

- フロントエンドのデプロイとはどういうことか
- Vercelの仕組み (GitHubと連携してpushするたびに自動デプロイ)
- ビルドとデプロイの違い

### やること (Step by Step)

```
Step 1: GitHubにリポジトリをpushする (まだの場合)
  → VSCodeのSource Controlパネルから操作できる

Step 2: https://vercel.com にアクセス
  → 「Continue with GitHub」でサインアップ

Step 3: 「New Project」→ 対象のリポジトリを選択

Step 4: Framework Preset: Vite を選択
  → Build Command: npm run build (自動検出される)
  → Output Directory: dist (自動検出される)

Step 5: 「Deploy」ボタンを押す

Step 6: 数分後に https://xxxx.vercel.app が発行される
  → このURLをREADME.mdとポートフォリオの概要欄に追加する
```

### 📚 学習リソース

- [Vercel公式ドキュメント - Viteのデプロイ](https://vercel.com/docs/frameworks/vite)

### 参考コード

```bash
# ビルドが通るか事前に確認する (エラーがあれば直す)
npm run build

# ビルド成功のサイン:
# dist/ フォルダが生成される
# ✓ built in Xs
```

### ✅ 完了の定義

- [ ] `https://xxxx.vercel.app` でポートフォリオが表示される
- [ ] GitHubにpushしたら自動で再デプロイされることを確認した
- [ ] URLをREADME.mdに追加した
- [ ] roadmap.md の Task 1 を ✅ に更新した

---

## Task 2: CLAUDE.md を作成する

**📦 リポジトリ**: `platypuscode-portfolio`
**⏱ 目安**: 30分

### 🎯 この課題で学ぶこと

- CLAUDE.mdがプロジェクトの「コンテキストメモリ」として機能する仕組み
- AIに毎回説明せずに済む環境を整える
- Claude Codeをより賢く使うための設定

### やること (Step by Step)

```
Step 1: プロジェクトルートに CLAUDE.md を作成する

Step 2: 以下のテンプレートを参考に書く

Step 3: Claude Codeを再起動して、CLAUDE.mdが読み込まれているか確認する
  → 「このプロジェクトのスタックは何ですか?」と聞いてみる
  → CLAUDE.mdの内容を答えてくれればOK
```

### 📚 学習リソース

- [Claude Code公式: CLAUDE.md](https://docs.anthropic.com/en/docs/claude-code/memory)

### 参考コード (テンプレート)

```markdown
# platypuscode-portfolio

個人ポートフォリオサイト。制作物の紹介とプロフィールを掲載する。

## Tech Stack
- Framework: React 18 + TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS
- Routing: React Router v6
- Deploy: Vercel

## Project Structure
- src/components/ → 再利用可能なコンポーネント
- src/pages/ → ページコンポーネント
- src/assets/ → 画像・静的ファイル

## Coding Conventions
- TypeScript: strict モード。any は使わない
- コンポーネントのprops型は `type Props = {...}` で定義する
- ファイル名はPascalCase (MyComponent.tsx)
- カスタムフックは src/hooks/ に置く

## Commands
- npm run dev   → 開発サーバー起動 (http://localhost:5173)
- npm run build → 本番ビルド
- npm run lint  → ESLintチェック

## Notes
- このポートフォリオはStreak Buddyアプリのリンクを掲載する予定
- Streak Buddy repo: streak-buddy (別リポジトリ)
```

### ✅ 完了の定義

- [ ] プロジェクトルートに `CLAUDE.md` が存在する
- [ ] Claude Codeにスタックを聞いたら答えてくれた
- [ ] roadmap.md の Task 2 を ✅ に更新した

---

## Task 3: TypeScript でStreak Buddyのデータ型を定義する

**📦 リポジトリ**: `platypuscode-portfolio` (練習場として使う。後でstreak-buddyにコピー)
**⏱ 目安**: 1〜2時間

### 🎯 この課題で学ぶこと

- `interface` vs `type` の実際の使い分け
- `Partial<T>`, `Pick<T,K>`, `Omit<T,K>` の実用的な使い方
- ジェネリック型の書き方
- 型設計がいかにアプリ設計と直結するか

### やること (Step by Step)

```
Step 1: src/types/index.ts を作成する

Step 2: 以下の型を自分で考えながら定義する
  - User (ユーザー)
  - Streak (ストリーク)
  - Pet (ペット)
  - フォーム用の型 (Utility Typesを使う)

Step 3: 型を定義したあと、Claude Codeに
  「この型設計でStreak Buddyを作る場合の問題点はありますか?」
  と聞いてレビューしてもらう
```

### 📚 学習リソース

- [TypeScript Handbook: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Matt Pocock: TypeScript Generics Tutorial](https://www.youtube.com/@mattpocockuk) (YouTube)

### 参考コード

```typescript
// src/types/index.ts

// ── ユーザー ──────────────────────────────────────
export type User = {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
};

// フォームで使う: id と createdAt は自動生成なので除外
export type CreateUserInput = Omit<User, 'id' | 'createdAt'> & {
  password: string;
};

// 更新で使う: 全部オプショナル、変えたいものだけ送ればいい
export type UpdateUserInput = Partial<Pick<User, 'name' | 'email'>>;

// ── ストリーク ─────────────────────────────────────
export type Streak = {
  id: string;
  userId: string;
  title: string;
  description?: string;        // ? = オプショナル
  currentStreak: number;
  longestStreak: number;
  lastCheckedDate: Date | null; // チェックイン未実施の場合はnull
  createdAt: Date;
};

// 作成時: id系・実績系は自動計算なので除外
export type CreateStreakInput = Pick<Streak, 'title' | 'description'>;

// ── ペット ─────────────────────────────────────────
export type PetMood = 'happy' | 'normal' | 'sad'; // ← ユニオン型が便利な場面

export type Pet = {
  id: string;
  userId: string;
  name: string;
  level: number;
  experience: number;
  mood: PetMood;
  items: string[];             // 持っているアイテムのid一覧
  createdAt: Date;
};

// ── APIレスポンス共通型 (ジェネリクスの実践) ──────────
export type ApiResponse<T> = {
  data: T;
  message: string;
};

export type ApiError = {
  error: string;
  details?: string[];
};

// 使い方の例:
// const response: ApiResponse<Streak[]> = await fetchStreaks();
// response.data → Streak[] 型になる
```

### ✅ 完了の定義

- [ ] `src/types/index.ts` が作成された
- [ ] `User`, `Streak`, `Pet` の3つの型が定義されている
- [ ] `Partial`, `Pick`, `Omit` を少なくとも1回ずつ使った
- [ ] Claude Codeにレビューしてもらい、問題がなければOK
- [ ] roadmap.md の Task 3 を ✅ に更新した

---

## Task 4: useLocalStorage カスタムフックを作る

**📦 リポジトリ**: `platypuscode-portfolio`
**⏱ 目安**: 1〜2時間

### 🎯 この課題で学ぶこと

- カスタムフックとは何か、なぜ作るのか
- TypeScript のジェネリクスを実際に使う
- localStorage の操作方法

### やること (Step by Step)

```
Step 1: src/hooks/useLocalStorage.ts を作成する

Step 2: ジェネリック型 T を使ったフックを書く
  - useState と同じ使い心地にする
  - const [value, setValue] = useLocalStorage('key', defaultValue)

Step 3: このポートフォリオの中で使ってみる
  例: テーマ設定、最後に見たページ、など何でもOK
  (実際に動かすことが目的)
```

### 📚 学習リソース

- [React Docs: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Web Dev Simplified: Custom Hooks Tutorial](https://www.youtube.com/@WebDevSimplified) (YouTube で "custom hooks" で検索)

### 参考コード

```typescript
// src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

// ジェネリクス <T> = 「どんな型でも入れられる」という宣言
function useLocalStorage<T>(key: string, initialValue: T) {
  // Step 1: localStorageから初期値を読み込む
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      // 保存されていればパース、なければinitialValueを使う
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`useLocalStorage: キー "${key}" の読み込みに失敗`, error);
      return initialValue;
    }
  });

  // Step 2: 値が変わったらlocalStorageに保存する
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`useLocalStorage: キー "${key}" の保存に失敗`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
  // as const = useState と同じように [value, setter] のタプルとして返す
}

export default useLocalStorage;

// ─── 使い方の例 ───────────────────────────────────────
// const [username, setUsername] = useLocalStorage<string>('username', '');
// const [count, setCount] = useLocalStorage<number>('count', 0);
// const [user, setUser] = useLocalStorage<User | null>('user', null);
```

```typescript
// 実際に使う例 (どこかのコンポーネントで試してみる)
import useLocalStorage from '../hooks/useLocalStorage';

function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      現在: {theme}
    </button>
  );
}
// → ページをリロードしても theme が保持される!
```

### ✅ 完了の定義

- [ ] `src/hooks/useLocalStorage.ts` が作成された
- [ ] ジェネリクス `<T>` を使っている
- [ ] 実際のコンポーネントで使って動作確認した
- [ ] ページをリロードしても値が保持されることを確認した
- [ ] roadmap.md の Task 4 を ✅ に更新した

---

## Task 5: Streak Buddy リポジトリを初期化する

**📦 リポジトリ**: `streak-buddy` (新規作成)
**⏱ 目安**: 1時間

### 🎯 この課題で学ぶこと

- フルスタックプロジェクトのフォルダ構造の設計
- モノレポ vs マルチレポの考え方
- 新プロジェクトの初期設定

### やること (Step by Step)

```
Step 1: GitHubで "streak-buddy" という新しいリポジトリを作成する

Step 2: ローカルにクローンしてフォルダ構造を作る
streak-buddy/
  ├── frontend/          ← React + Vite
  ├── backend/           ← Express + Node.js
  ├── docs/              ← このドキュメントをコピー
  └── README.md

Step 3: frontendを Vite + React + TypeScript で初期化する
  cd frontend
  npm create vite@latest . -- --template react-ts
  npm install
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

Step 4: backendフォルダを初期化する
  cd backend
  npm init -y
  npm install express cors dotenv
  npm install -D typescript @types/node @types/express ts-node-dev

Step 5: このdocsフォルダの内容をstreak-buddyのdocs/にコピーする
  docs/learning-plan.md (このファイル)
  docs/roadmap.md
  docs/feedback.md

Step 6: streak-buddyにCLAUDE.mdを作成する (Task 2を参考に)

Step 7: platypuscode-portfolioのCLAUDE.mdにStreak Buddyへの参照を追加する
```

### 📚 学習リソース

- [Vite公式: React + TypeScriptテンプレート](https://vitejs.dev/guide/)
- [Tailwind CSS: Viteとのセットアップ](https://tailwindcss.com/docs/guides/vite)

### 参考コード

```bash
# streak-buddy/frontend のセットアップ
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# tailwind.config.js に追記
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# src/index.css の先頭に追加
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
# streak-buddy/backend のセットアップ
npm init -y
npm install express cors dotenv cookie-parser
npm install -D typescript @types/node @types/express @types/cors @types/cookie-parser ts-node-dev
npx tsc --init
```

```json
// backend/package.json の scripts に追加
{
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

```typescript
// backend/src/index.ts (最初の動作確認用)
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Streak Buddy API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### streak-buddy/docs/CLAUDE.md テンプレート

```markdown
# Streak Buddy

習慣継続 (ストリーク) × バーチャルペット育成のゲーミフィケーションWebアプリ。

## Tech Stack
- Frontend: React 18 + TypeScript + Vite + Tailwind CSS
- Backend: Node.js + Express + TypeScript
- DB: PostgreSQL + Prisma (開発中はSQLite)
- Auth: JWT + bcrypt + HttpOnly Cookie
- Deploy: Frontend→Vercel / Backend→Railway

## Project Structure
streak-buddy/
  frontend/src/
    components/  → 再利用可能なUIコンポーネント
    pages/       → ページコンポーネント
    hooks/       → カスタムフック
    lib/         → APIクライアント、ユーティリティ
    types/       → TypeScript型定義
  backend/src/
    routes/      → Expressルーター
    middleware/  → 認証ミドルウェアなど
    lib/         → Prismaクライアントなど
  docs/          → 学習ドキュメント

## Conventions
- TypeScript: any は絶対に使わない
- API: RESTful設計、エラーは必ずstatusCodeと一緒に返す
- 認証: JWTをHttpOnly Cookieに保存する

## Commands
- Frontend: cd frontend && npm run dev (http://localhost:5173)
- Backend: cd backend && npm run dev  (http://localhost:3001)
- DB GUI: npx prisma studio
```

### ✅ 完了の定義

- [ ] GitHubに `streak-buddy` リポジトリが作成された
- [ ] `frontend/` と `backend/` のフォルダ構造が作られた
- [ ] `npm run dev` でフロントとバックが両方起動する
- [ ] `GET /api/health` が `{ status: 'ok' }` を返す
- [ ] `docs/` にこのドキュメントがコピーされた
- [ ] `CLAUDE.md` が作成された
- [ ] roadmap.md の Task 5 を ✅ に更新した

---

## Task 6: GitHub APIでfetch練習をポートフォリオに追加する

**📦 リポジトリ**: `platypuscode-portfolio`
**⏱ 目安**: 2〜3時間

### 🎯 この課題で学ぶこと

- `fetch` APIの正しい使い方
- loading / error / data の状態管理パターン
- TypeScript で APIレスポンスに型をつける方法
- エラーハンドリングの実装

### やること (Step by Step)

```
Step 1: ポートフォリオに「GitHub Profile」セクションを追加する

Step 2: fetch で GitHub API を叩く
  URL: https://api.github.com/users/{username}
  → 登録不要、無料で使える公開API

Step 3: loading/error/dataの状態をuseStateで管理する

Step 4: 表示: アバター画像・名前・フォロワー数・リポジトリ数
```

### 📚 学習リソース

- [MDN: Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
- [GitHub REST API docs: Get a user](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)

### 参考コード

```typescript
// src/types/github.ts
// GitHub APIのレスポンス型 (必要な部分だけ)
export type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};
```

```typescript
// src/components/GitHubProfile.tsx
import { useState, useEffect } from 'react';
import type { GitHubUser } from '../types/github';

type Props = {
  username: string;
};

function GitHubProfile({ username }: Props) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        // ⚠️ fetchの罠: 404でもエラーにならない
        if (!res.ok) {
          throw new Error(`ユーザーが見つかりません (${res.status})`);
        }
        return res.json();
      })
      .then((data: GitHubUser) => setUser(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) return <div className="text-gray-500">読み込み中...</div>;
  if (error) return <div className="text-red-500">エラー: {error}</div>;
  if (!user) return null;

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="font-bold">{user.name ?? user.login}</h3>
        {user.bio && <p className="text-sm text-gray-600">{user.bio}</p>}
        <div className="flex gap-4 mt-1 text-sm">
          <span>📁 {user.public_repos} repos</span>
          <span>👥 {user.followers} followers</span>
        </div>
      </div>
    </div>
  );
}

export default GitHubProfile;
```

```typescript
// 使い方
<GitHubProfile username="あなたのGitHubユーザー名" />
```

### ✅ 完了の定義

- [ ] ポートフォリオにGitHub情報が表示されている
- [ ] loading中はローディング表示がある
- [ ] 存在しないユーザー名を渡したときエラー表示がある
- [ ] `fetch()` の `.ok` チェックをしている
- [ ] APIレスポンスに型 (`GitHubUser`) がついている
- [ ] roadmap.md の Task 6 を ✅ に更新した

---

---

# Phase 2: Streak Buddyのバックエンドを作る (2週間)

---

## Task 7: Express + TypeScript APIサーバーを立ち上げる

**📦 リポジトリ**: `streak-buddy/backend/`
**⏱ 目安**: 2〜3時間

### 🎯 この課題で学ぶこと

- RESTful APIの設計原則
- Expressのルーティングとミドルウェアの仕組み
- HTTPメソッドとステータスコードの使い分け
- 環境変数 (.env) の管理

### やること (Step by Step)

```
Step 1: Task 5 で作ったサーバーを拡張する

Step 2: .env ファイルを作成して PORT と DATABASE_URL を管理する

Step 3: ルーターを分離する (routes/ フォルダ)
  - routes/health.ts
  - routes/streaks.ts (ダミーデータで)

Step 4: ルーターを index.ts に登録する

Step 5: フロントから fetch して CORS を確認する
```

### 📚 学習リソース

- [Express公式ドキュメント: Routing](https://expressjs.com/en/guide/routing.html)
- [Express公式ドキュメント: Middleware](https://expressjs.com/en/guide/using-middleware.html)

### 参考コード

```bash
# .env ファイル (backend/.env)
PORT=3001
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key-change-this-in-production"
FRONTEND_URL="http://localhost:5173"
```

```typescript
// backend/src/routes/streaks.ts
import { Router } from 'express';

const router = Router();

// ダミーデータ (後でDBに置き換える)
const dummyStreaks = [
  { id: '1', title: '毎日読書', currentStreak: 5, longestStreak: 10 },
  { id: '2', title: '筋トレ', currentStreak: 3, longestStreak: 7 },
];

// GET /api/streaks → 一覧取得
router.get('/', (req, res) => {
  res.json(dummyStreaks);
});

// GET /api/streaks/:id → 1件取得
router.get('/:id', (req, res) => {
  const streak = dummyStreaks.find(s => s.id === req.params.id);
  if (!streak) {
    return res.status(404).json({ error: 'Streak not found' });
  }
  res.json(streak);
});

// POST /api/streaks → 新規作成
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'title は必須です' });
  }
  const newStreak = {
    id: String(dummyStreaks.length + 1),
    title,
    currentStreak: 0,
    longestStreak: 0,
  };
  dummyStreaks.push(newStreak);
  res.status(201).json(newStreak); // 201 = Created
});

export default router;
```

```typescript
// backend/src/index.ts (更新版)
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import streaksRouter from './routes/streaks';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// ミドルウェア
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());           // req.body をJSONとして読む

// ルート
app.use('/api/streaks', streaksRouter);
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// 404ハンドラー
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`✅ Server: http://localhost:${PORT}`);
});
```

### ✅ 完了の定義

- [ ] `GET /api/streaks` が JSON配列を返す
- [ ] `POST /api/streaks` でデータを追加できる
- [ ] `GET /api/streaks/999` で 404 が返る
- [ ] `.env` で PORT を管理している
- [ ] ルーターが `routes/` フォルダに分離されている
- [ ] roadmap.md の Task 7 を ✅ に更新した

---

## Task 8: Prisma + SQLite でDBに繋ぐ

**📦 リポジトリ**: `streak-buddy/backend/`
**⏱ 目安**: 3〜4時間

### 🎯 この課題で学ぶこと

- ORMとは何か、なぜ使うのか
- Prismaのスキーマ定義とマイグレーション
- DBからCRUDするコードの書き方
- SQLiteでローカル開発する方法

### やること (Step by Step)

```
Step 1: Prisma をインストールしてセットアップする

Step 2: prisma/schema.prisma に User, Streak, Pet のモデルを定義する

Step 3: npx prisma migrate dev でDBを作成する

Step 4: npx prisma studio でDBをブラウザから確認する

Step 5: ルーターのダミーデータをDB操作に置き換える
```

### 📚 学習リソース

- [Prisma公式: Getting Started](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch)
- [Prisma公式: CRUD Operations](https://www.prisma.io/docs/orm/prisma-client/queries/crud)

### 参考コード

```bash
# インストール
npm install prisma @prisma/client
npx prisma init --datasource-provider sqlite
```

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String   // bcryptハッシュ化されたもの
  createdAt DateTime @default(now())
  streaks   Streak[]
  pet       Pet?
}

model Streak {
  id               String    @id @default(cuid())
  userId           String
  title            String
  description      String?
  currentStreak    Int       @default(0)
  longestStreak    Int       @default(0)
  lastCheckedDate  DateTime?
  createdAt        DateTime  @default(now())
  user             User      @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Pet {
  id         String   @id @default(cuid())
  userId     String   @unique
  name       String   @default("たまご")
  level      Int      @default(1)
  experience Int      @default(0)
  mood       String   @default("normal") // happy | normal | sad
  items      String   @default("[]")     // JSON文字列として保存
  createdAt  DateTime @default(now())
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

```bash
# マイグレーション実行 (スキーマをDBに反映する)
npx prisma migrate dev --name init

# ブラウザでDB確認
npx prisma studio
```

```typescript
// src/lib/prisma.ts (Prismaクライアントのシングルトン)
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

```typescript
// routes/streaks.ts をDB版に更新
import { Router } from 'express';
import { prisma } from '../lib/prisma';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const streaks = await prisma.streak.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(streaks);
  } catch (error) {
    res.status(500).json({ error: 'サーバーエラーが発生しました' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const streak = await prisma.streak.create({
      data: { title, description, userId },
    });
    res.status(201).json(streak);
  } catch (error) {
    res.status(500).json({ error: 'サーバーエラーが発生しました' });
  }
});

export default router;
```

### ✅ 完了の定義

- [ ] `prisma/schema.prisma` に3つのモデルが定義されている
- [ ] `npx prisma migrate dev` が成功した
- [ ] `npx prisma studio` でDB内容がブラウザで見える
- [ ] APIがダミーデータではなくDBから読み書きする
- [ ] roadmap.md の Task 8 を ✅ に更新した

---

## Task 9: ユーザー登録・ログインAPIを実装する

**📦 リポジトリ**: `streak-buddy/backend/`
**⏱ 目安**: 4〜6時間

### 🎯 この課題で学ぶこと

- bcrypt によるパスワードのハッシュ化
- JWTの生成と検証
- HttpOnly Cookie の設定
- 認証ミドルウェアの実装
- フロントでパスワードをハッシュしてはいけない理由の体感

### やること (Step by Step)

```
Step 1: bcrypt, jsonwebtoken をインストールする

Step 2: routes/auth.ts を作成する
  POST /api/auth/register
  POST /api/auth/login
  GET  /api/auth/me
  POST /api/auth/logout

Step 3: 認証ミドルウェアを作成する
  middleware/auth.ts

Step 4: 保護されたルート (認証が必要なルート) にミドルウェアを追加する
```

### 📚 学習リソース

- [bcrypt npm パッケージ](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken npm パッケージ](https://www.npmjs.com/package/jsonwebtoken)

### 参考コード

```bash
npm install bcrypt jsonwebtoken cookie-parser
npm install -D @types/bcrypt @types/jsonwebtoken @types/cookie-parser
```

```typescript
// src/routes/auth.ts
import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET!;

// ── 登録 ───────────────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { email, name, password } = req.body;

    // 既存ユーザーチェック
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'このメールアドレスはすでに使われています' });
    }

    // ⚠️ パスワードのハッシュ化はバックエンドで行う!
    const hashedPassword = await bcrypt.hash(password, 10);

    // ユーザー作成
    const user = await prisma.user.create({
      data: { email, name, password: hashedPassword },
    });

    // ペットも一緒に作成
    await prisma.pet.create({ data: { userId: user.id } });

    res.status(201).json({ message: '登録完了', userId: user.id });
  } catch (error) {
    res.status(500).json({ error: 'サーバーエラー' });
  }
});

// ── ログイン ───────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // ユーザー検索
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // ※ 「ユーザーが存在しない」と「パスワードが違う」を区別しないのがセキュリティ上正しい
      return res.status(401).json({ error: 'メールアドレスまたはパスワードが間違っています' });
    }

    // パスワード検証 (入力値 vs DBのハッシュ)
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'メールアドレスまたはパスワードが間違っています' });
    }

    // JWT生成
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    // HttpOnly Cookie にセット (JavaScriptから読めない = XSS対策)
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // 本番はHTTPSのみ
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7日間
    });

    res.json({ message: 'ログイン成功', user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'サーバーエラー' });
  }
});

// ── 現在のユーザー情報取得 ────────────────────────────
router.get('/me', async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ error: 'ログインしてください' });

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true, createdAt: true }, // passwordは絶対に返さない
    });
    if (!user) return res.status(401).json({ error: 'ユーザーが見つかりません' });

    res.json(user);
  } catch (error) {
    res.status(401).json({ error: 'トークンが無効です' });
  }
});

// ── ログアウト ─────────────────────────────────────────
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'ログアウト成功' });
});

export default router;
```

```typescript
// src/middleware/auth.ts (保護されたルートで使う)
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ error: 'ログインが必要です' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    (req as any).userId = decoded.userId; // 後続の処理でuserIdを使えるようにする
    next(); // 次の処理へ進む
  } catch {
    res.status(401).json({ error: 'トークンが無効または期限切れです' });
  }
}
```

```typescript
// index.ts に cookie-parser を追加
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use('/api/auth', authRouter);
```

### ✅ 完了の定義

- [ ] `POST /api/auth/register` でユーザーが作成される
- [ ] `POST /api/auth/login` でJWTがCookieにセットされる
- [ ] `GET /api/auth/me` でログイン中のユーザー情報が返る
- [ ] パスワードがAPIレスポンスに含まれていない (`select` で除外)
- [ ] `POST /api/auth/logout` でCookieが削除される
- [ ] roadmap.md の Task 9 を ✅ に更新した

---

## Task 10: Streak CRUD APIを実装する

**📦 リポジトリ**: `streak-buddy/backend/`
**⏱ 目安**: 2〜3時間

### 🎯 この課題で学ぶこと

- 認証が必要なAPIの実装
- RESTful設計の実践
- チェックイン (streak+1) のビジネスロジック

### やること (Step by Step)

```
Step 1: routes/streaks.ts を認証必須に更新する

Step 2: ログイン中のユーザーのストリークだけ操作できるようにする

Step 3: チェックインエンドポイントを作る
  PATCH /api/streaks/:id/checkin
  → currentStreakを+1する
  → 連続チェックインかどうかを確認する
  → longestStreakを更新する
  → 経験値をペットに追加する
```

### 参考コード

```typescript
// src/routes/streaks.ts (認証必須版)
import { Router } from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// 全ルートに認証ミドルウェアを適用
router.use(authMiddleware);

const getUserId = (req: any): string => req.userId;

// 一覧取得 (自分のストリークだけ)
router.get('/', async (req, res) => {
  const userId = getUserId(req);
  const streaks = await prisma.streak.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
  res.json(streaks);
});

// 新規作成
router.post('/', async (req, res) => {
  const userId = getUserId(req);
  const { title, description } = req.body;
  const streak = await prisma.streak.create({
    data: { userId, title, description },
  });
  res.status(201).json(streak);
});

// チェックイン (今日の達成を記録する)
router.patch('/:id/checkin', async (req, res) => {
  const userId = getUserId(req);
  const streak = await prisma.streak.findFirst({
    where: { id: req.params.id, userId }, // 他人のは操作させない
  });
  if (!streak) return res.status(404).json({ error: 'Not found' });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastChecked = streak.lastCheckedDate ? new Date(streak.lastCheckedDate) : null;
  if (lastChecked) lastChecked.setHours(0, 0, 0, 0);

  // 今日すでにチェックイン済みかチェック
  if (lastChecked && lastChecked.getTime() === today.getTime()) {
    return res.status(400).json({ error: '今日はすでにチェックイン済みです' });
  }

  // 昨日チェックインしていれば連続, そうでなければリセット
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const isContinuous = lastChecked && lastChecked.getTime() === yesterday.getTime();

  const newStreak = isContinuous ? streak.currentStreak + 1 : 1;
  const newLongest = Math.max(newStreak, streak.longestStreak);

  const updated = await prisma.streak.update({
    where: { id: streak.id },
    data: {
      currentStreak: newStreak,
      longestStreak: newLongest,
      lastCheckedDate: new Date(),
    },
  });

  // ペットに経験値を追加 (+10 EXP)
  await prisma.pet.updateMany({
    where: { userId },
    data: { experience: { increment: 10 } },
  });

  res.json({ streak: updated, message: `${newStreak}日連続達成!` });
});

// 削除
router.delete('/:id', async (req, res) => {
  const userId = getUserId(req);
  const streak = await prisma.streak.findFirst({
    where: { id: req.params.id, userId },
  });
  if (!streak) return res.status(404).json({ error: 'Not found' });
  await prisma.streak.delete({ where: { id: streak.id } });
  res.status(204).send(); // 204 = No Content (削除成功)
});

export default router;
```

### ✅ 完了の定義

- [ ] 認証なしで `/api/streaks` にアクセスすると 401 が返る
- [ ] ログイン後に自分のストリークだけ見える
- [ ] チェックインで `currentStreak` が増える
- [ ] 同じ日に2回チェックインするとエラーになる
- [ ] roadmap.md の Task 10 を ✅ に更新した

---

## Task 11: Zodバリデーションを全APIに追加する

**📦 リポジトリ**: `streak-buddy/backend/` & `streak-buddy/frontend/`
**⏱ 目安**: 2〜3時間

### 🎯 この課題で学ぶこと

- Zodによるランタイムバリデーション
- TypeScriptの型をZodスキーマから自動生成する
- フロントとバックで同じスキーマを共有して型安全にする
- 422 Unprocessable Entity の適切な使い方

### 参考コード

```bash
# frontend と backend 両方にインストール
npm install zod
```

```typescript
// shared/schemas.ts (フロントとバック両方で使う型定義)
// または backend/src/schemas.ts に置いて frontendからimportする

import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email('有効なメールアドレスを入力してください'),
  name: z.string().min(1, '名前は必須です').max(50, '50文字以内で入力してください'),
  password: z.string().min(8, 'パスワードは8文字以上が必要です'),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const CreateStreakSchema = z.object({
  title: z.string().min(1, 'タイトルは必須です').max(100, '100文字以内で'),
  description: z.string().max(500, '500文字以内で').optional(),
});

// TypeScript型を自動生成 (二重定義不要!)
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type CreateStreakInput = z.infer<typeof CreateStreakSchema>;
```

```typescript
// バックエンドでのバリデーション
router.post('/register', async (req, res) => {
  const result = RegisterSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(422).json({
      error: 'バリデーションエラー',
      details: result.error.issues.map(i => ({
        field: i.path[0],
        message: i.message,
      })),
    });
  }
  const { email, name, password } = result.data; // ← 型安全なデータ
  // ... 残りの処理
});
```

### ✅ 完了の定義

- [ ] Zodスキーマが定義されている
- [ ] 必須フィールドが空の場合に 422 エラーが返る
- [ ] エラーメッセージがわかりやすい
- [ ] フロントとバックで同じスキーマを使っている
- [ ] roadmap.md の Task 11 を ✅ に更新した

---

---

# Phase 3: フルスタックに繋げる (4週間)

---

## Task 12: ReactフロントからAPIを呼び出す

**📦 リポジトリ**: `streak-buddy/frontend/`
**⏱ 目安**: 3〜4時間

### 🎯 この課題で学ぶこと

- 型安全なAPIクライアントの作り方
- async/awaitとエラーハンドリングのパターン
- CORS設定の実践 (フロントとバックが別ポート)
- withCredentialsでCookieを送る設定

### 参考コード

```typescript
// src/lib/api.ts (型安全なAPIクライアント)
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

async function request<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    credentials: 'include', // ← Cookieを自動で送る (認証に必須)
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `HTTP ${res.status}`);
  }

  // 204 No Content はJSONなし
  if (res.status === 204) return undefined as T;

  return res.json() as Promise<T>;
}

// 使いやすいヘルパー
export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'PATCH', body: body ? JSON.stringify(body) : undefined }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};

// 各エンドポイントの関数 (型安全)
import type { Streak, User } from '../types';

export const authApi = {
  register: (data: RegisterInput) => api.post<{ userId: string }>('/api/auth/register', data),
  login: (data: LoginInput) => api.post<{ user: User }>('/api/auth/login', data),
  me: () => api.get<User>('/api/auth/me'),
  logout: () => api.post<void>('/api/auth/logout', {}),
};

export const streaksApi = {
  list: () => api.get<Streak[]>('/api/streaks'),
  create: (data: CreateStreakInput) => api.post<Streak>('/api/streaks', data),
  checkin: (id: string) => api.patch<{ streak: Streak; message: string }>(`/api/streaks/${id}/checkin`),
  delete: (id: string) => api.delete<void>(`/api/streaks/${id}`),
};
```

---

## Task 13: TanStack Queryを導入する

**📦 リポジトリ**: `streak-buddy/frontend/`
**⏱ 目安**: 2〜3時間

### 🎯 この課題で学ぶこと

- なぜuseStateでAPIデータを管理するのが辛いのか
- TanStack Queryのキャッシュの仕組み
- `useQuery` と `useMutation` の使い分け
- 楽観的UI更新 (Optimistic Update) の概念

### 参考コード

```bash
npm install @tanstack/react-query
```

```typescript
// src/main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60, // 1分間はキャッシュを使う
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

```typescript
// src/hooks/useStreaks.ts (TanStack Query版カスタムフック)
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { streaksApi } from '../lib/api';

export function useStreaks() {
  return useQuery({
    queryKey: ['streaks'],
    queryFn: streaksApi.list,
  });
}

export function useCheckin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => streaksApi.checkin(id),
    onSuccess: () => {
      // チェックイン成功後にリストを自動更新
      queryClient.invalidateQueries({ queryKey: ['streaks'] });
      queryClient.invalidateQueries({ queryKey: ['pet'] });
    },
  });
}

export function useCreateStreak() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: streaksApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['streaks'] });
    },
  });
}
```

```typescript
// 使い方 (useStateで書いてたコードがこんなにシンプルになる)
function StreakList() {
  const { data: streaks, isLoading, error } = useStreaks();
  const checkin = useCheckin();

  if (isLoading) return <div>読み込み中...</div>;
  if (error) return <div>エラーが発生しました</div>;

  return (
    <ul>
      {streaks?.map(streak => (
        <li key={streak.id}>
          <span>{streak.title}</span>
          <span>🔥 {streak.currentStreak}日</span>
          <button
            onClick={() => checkin.mutate(streak.id)}
            disabled={checkin.isPending}
          >
            今日の達成を記録
          </button>
        </li>
      ))}
    </ul>
  );
}
```

### ✅ 完了の定義

- [ ] TanStack QueryがProviderで設定されている
- [ ] ストリーク一覧が `useQuery` で取得されている
- [ ] チェックインが `useMutation` で実装されている
- [ ] チェックイン後にリストが自動更新される
- [ ] roadmap.md の Task 13 を ✅ に更新した

---

## Task 14: ログイン画面〜ダッシュボードの認証フローを作る

**📦 リポジトリ**: `streak-buddy/frontend/`
**⏱ 目安**: 3〜4時間

### 🎯 この課題で学ぶこと

- 認証状態をContextで管理するパターン
- 保護されたルート (PrivateRoute) の実装
- ログイン → リダイレクトのフロー

### 参考コード

```typescript
// src/contexts/AuthContext.tsx
import { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../lib/api';
import type { User, LoginInput, RegisterInput } from '../types';

type AuthContextType = {
  user: User | null | undefined;
  isLoading: boolean;
  login: (data: LoginInput) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterInput) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ['me'],
    queryFn: authApi.me,
    retry: false, // 未ログインは再試行しない
  });

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['me'] }),
  });

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => queryClient.clear(), // 全キャッシュをクリア
  });

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login: async (data) => { await loginMutation.mutateAsync(data); },
      logout: async () => { await logoutMutation.mutateAsync(); },
      register: async (data) => { /* ... */ },
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('AuthProviderの中で使ってください');
  return ctx;
};
```

```typescript
// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>読み込み中...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
```

### ✅ 完了の定義

- [ ] ログインしていない状態でダッシュボードにアクセスするとログイン画面に飛ぶ
- [ ] ログイン成功後にダッシュボードに遷移する
- [ ] ページをリロードしてもログイン状態が保たれる (Cookieが残っているため)
- [ ] ログアウト後にログイン画面に戻る
- [ ] roadmap.md の Task 14 を ✅ に更新した

---

## Task 15〜19 (概要)

> Task 15〜19 は学習より実装比重が高くなります。
> 詰まったらClaude Codeに相談しながら進めましょう。

| Task | 内容 | 要点 |
|---|---|---|
| 15 | Streak UIの作成 | フォーム + 一覧 + チェックインボタン |
| 16 | ペット育成システム | EXP計算、レベルアップ、アイテム付与のロジック |
| 17 | Supabase移行 | SQLite → Supabase PostgreSQL + Supabase Auth |
| 18 | バックエンドデプロイ | Railway or Render に Express をデプロイ |
| 19 | フロントデプロイ + リンク追加 | Vercel + ポートフォリオにStreak Buddyカードを追加 |

---

---

# Phase 4: Next.js + 磨く (1ヶ月)

---

## Task 20: Next.js App Routerを学ぶ

**📦 リポジトリ**: `streak-buddy` (Next.js版に移行)
**⏱ 目安**: 1週間

### 🎯 この課題で学ぶこと

- Next.jsとReactの違い
- Server Components と Client Components の使い分け
- App Router のファイルベースルーティング
- SSRとSSGの違い

### やること

```
Step 1: Next.jsのチュートリアルを完走する
  https://nextjs.org/learn (公式、無料)
  → App Router版を選ぶ

Step 2: チュートリアルで作ったものを見ながら、
  Streak BuddyのフロントをNext.jsで書き直してみる

Step 3: Server ComponentsからSupabaseを直接呼ぶ体験をする
```

### 参考コード

```typescript
// Next.js App Router での基本構造
// app/
//   layout.tsx        → 全ページ共通レイアウト
//   page.tsx          → トップページ (/)
//   dashboard/
//     page.tsx        → /dashboard
//   streaks/
//     page.tsx        → /streaks
//     [id]/
//       page.tsx      → /streaks/:id
//   api/
//     streaks/
//       route.ts      → /api/streaks (APIルート)

// Server Component (デフォルト): DBを直接呼べる
// app/dashboard/page.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: streaks } = await supabase.from('streaks').select('*');
  // ← サーバーで実行されるのでAPIを経由しなくていい!

  return <StreakList streaks={streaks} />;
}

// Client Component: interactivityが必要なとき
// 'use client' を先頭に書く
'use client';
function StreakList({ streaks }: { streaks: Streak[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  // ...
}
```

---

## Task 23: 型安全なAPIクライアントを実装する

**📦 リポジトリ**: `streak-buddy`
**⏱ 目安**: 2〜3時間

### 🎯 この課題で学ぶこと

- fetchの`any`型問題を解決する
- ZodスキーマとTypeScript型の統合
- 実行時バリデーションの重要性

### 参考コード

```typescript
// Zodスキーマを使った型安全なfetch
import { z } from 'zod';

const StreakSchema = z.object({
  id: z.string(),
  title: z.string(),
  currentStreak: z.number(),
  longestStreak: z.number(),
  lastCheckedDate: z.string().nullable(),
});

const StreakArraySchema = z.array(StreakSchema);

// 型安全なfetch関数
async function safeFetch<T>(
  url: string,
  schema: z.ZodType<T>,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return schema.parse(data); // ← スキーマと合わなければここでエラー
}

// 使い方
const streaks = await safeFetch('/api/streaks', StreakArraySchema);
// streaks は Streak[] 型 (推論される)
```

---

## Task 24: ポートフォリオを最終整備する

**📦 リポジトリ**: `platypuscode-portfolio`
**⏱ 目安**: 1〜2時間

### やること

```
Step 1: Streak Buddy の公開URLが取得できたら、
  ポートフォリオの「Works」セクションにカードを追加する

Step 2: カードに含める情報:
  - アプリのスクリーンショット
  - タイトル: Streak Buddy
  - 説明: 習慣継続 × バーチャルペット育成アプリ
  - 使用技術: React, TypeScript, Node.js, PostgreSQL, Prisma, JWT認証
  - リンク: GitHubとライブデモのURL

Step 3: READMEを更新して開発経緯も書く
```

---

---

# 📌 使い方のヒント

```
1. タスクを1つずつ進める
   → 全部一度にやろうとしない。1タスク完了したら休憩

2. 詰まったら Claude Code に丸投げしない
   → まず自分で10分考える → わからなければ「何がわからないか」を言語化して聞く

3. 動いたらコミットする癖をつける
   → 小さい単位でコミットすることで、壊れてもすぐ戻れる

4. roadmap.md のステータスを更新する習慣をつける
   → 進捗の可視化がモチベーションになる
```

---

*Last updated: 2026-02-22*
