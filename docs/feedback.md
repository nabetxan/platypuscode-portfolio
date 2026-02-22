# 📋 フィードバック & 模範回答

> roadmap.md の回答に対する詳細なフィードバックです。
> 正直に答えてくれたことで、明確な学習優先度が見えました。

---

## 総評

**あなたの現在地**: 「フロントは動かせるが、フルスタックの繋がりが見えていない」段階

良いニュースがあります。TypeScript・React・DB・Authの「方向性」は概ね正しく掴めています。
問題は **繋がりの部分の知識が点在していて、線になっていない**こと。
ひとつのフルスタックアプリを作り切ることで、一気に線になります。

**作りたいと言っていた Streak + たまごっちアプリ → これが最高の教材です。**
このフィードバックはそこに向けた学習ロードマップになっています。

---

---

# カテゴリ 1: TypeScript 深化

## 評価: 🔶 基礎は固まっている。応用で穴がある。

---

### Q1-1: `interface` と `type` の違い

**あなたの回答**: 同じだと思っていた。typeと書けば通用するかと。

**フィードバック**: 半分正解です。実際のプロジェクトでは `type` だけでほぼ通用します。でも違いを知っておくと読めるコードが増えます。

**模範回答**:
```typescript
// interface: オブジェクトの「形」を定義するもの
// 宣言をあとから拡張(extends)できる
interface User {
  id: number;
  name: string;
}
interface AdminUser extends User {
  role: 'admin';
}

// type: より汎用的。ユニオン型、プリミティブ、タプルも定義できる
type ID = string | number;  // interfaceではこれができない
type Status = 'loading' | 'success' | 'error';  // ユニオン型

// 重要な違い: Declaration Merging (同名のinterfaceは自動でマージされる)
interface Window {
  myCustomProp: string;  // 既存のWindowインターフェースに追加できる
}
// typeでこれはできない
```

**使い分けの実用ルール**:
- ライブラリのAPIや、外から拡張される可能性があるものは `interface`
- ユニオン型、条件型など複雑な型は `type`
- **迷ったら `type` でOK** (Reactコンポーネントのpropsは `type Props = {...}` が主流)

---

### Q1-2: コードのエラーと修正

**あなたの回答**: エラーの理由は正しい！修正コードに細かいミスあり。

**フィードバック**:
- エラーの理由 → ✅ 正解 (`string` には `map()` がない)
- 修正の方向性 → ✅ 正解 (型を分けて処理する)
- 構文のミス → ❌ `typeof value = string` は代入になってしまう

**模範回答**:
```typescript
// 修正版: typeof と === を使う。stringリテラルで比較
function getLength(value: string | string[]): number | number[] {
  if (typeof value === 'string') {  // = ではなく === 、'string'はクォートが必要
    return value.length;
  } else {
    return value.map(v => v.length);
  }
}

// よりスマートな書き方 (Array.isArray を使う)
function getLength2(value: string | string[]): number | number[] {
  if (Array.isArray(value)) {
    return value.map(v => v.length);
  }
  return value.length;
}
```

---

### Q1-3: Partial, Pick, Omit

**あなたの回答**: ほぼ正解です！

**フィードバック**: 理解は正しい。実際に使う場面を知っておくと実践に繋がります。

**模範回答**:
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial<T>: 全プロパティをオプショナルにする
// → ユーザー情報を「一部だけ更新する」APIのリクエスト型に使う
function updateUser(id: number, data: Partial<User>) { ... }
updateUser(1, { name: 'Kaori' });  // emailとageは省略OK

// Pick<T, K>: 特定のプロパティだけ取り出す
// → 一覧表示に必要な情報だけ使いたいとき
type UserSummary = Pick<User, 'id' | 'name'>;
// → { id: number; name: string } だけになる

// Omit<T, K>: 特定のプロパティを除外する
// → パスワードやIDを除いたフォーム用の型
type UserForm = Omit<User, 'id'>;
// → idを除いた { name, email, age } になる
```

**あなたへのミッション**: Streak Appのユーザー更新APIを作るとき `Partial<User>` を使ってみてください。

---

### Q1-4: `unknown` と `any`

**あなたの回答**: ✅ 非常に良い理解です！

**フィードバック**: 正確に理解しています。一点補足:

**模範回答の補足**:
```typescript
// unknown: 「型がわからない」が、使う前に型チェックが必要
async function fetchData(): Promise<unknown> {
  const res = await fetch('/api/data');
  return res.json();
}
const data = await fetchData();
// data.name  // ❌ エラー: unknownは直接使えない
if (typeof data === 'object' && data !== null && 'name' in data) {
  console.log(data.name);  // ✅ 型チェック後は使える
}

// any: 型チェックを完全にスキップ
// → 「後でエラーになっても知らない」という宣言と同じ
```

---

### Q1-5: ジェネリック関数

**あなたの回答**: ✅ 正しく理解しています！

**補足**: `T | undefined` の `| undefined` が重要です。空配列のとき `arr[0]` は `undefined` を返すので、それを型で表現しています。

---

## 📚 カテゴリ1 学習リソース

- [TypeScript公式ハンドブック (日本語)](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html) — Utility Typesの章
- Matt Pocock (YouTube: `Total TypeScript`) — TypeScriptの「なぜ」がわかる最高のチャンネル

## 🔨 ミニプロジェクト: TypeScript 型パズル

```
タスク: Streak App のデータ型を TypeScript で定義する

以下の型を定義してください:
1. User型 (id, name, email, createdAt)
2. Streak型 (id, userId, title, currentStreak, longestStreak, lastCheckedDate)
3. Pet型 (id, userId, name, level, items: string[])
4. StreakForm型 (Streakからid/userId/currentStreak/longestStreakを除いたもの)
5. UserUpdate型 (UserからidとcreatedAtを除いて、全部オプショナルにしたもの)

→ これを src/types/index.ts に書いてみてください
→ 完成したらroadmap.mdのミニプロジェクト欄を 🔨 に更新
```

---

---

# カテゴリ 2: React アーキテクチャ

## 評価: 🔶 実用レベルに近い。カスタムフック習得で一段上がる。

---

### Q2-1: useEffect の空依存配列

**あなたの回答**: ✅ 正解です！

**補足**: "onMount" は正確には "コンポーネントが初めてDOMに追加されたとき" です。`[]` = 「依存なし = 変化するものがない = 最初の一回だけ実行」という論理です。

---

### Q2-2: Props Drilling

**あなたの回答**: ✅ 直感で正解しています！すごい。

**模範回答**:
```
Props Drilling = 祖先から孫コンポーネントへ、途中のコンポーネントが
必要もないのにpropsを中継し続けること

App → Layout → Sidebar → UserAvatar → userName (← これが欲しいのに)
という経路で、LayoutとSidebarはuserNameを使わないのに渡し続ける状態

解決策:
1. useContext → React標準のグローバル状態
2. Zustand / Jotai → 軽量な状態管理ライブラリ (今一番人気)
3. TanStack Query → サーバーデータはこれで管理
```

---

### Q2-3: useMemo と useCallback

**あなたの回答**: ✅ 正解！

**模範回答 (補足)**:
```typescript
// useMemo: 計算結果の値をキャッシュ
const filteredStreaks = useMemo(() => {
  return streaks.filter(s => s.currentStreak > 0);  // 重い計算
}, [streaks]);  // streaksが変わったときだけ再計算

// useCallback: 関数をキャッシュ
// → 子コンポーネントにonClickとして渡すときに特に重要
const handleDelete = useCallback((id: string) => {
  deleteStreak(id);
}, []);  // 毎回新しい関数インスタンスが作られるのを防ぐ

// ⚠️ 注意: なんでもuseMemo/useCallbackにするのは逆効果
// → 本当にパフォーマンス問題が出たときに使う
```

---

### Q2-4: React Router hooks

**あなたの回答**: ✅ 全部正解です！

**模範回答 (補足)**:
```typescript
// useParams: URLの動的パラメータを取得
// /streaks/:id  にアクセスしたとき
const { id } = useParams<{ id: string }>();

// useNavigate: プログラムでページ遷移
const navigate = useNavigate();
navigate('/dashboard');  // 遷移
navigate(-1);  // ブラウザの「戻る」と同じ

// useLocation: 現在のURLの情報
const location = useLocation();
location.pathname;  // '/streaks/123'
location.search;    // '?filter=active'
location.state;     // navigate時に渡したstateオブジェクト
```

---

### Q2-5: カスタムフック

**あなたの回答**: 作ったことない → 次に習得すべき最重要スキルです！

**模範回答**:
```typescript
// カスタムフックとは: useXxx という名前のただの関数
// → 複数コンポーネントで共通のロジックを再利用するために作る

// 例: APIからStreakを取得するロジックをどこでも使いたい
function useStreaks(userId: string) {
  const [streaks, setStreaks] = useState<Streak[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/users/${userId}/streaks`)
      .then(res => res.json())
      .then(data => setStreaks(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  return { streaks, loading, error };
}

// 使う側はシンプルになる
function StreakList({ userId }: { userId: string }) {
  const { streaks, loading, error } = useStreaks(userId);
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  return <ul>{streaks.map(s => <StreakItem key={s.id} streak={s} />)}</ul>;
}
```

---

### Q2-6: ポートフォリオの公開

**あなたの回答**: 公開の仕方がわからない。

**→ これはカテゴリ8のミニプロジェクトで今すぐ解決します！**

---

## 🔨 ミニプロジェクト: カスタムフックを作る

```
タスク: useLocalStorage カスタムフックを作る

作成するもの: src/hooks/useLocalStorage.ts

仕様:
- localStorage への読み書きをラップするフック
- 型パラメータ T を使う (ジェネリック!)
- const [value, setValue] = useLocalStorage('key', defaultValue) で使える

→ これを作れれば TypeScript + React + カスタムフックの3つが一度に学べます
→ Streak App でログインユーザー情報の保持に使えます
```

---

---

# カテゴリ 3: HTTP & API 設計

## 評価: ❌ 優先度高。ここが全ての繋がりの核心。

---

### Q3-1: HTTPメソッド

**あなたの回答**: 惜しい！PUTとPATCHが混同されています。

**模範回答**:
```
GET    → データを取得 (URLにデータを含める、べき等)
POST   → 新規作成 (リクエストボディにデータを含める)
PUT    → リソースを丸ごと置き換える (全フィールド必要)
PATCH  → リソースの一部だけ更新 (変更したいフィールドだけでOK)
DELETE → 削除

例: Streak App での使い方
GET    /api/streaks        → 一覧取得
POST   /api/streaks        → 新規ストリーク作成
GET    /api/streaks/:id    → 特定のストリーク取得
PATCH  /api/streaks/:id    → ストリークのチェック (currentStreakを+1するだけ)
DELETE /api/streaks/:id    → 削除
```

---

### Q3-2: HTTPステータスコード

**あなたの回答**: 200, 404, 500は正解。もう少し知っておくと実践で迷わなくなります。

**模範回答**:
```
2xx (成功)
  200 OK          → 成功 (GETやPATCHの成功)
  201 Created     → 作成成功 (POSTの成功)
  204 No Content  → 成功したがレスポンスボディなし (DELETEの成功)

3xx (リダイレクト)
  301 Moved Permanently → URLが恒久的に変わった

4xx (クライアントのミス)
  400 Bad Request   → リクエストの形式が間違っている
  401 Unauthorized  → 認証されていない (ログインしてください)
  403 Forbidden     → 認証されているが権限がない (あなたはこれを見れない)
  404 Not Found     → リソースが存在しない
  422 Unprocessable → バリデーションエラー

5xx (サーバーのミス)
  500 Internal Server Error → サーバー側でエラー
  503 Service Unavailable   → サーバーが過負荷や停止中
```

---

### Q3-3: REST API

**あなたの回答**: わからない

**模範回答**:
```
REST (Representational State Transfer) = APIの設計スタイル（ルール）

RESTfulな設計の原則:
1. URLはリソース(名詞)で表す → /users, /streaks, /pets
   ❌ 悪い例: /getUsers, /deleteStreak, /createPet
   ✅ 良い例: GET /users, DELETE /streaks/:id, POST /pets

2. HTTPメソッドで操作を表す → GET=取得, POST=作成, DELETE=削除

3. ステートレス → サーバーはクライアントの「状態」を覚えない
   → 毎回のリクエストに必要な情報を全部含める (JWTトークンなど)

4. 階層構造 → /users/:id/streaks (ユーザーのストリーク一覧)

あなたのStreak Appで実践するとこうなる:
GET    /api/users/:id/streaks     → ユーザーのストリーク一覧
POST   /api/users/:id/streaks     → 新規ストリーク作成
PATCH  /api/streaks/:id/checkin   → チェックイン
GET    /api/users/:id/pet         → ペット情報取得
```

---

### Q3-4: fetch / axios エラーハンドリング

**あなたの回答**: わからない

**模範回答**:
```typescript
// fetchの罠: 404や500でもエラーにならない! response.ok を確認が必要
async function fetchStreaks(userId: string) {
  try {
    const response = await fetch(`/api/users/${userId}/streaks`);

    if (!response.ok) {  // ← これが重要
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // ネットワークエラーや上記のthrowがここに来る
    console.error('Fetch failed:', error);
    throw error;  // コンポーネント側でハンドリングできるように再throw
  }
}

// axiosはこれを自動でやってくれる (4xx/5xxで自動的にエラーになる)
import axios from 'axios';
const { data } = await axios.get(`/api/users/${userId}/streaks`);
// → 404なら自動的にcatchに行く (fetchより扱いやすい)
```

---

### Q3-5: CORS

**あなたの回答**: cross origin、よくわからない

**模範回答**:
```
CORS (Cross-Origin Resource Sharing) が起きる理由:
→ ブラウザのセキュリティ機能で、「異なるオリジン」からのリクエストをブロックする

オリジン = プロトコル + ドメイン + ポート番号
  http://localhost:5173  (Vite開発サーバー)
  http://localhost:3000  (Expressサーバー)
  → これは「異なるオリジン」なのでCORSエラーが起きる!

解決方法: サーバー側でCORSを許可する
// Express
import cors from 'cors';
app.use(cors({ origin: 'http://localhost:5173' }));

// 本番では
app.use(cors({ origin: 'https://yourdomain.com' }));

フロントは何もしなくていい → サーバー側の設定
```

---

### Q3-6: GraphQL

**あなたの回答**: 知らない → 今は知らなくてOKです

**一言で言うと**: REST APIは「お店のメニューから注文する」。GraphQLは「好きな材料を指定して料理を作ってもらう」。
今のあなたにはRESTで十分。Next.js + Supabaseを使い始めたら自然に触れます。

---

## 🔨 ミニプロジェクト: APIを叩いてUIに表示する

```
タスク: 公開APIからデータを取得してReactで表示する

使うAPI: https://api.github.com/users/{username}
(GitHubの公開API、登録不要)

作るもの: src/components/GitHubProfile.tsx
- inputでGitHubユーザー名を入力
- 「検索」ボタンで /api/github/users/{name} に fetch
- loading中はスピナーを表示
- エラー時はエラーメッセージを表示
- 成功時はアバター・名前・フォロワー数を表示

→ fetch + エラーハンドリング + loading状態 の3つが練習できます
```

---

---

# カテゴリ 4: バックエンド基礎

## 評価: 🔶 概念は掴めている。実装経験を積む段階。

---

### Q4-1: サーバーとフロント/バックの役割

**あなたの回答**: ✅ 正確に理解しています！

---

### Q4-3: Express コードの解読

**あなたの回答**: 「渡されたidをuserIdとして返す？」→ 正解ですが、もう少し詳しく言えると◎

**模範回答**:
```javascript
// このコードが何をしているか:
// 1. GET リクエストを /users/:id というURLパターンで受け付ける
// 2. URLの :id 部分を req.params.id で取り出す
// 3. { userId: id } というJSONをレスポンスとして返す

// 例: GET /users/42 というリクエストが来たら
//   → req.params = { id: '42' }
//   → res.json({ userId: '42' }) が返る

app.get('/users/:id', (req, res) => {
  const { id } = req.params;  // ← URLから取り出す
  // 本来はここでDBからユーザーを検索する:
  // const user = await db.user.findUnique({ where: { id: Number(id) } });
  // res.json(user);
  res.json({ userId: id });  // ← 今は簡略化してそのまま返している
});
```

---

### Q4-4: ミドルウェア

**あなたの回答**: 「パスワードハッシュとか、フロントとバックエンドの間の処理」→ 方向性は正しいが、少し違います。

**模範回答**:
```javascript
// ミドルウェアとは: リクエストが来てからレスポンスを返す前に実行される処理

// 代表的なExpressミドルウェア:
app.use(express.json());           // リクエストボディをJSONとして解析
app.use(cors());                   // CORSを許可
app.use(morgan('dev'));            // リクエストのログを出力
app.use(authMiddleware);           // 認証チェック (自作)

// 自作ミドルウェアの例: JWTトークンを確認する認証ミドルウェア
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // JWTを検証して...
  next();  // ← 次の処理に進む (これがないと止まってしまう)
}

// パスワードのハッシュはミドルウェアではなく、
// バックエンドのビジネスロジック (サービス層) でやります
```

---

### Q4-5: 環境変数

**あなたの回答**: 「開発と本番で参照先を変えたいとき」→ 正解ですが、もう一つ重要な理由があります。

**模範回答**:
```bash
# .env ファイルを使う理由は2つ:

# 1. 秘密情報をコードに書かない (Gitにコミットしない)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="super-secret-key-dont-share"
STRIPE_SECRET_KEY="sk_live_xxxx"
# → これらをコードに直書きしてGitHubにpushすると大惨事

# 2. 環境ごとに設定を変える
# .env.development
DATABASE_URL="postgresql://localhost/myapp_dev"
# .env.production
DATABASE_URL="postgresql://prod-server/myapp_prod"

# .gitignore に必ず追加する:
.env
.env.local
.env.production
```

---

## 🔨 ミニプロジェクト: 最初のAPIサーバーを作る

```
タスク: Streak App のバックエンドを Node.js + Express で作る

ステップ:
1. npm init + Express + TypeScript のセットアップ
2. .env ファイルで PORT を管理
3. 以下のエンドポイントを作成:
   GET  /api/health         → { status: 'ok' } を返す
   GET  /api/streaks        → ダミーの配列を返す
   POST /api/streaks        → リクエストボディを受け取ってそのまま返す

→ フロントからfetchで叩いて繋がれば大きな一歩!
```

---

---

# カテゴリ 5: データベース

## 評価: 🔶 SQLの読み書きはできる。設計の理解を深めたい。

---

### Q5-1: データベースが必要な理由

**あなたの回答**: 「クエリができるから」→ 正しいですが、もっと根本的な理由があります。

**模範回答**:
```
ファイル (JSON, CSV) との違い:
1. 同時アクセス → 複数ユーザーが同時に読み書きしても壊れない
2. 検索・並び替え → インデックスで高速に検索できる
3. トランザクション → 「全部成功するか、全部失敗するか」の保証
   (口座から引き落とし中にサーバーが落ちても残高がおかしくならない)
4. リレーション → テーブル間の関連を管理できる
5. スケール → ファイルは大きくなると遅くなるが、DBは対応できる
```

---

### Q5-2: SQL vs NoSQL

**あなたの回答**: SQLの説明だけでNoSQLが抜けていました。

**模範回答**:
```
SQL (リレーショナル): PostgreSQL, MySQL, SQLite
→ テーブルと列で構造化されたデータ
→ テーブル間のリレーション (JOIN) が強力
→ データの整合性が重要なとき (金融、ユーザー管理)
→ Streak Appに向いている ✅

NoSQL: MongoDB, Redis, DynamoDB
→ JSONのような柔軟なドキュメント形式
→ スキーマが変わりやすいデータに向く
→ キャッシュ (Redis) やリアルタイムデータに向く
→ Firestore (Firebase) もNoSQL

あなたのStreak App → PostgreSQL + Prisma が最適
```

---

### Q5-3: SQLの読み取り

**あなたの回答**: ✅ 正確に読めています！JOINの理解も正しい。

**補足**: `orders.total > 1000` は「合計が1000以上の注文」です。金額なら正しい読み方です。

---

### Q5-4: ORM

**あなたの回答**: Prisma使ったことある。ORMの意味は不明。

**模範回答**:
```
ORM = Object-Relational Mapper
→ SQLを書かずに、TypeScriptのコードでDBを操作できるようにするライブラリ

// SQLを直接書く場合:
const result = await db.query('SELECT * FROM streaks WHERE user_id = $1', [userId]);

// PrismaのORM:
const streaks = await prisma.streak.findMany({
  where: { userId: userId }
});
// → これがSQLに変換される。型も自動でつく!

Prismaのもう一つの役割: スキーマ定義
// prisma/schema.prisma
model Streak {
  id            String   @id @default(cuid())
  userId        String
  title         String
  currentStreak Int      @default(0)
  user          User     @relation(fields: [userId], references: [id])
}
```

---

### Q5-5: Supabase / Firebase

**あなたの回答**: ✅ 正しく理解しています！

**補足**: Supabase は Firebase の「Postgres版」で、SQLが使えます。Streak Appには Supabase の方が向いています。

---

## 🔨 ミニプロジェクト: Prisma + SQLite でデータを永続化

```
タスク: バックエンドにPrismaを追加してStreakをDBに保存する

ステップ:
1. Prisma + SQLite セットアップ (SQLiteはファイルDB、インストール不要)
2. User, Streak, Pet のスキーマを定義
3. APIエンドポイントをDBから読み書きするように更新
4. prisma studio でデータを視覚的に確認

→ ORMの全体像が掴めます
```

---

---

# カテゴリ 6: 認証・セキュリティ

## 評価: 🔶 方向性は正しい。JWTの理解が最重要。

---

### Q6-1: Authentication vs Authorization

**あなたの回答**: ✅ 完璧です！この理解は大切。

---

### Q6-2: Cookie vs LocalStorage

**あなたの回答**: 「Cookieに保存、有効期限が設定できるから」→ 正解ですが、セキュリティの理由がより重要です。

**模範回答**:
```
LocalStorageの問題点:
→ JavaScript でいつでも読めてしまう
→ XSS攻撃 (悪意のあるスクリプトが実行されると) でトークンが盗まれる

Cookieの利点:
→ HttpOnly属性: JavaScriptから読めない = XSS対策
→ SameSite属性: 別サイトからのリクエストに自動でCookieを付けない = CSRF対策
→ Secure属性: HTTPSのみで送信

// Cookieの設定例 (Express)
res.cookie('token', jwtToken, {
  httpOnly: true,   // JSから読めない
  secure: true,     // HTTPSのみ
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000  // 7日間
});
```

---

### Q6-3: JWT

**あなたの回答**: 「JSONの形で持っておくデータ？」→ 方向性は合っていますが、「署名」が重要です。

**模範回答**:
```
JWT = JSON Web Token
→ サーバーが署名した、ユーザー情報を含む文字列トークン

構造: header.payload.signature (3つのBase64をドットでつなげたもの)
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjMifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

payload に含む情報の例:
{
  "userId": "123",
  "email": "kaori@example.com",
  "exp": 1234567890  // 有効期限
}

なぜJWTが便利か:
→ サーバーはDBを見なくても「このトークンが正当か」を署名で確認できる
→ サーバーレス・マイクロサービスに向いている

使い方:
// ログイン成功時: JWTを生成してCookieに入れる
const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

// 以降のリクエスト: Cookieから取り出して検証
const decoded = jwt.verify(token, process.env.JWT_SECRET);
// → decoded.userId でユーザーを特定できる
```

---

### Q6-4: OAuth

**あなたの回答**: 「認証をGoogleに任せる」→ 正しい直感！仕組みを知っておくと実装できます。

**模範回答**:
```
OAuth 2.0 の「Googleでログイン」の流れ:

1. ユーザーが「Googleでログイン」をクリック
2. あなたのアプリがGoogleのログイン画面にリダイレクト
   → URL: https://accounts.google.com/o/oauth2/auth?client_id=YOUR_ID&...
3. ユーザーがGoogleでログイン・許可
4. Googleがあなたのアプリに「認可コード」を返す
5. あなたのサーバーがその「認可コード」でGoogleにアクセストークンを要求
6. Googleがアクセストークンを返す
7. アクセストークンでGoogleからユーザー情報 (name, email, avatar) を取得
8. そのemailでDBのユーザーを検索/作成 → JWTを発行

実装では NextAuth.js や Supabase Auth を使うと
この複雑な流れを数行で実装できます
```

---

### Q6-5: パスワードのハッシュ

**あなたの回答**: 「危ないからハッシュする」→ 正解。なぜ危ないのかと、「ソルト」を知っておくと完璧。

**模範回答**:
```
なぜそのまま保存しないか:
→ DBが漏洩したとき、全ユーザーのパスワードが丸見えになる
→ 多くの人が複数サービスで同じパスワードを使うので被害が広がる

ハッシュとは:
→ 元に戻せない一方向の変換 (SHA-256, bcryptなど)
→ 保存するのはハッシュ値。ログイン時に入力値をハッシュして比較

bcrypt + ソルトが安全な理由:
→ ソルト = ランダムな文字列をパスワードに付けてからハッシュ
→ 同じパスワードでも毎回違うハッシュ値になる
→ 「レインボーテーブル攻撃」を防ぐ

// bcryptの使い方
import bcrypt from 'bcrypt';
// 保存時
const hash = await bcrypt.hash(password, 10);  // 10はコスト係数
// ログイン時
const isValid = await bcrypt.compare(inputPassword, storedHash);
```

---

## 🔨 ミニプロジェクト: ログイン機能を実装する

```
タスク: メールアドレス + パスワードでログインできるAPIを作る

エンドポイント:
POST /api/auth/register → メール・パスワードでユーザー登録
POST /api/auth/login    → ログイン → JWTをCookieにセット
GET  /api/auth/me       → 認証済みユーザーの情報を返す (要JWT)
POST /api/auth/logout   → Cookieを削除

使うライブラリ:
- bcrypt (パスワードハッシュ)
- jsonwebtoken (JWT生成・検証)
- cookie-parser (CookieをExpressで扱う)
```

---

---

# カテゴリ 7: フロント↔バックエンド連携

## 評価: ❌ 概念はあるが、重要な誤解がある。最優先で修正を。

---

### Q7-1: ログインの流れ

**あなたの回答**: 「パスワードをフロントでハッシュして送る」→ **これは重大な誤解です！**

**模範回答**:
```
正しいログインの流れ:

フロントエンド:
1. ユーザーがメールアドレスとパスワードを入力
2. HTTPS経由でそのまま バックエンドに送信
   ※ パスワードをフロントでハッシュしてはいけない!
   → ハッシュ値がパスワードと同じになってしまう (ハッシュを盗めばログインできる)

バックエンド:
3. DBからメールアドレスでユーザーを検索
4. bcrypt.compare(送られたパスワード, DBのハッシュ) で比較
5. 一致すれば → JWTを生成 → HttpOnly Cookieにセット
6. 不一致なら → 401エラーを返す

フロントエンド:
7. 成功 → ダッシュボードに遷移
8. 以降のリクエストは Cookie が自動で送られる (フロントは何もしなくていい)

重要: HTTPSが「通信の暗号化」をするので、
フロントでのハッシュは不要 (むしろ有害)
```

---

### Q7-2: API状態管理

**あなたの回答**: loading/error/dataのパターンは正しく理解しています。

**模範回答 (コードで表現)**:
```typescript
// 自分でuseStateで管理する場合 (基礎)
function StreakList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [streaks, setStreaks] = useState<Streak[]>([]);

  useEffect(() => {
    fetch('/api/streaks')
      .then(res => res.json())
      .then(data => setStreaks(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <ul>{streaks.map(s => ...)}</ul>;
}
```

---

### Q7-3: TanStack Query / SWR

**あなたの回答**: 「TanStack QueryはReact Routerのこと？」→ 全く別物です！

**模範回答**:
```typescript
// TanStack Query (旧React Query) = サーバーデータのキャッシュ管理ライブラリ
// React Routerとは無関係

// Q7-2のコードをTanStack Queryで書き直すと:
import { useQuery } from '@tanstack/react-query';

function StreakList() {
  const { data: streaks, isLoading, error } = useQuery({
    queryKey: ['streaks'],
    queryFn: () => fetch('/api/streaks').then(res => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return <ul>{streaks?.map(s => ...)}</ul>;
}

// TanStack Queryが自動でやってくれること:
// ✅ キャッシュ (同じデータを何度もfetchしない)
// ✅ 再フォーカス時に自動更新
// ✅ loading/error状態管理
// ✅ ページネーション・無限スクロール
// → Streak Appで使うと開発が大幅に楽になる!
```

---

### Q7-4: フロント + バックエンドの二重バリデーション

**あなたの回答**: 「Code injectionのため」→ 正しい。もう少し広い視点も持てると◎

**模範回答**:
```
フロントバリデーション (UXのため):
→ 入力ミスをすぐフィードバック (送信前に赤枠でエラー表示)
→ ネットワークリクエストを減らす

バックエンドバリデーション (セキュリティのため):
→ フロントのバリデーションはブラウザの開発者ツールで簡単に無効化できる
→ APIを直接叩く攻撃者はフロントを経由しない
→ SQLインジェクション、XSS、不正データ挿入を防ぐ

原則: 「バックエンドを信頼の最後の砦にする」
フロントのバリデーションは「利便性」、バックエンドは「必須」
```

---

## 🔨 ミニプロジェクト: フロントとバックをつなぐ

```
タスク: React フロントから自作Express APIにデータを送受信する

やること:
1. フロントに「新しいストリークを作成」フォームを作る
2. 送信時にPOST /api/streaks へfetchする
3. 成功後にGET /api/streaks でリストを再取得して表示する
4. loading/error/成功の状態を適切に表示する

発展: TanStack Queryを使って書き直してみる
```

---

---

# カテゴリ 8: 開発環境・DevOps

## 評価: 🔶 GUI活用は良い判断。即座に解決すべきはデプロイ。

---

### Q8-1: Git

**あなたの回答**: VSCode GUIで操作している。

**フィードバック**: GUIを使いこなすのは全く問題ありません。ただ、概念として知っておくとGUIも正確に使えます。

**知っておくべきブランチ戦略**:
```
GitHub Flow (シンプルで実用的):
main ─────────────────────────────→ 本番デプロイ
      └─ feature/streak-checkin ─→ PRでmainにマージ
      └─ fix/login-bug ──────────→ PRでmainにマージ

ルール:
- mainには直接コミットしない
- 機能・バグ修正ごとにブランチを切る
- PRを通してmainにマージ
- mainにマージしたら自動デプロイ (CI/CD)
```

---

### Q8-2: npm vs npx

**あなたの回答**: `npm` はpackage管理、`npx` は Node.jsの実行？

**模範回答**:
```bash
npm = Node Package Manager
→ パッケージのインストール・管理
npm install react        # node_modulesにインストール
npm run dev             # package.jsonのscriptsを実行

npx = Node Package Execute
→ インストールせずにパッケージを一時的に実行
npx create-vite@latest  # create-viteをインストールせずに実行
npx prisma studio       # グローバルにインストールしなくてもOK
```

---

### Q8-3: Vite

**あなたの回答**: 「コードをそのままコンパイルする？」→ 近いです。

**模範回答**:
```
Viteが速い理由:

開発時:
→ esbuild (Go製) で事前バンドル → webpack の100倍速い
→ ESモジュールをブラウザにそのまま渡す → バンドルしない
→ ファイルを変更したとき、変更したファイルだけ更新 (HMR)

create-react-app (webpack) との違い:
→ CRAはプロジェクト全体を毎回バンドルするので大きくなると遅い
→ ViteはNative ES Modulesを使うので変更分だけ即時反映
```

---

### Q8-4: デプロイ

**あなたの回答**: 「サーバーに渡す形にコンパイルする」→ 半分正解。デプロイは「公開すること」まで含みます。

**模範回答**:
```
デプロイ = アプリをインターネットで使えるようにすること

フロントエンドのデプロイ (Vercel の場合):
1. npm run build → dist/ フォルダに静的ファイルが生成される
2. Vercel が dist/ をCDNにアップロード
3. https://yourapp.vercel.app でアクセスできるようになる

バックエンドのデプロイ:
→ Railway, Render, Fly.io などが簡単
→ サーバーが常に動き続ける環境が必要
```

**→ このポートフォリオをVercelにデプロイするのが今すぐできるミニプロジェクトです。**

---

## 🔨 ミニプロジェクト: このポートフォリオを今すぐ公開する

```
タスク: Vercelにポートフォリオをデプロイする

手順:
1. https://vercel.com にGitHubアカウントでサインアップ
2. "New Project" → GitHubのリポジトリを選択
3. Framework: Vite を選択 (自動検出される場合も)
4. Deploy ボタンを押す → 数分で公開完了!

→ これで履歴書に書けるURLができます
→ GitHubのREADMEにもURLを追加しましょう
```

---

---

# カテゴリ 9: AI駆動開発

## 評価: 🔶 基礎的な使い方はできている。すぐに使える強力なテクニックが多数あります。

---

### Q9-2: CLAUDE.md

**あなたの回答**: 「Claudeに勝手に実行していいコマンドを書くファイル？」→ それは `settings.json` の `allowedTools`。CLAUDE.mdは別のものです。

**模範回答**:
```markdown
CLAUDE.md = プロジェクトの「コンテキストメモリ」ファイル

会話のたびに「このプロジェクトはTypeScript + React + Viteです」と
説明しなくていいように、プロジェクトのルールを書いておくファイル。

例: CLAUDE.md の内容
---
# Streak Pet App (Streak Buddy)

## Stack
- Frontend: React 18 + TypeScript + Vite + Tailwind CSS
- Backend: Node.js + Express + TypeScript
- DB: PostgreSQL + Prisma
- Auth: JWT + bcrypt

## Conventions
- コンポーネントは src/components/ に
- カスタムフックは src/hooks/ に
- APIクライアントは src/lib/api.ts に
- エラーハンドリングは必ずtry/catchで

## Commands
- npm run dev → 開発サーバー起動
- npm run build → ビルド
- npx prisma studio → DB GUI
---

→ これを書いておくと毎回説明不要になる
→ 今すぐこのポートフォリオに作ってみましょう!
```

---

### Q9-5: 効果的なプロンプトの書き方

**あなたの回答**: わからない

**模範回答: すぐ使える7つのテクニック**:

```
1. コンテキストを与える (一番重要)
   ❌ 「ログインを作って」
   ✅ 「TypeScript + Express + Prisma + JWTを使って、
       POST /api/auth/login エンドポイントを作ってください。
       パスワードはbcryptで検証し、成功したらHttpOnly CookieにJWTをセットします」

2. 制約を明示する
   「既存のファイル構造を変えないで」
   「エラーハンドリングを必ず入れて」
   「型をanyにしないで」

3. 出力形式を指定する
   「まずコードを書く前に実装計画を箇条書きで教えて」

4. 段階的に進める
   「まずAPIの設計だけ確認させて、OKなら実装して」

5. 失敗例を教える
   「こういうエラーが出てます: [エラー文]
    試したこと: [やったこと]」

6. スコープを絞る
   「まずバックエンドのAPIだけ作って、フロントは後で」

7. Claude Codeでは /plan を使う
   → 実装前に設計を承認するワークフロー
```

---

### 今すぐやるべき Claude Code 活用テクニック

```bash
# 1. CLAUDE.md を作る (今日やる)
touch CLAUDE.md
# プロジェクトのスタックとルールを書く

# 2. /plan モードで始める
# 実装の前に「まずこの設計で合っていますか?」と確認してもらう

# 3. スクリーンショットを使う
# エラーのスクリーンショットをそのまま貼り付けると速い

# 4. ファイルを指定して質問する
# 「src/App.tsx の useEffect を見て、何か問題があれば指摘して」

# 5. Claude Code の /memory (/remember) を活用
# 「私はTypeScriptをstrictモードで書く」などの好みを覚えさせる
```

---

## 🔨 ミニプロジェクト: CLAUDE.md を今すぐ作る

```
タスク: このポートフォリオに CLAUDE.md を作る

含める内容:
1. プロジェクトの概要 (何を作っているか)
2. 技術スタック (TypeScript, React, Vite, Tailwind)
3. ファイル構造の説明
4. コーディング規則 (型をanyにしない、など)
5. よく使うコマンド

→ 次回からClaudeが毎回プロジェクトを理解した状態でスタートします
```

---

---

# カテゴリ 10: モダンエコシステム

## 評価: 🔶 Tailwindとテストは実践済み。Next.jsが次の大きな一歩。

---

### Q10-1: Next.js

**あなたの回答**: わからない

**模範回答**:
```
Next.js = React の「フルスタックフレームワーク」

React との違い:
- React: フロントだけ。バックエンドは別に作る必要がある
- Next.js: フロントとバックエンド(API)を一緒に作れる

Next.jsの主な機能:
1. SSR (Server-Side Rendering)
   → ページをサーバーで事前に描画してからブラウザに送る
   → SEOに強い、初期表示が速い

2. SSG (Static Site Generation)
   → ビルド時にHTMLを生成 → 激速、CDNに乗せるだけ
   → ポートフォリオサイトに向いている

3. App Router + Server Components (最新)
   → コンポーネントをサーバーで実行できる
   → DBに直接アクセスできるコンポーネントが書ける!

なぜ重要か:
→ 現在の転職市場でNext.jsは必須スキルに近い
→ Streak Appを本番で公開するならNext.js + Supabaseが最速ルート
```

---

### Q10-2: Tailwind CSS

**あなたの回答**: 使っている。

**模範回答の補足**:
```
CSS Modulesとの違い:
- CSS Modules: クラス名が衝突しないように名前空間を分ける
  styles.module.css を作って import styles from './Button.module.css'
- Tailwind: ユーティリティクラスをHTMLに直接書く。CSSファイルは書かない

Tailwindの向き不向き:
✅ 向いている: コンポーネントベースのReactアプリ
❌ 向いていない: 複雑なアニメーション、テーマの完全カスタマイズ
```

---

### Q10-3: Zod

**あなたの回答**: 使ってみたい

**模範回答**:
```typescript
// Zod = TypeScriptファーストのバリデーションライブラリ
import { z } from 'zod';

// スキーマ定義
const CreateStreakSchema = z.object({
  title: z.string().min(1, '必須です').max(100, '100文字以内で'),
  description: z.string().optional(),
  targetDays: z.number().int().min(1).max(365),
});

// TypeScript型を自動生成
type CreateStreakInput = z.infer<typeof CreateStreakSchema>;

// バリデーション
const result = CreateStreakSchema.safeParse(requestBody);
if (!result.success) {
  return res.status(422).json({ errors: result.error.issues });
}
const data = result.data;  // 型安全なデータ

// → フォームバリデーション (React Hook Form + Zod) でも使える
// → APIのリクエストバリデーションでも使える
```

---

### Q10-4: テスト

**あなたの回答**: ✅ Jest と Playwright の経験あり。目的も正しく理解。

---

### Q10-5: 型安全なAPIクライアント

**あなたの回答**: わからない

**模範回答**:
```typescript
// 問題: fetchは型情報がない
const res = await fetch('/api/streaks');
const data = await res.json();  // data は any 型!
data.nonExistentField;  // エラーにならない → 実行時にバグになる

// 解決策1: 型アサーション (最小限)
const data = await res.json() as Streak[];

// 解決策2: Zodで実行時バリデーション + 型生成
const StreakArraySchema = z.array(StreakSchema);
const data = StreakArraySchema.parse(await res.json());
// → スキーマと合わなければエラーになる
// → data は Streak[] 型になる

// 解決策3: tRPC (最先端)
// → フロントとバックエンドで型を完全に共有する仕組み
// → APIの関数をフロントで直接呼ぶような感覚で書ける
// → Next.js + tRPC + Zod が最強の組み合わせ
```

---

## 🔨 ミニプロジェクト: Zodを導入する

```
タスク: バックエンドAPIにZodバリデーションを追加する

やること:
1. npm install zod
2. CreateStreakSchema を定義
3. POST /api/streaks のリクエストボディをZodで検証
4. バリデーションエラー時に422 + エラーの詳細を返す
5. フロントのフォームでも同じスキーマを使って二重定義をなくす

→ フロントとバックエンドで型を共有する感覚がつかめます
```

---

---

# 🗓️ 推奨学習ロードマップ (概要)

> 詳細な全タスクリストは **[`docs/learning-plan.md`](./learning-plan.md)** を参照してください。
> 各タスクに「何を学ぶか・参考コード・完了の定義」が書いてあります。

## リポジトリの役割分担

| リポジトリ | 内容 |
|---|---|
| `platypuscode-portfolio` | このポートフォリオ。Streak BuddyへのリンクをWorksに追加する |
| `streak-buddy` (新規作成) | メインのフルスタックアプリ。Phase 1 Week 2 から作り始める |

## フェーズ概要

| フェーズ | 期間 | 主な内容 | リポジトリ |
|---|---|---|---|
| Phase 1 | Week 1-2 | デプロイ・CLAUDE.md・TS型・カスタムフック・fetchの基礎 | portfolio |
| Phase 2 | Week 3-4 | Express・Prisma・JWT認証・Streak API・Zod | streak-buddy |
| Phase 3 | Week 5-8 | フルスタック統合・認証UI・デプロイ→公開 | streak-buddy |
| Phase 4 | Month 3 | Next.js移行・テスト・型安全API・最終整備 | streak-buddy |

→ **[learning-plan.md でタスク詳細を見る](./learning-plan.md)**

---

# 📹 厳選おすすめリソース

## TypeScript / React

| チャンネル | 何を学ぶか |
|---|---|
| [Matt Pocock (Total TypeScript)](https://www.youtube.com/@mattpocockuk) | TSの「なぜ」 最高峰 |
| [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) | React・TS基礎から実践 |
| [Jack Herrington](https://www.youtube.com/@jherr) | React高度なパターン |

## フルスタック / バックエンド

| チャンネル | 何を学ぶか |
|---|---|
| [Fireship](https://www.youtube.com/@Fireship) | 最新技術を100秒で概観 |
| [Theo (t3.gg)](https://www.youtube.com/@t3dotgg) | Next.js・tRPC・実際の判断基準 |
| [PedroTech](https://www.youtube.com/@PedroTechnologies) | Express・DB・Auth 実装系 |

## AI駆動開発

| リソース | 何を学ぶか |
|---|---|
| [Anthropic Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) | Claude Codeの公式ガイド |
| [Claude Code Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks) | Claude Codeの自動化 |
| [Fireship: AI Coding in 2025](https://www.youtube.com/@Fireship) | AI時代のコーディング |

## 特定のライブラリ (公式ドキュメントが一番)

| ライブラリ | 一言 |
|---|---|
| [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) | 読んでそのまま使える |
| [Prisma](https://www.prisma.io/docs) | チュートリアルが丁寧 |
| [Zod](https://zod.dev) | サンプルコードが豊富 |

---

# 💡 あなたへの一言

> AIなしの開発は考えられないが、変化が速すぎる。

これは正しい感覚です。でも、これを解決する答えも出ています。

**「基礎原則は変わらない」**

HTTPの仕組み、認証の流れ、データベースの設計、エラーハンドリングのパターン。
これらは10年前も今も同じです。ここを固めると、新しいツールが出ても
「このツールはこの部分を楽にするんだな」とすぐ理解できます。

**「一つ作りきることが百の知識より価値がある」**

Streak + たまごっちAppは完璧な題材です。
ユーザー認証・データ永続化・リアルタイム性・ゲームロジック、全部入っています。
これを最後まで作り切って公開することで、ポートフォリオの核心になります。

**「AIは共同作業者。あなたが方向を決める」**

AIにコードを書かせるとき、「何を作るか」「なぜそうするか」を決めるのはあなたです。
そのためには今まさにやっている「自分が何を知らないかを知る」ことが最重要です。

---

*Last updated: 2026-02-22*
