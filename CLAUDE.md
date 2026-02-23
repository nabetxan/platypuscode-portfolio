@docs/mentor.md

# platypuscode-portfolio

個人ポートフォリオサイト。制作物の紹介とプロフィールを掲載する。

## Tech Stack

- Framework: React 18 + TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS + CSS カスタムプロパティ（App.css / index.css）
- UI Library: MUI（Material UI）
- Routing: React Router v6
- Deploy: Vercel

## Project Structure

```
src/
├── App.tsx              # レイアウト全体（ヘッダー・ナビ・フッター）。<Outlet /> でページを差し込む
├── main.tsx             # エントリーポイント
├── Pages/               # ページ単位でフォルダ分け
│   ├── HomePage/        # トップページ（サマリー・ピックアップ作品）
│   ├── AboutPage/       # プロフィールページ
│   ├── PortfolioPage/   # 作品一覧・個別作品ページ（PortfolioContent.tsx）
│   └── ErrorPage/       # 404 など
├── Routes/
│   ├── Routes.tsx       # createBrowserRouter でルート定義
│   └── consts.tsx       # projects（作品データ）と menuPages（ナビ項目）を管理
└── img/                 # 画像ファイル（ロゴ・作品スクショなど）
```

## Key Conventions

- `src/components/` は存在しない。再利用コンポーネントを作る場合はここに追加する
- ファイル名は PascalCase（例: `MyComponent.tsx`）
- TypeScript strict モード。`any` は使わない
- 新しい作品を追加するときは `src/Routes/consts.tsx` の `projects` 配列に追記する

## Routing

- `/` → HomePage
- `/about` → AboutPage
- `/portfolio` → PortfolioPage（作品一覧）
- `/portfolio/:slug` → PortfolioContent（個別作品。App のレイアウト外に配置されている点に注意）

## Commands

```bash
npm run dev    # 開発サーバー起動 (http://localhost:5173)
npm run build  # 本番ビルド
npm run lint   # ESLint チェック
```