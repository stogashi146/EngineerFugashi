# Engineer Fugashi Portfolio

フルスタックエンジニア Fugashi のポートフォリオサイトです。

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: microCMS
- **UI Components**: Swiper

## セットアップ

### 必要条件

- Node.js 22.0.0 以上

### インストール

```bash
npm install
```

### 環境変数

`.env.local` ファイルを作成し、以下の環境変数を設定してください:

```
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key

```

### 開発サーバー

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセスできます。

### ビルド

```bash
npm run build
npm run start
```

## コンテンツソース

### PRODUCTS

microCMS から取得しています。

### POSTS

以下の3つのソースから記事を取得し、作成日順に表示しています:

- WordPress (cheepday.com)
- Qiita
- Note

## ディレクトリ構成

```
├── app/                  # Next.js App Router
│   ├── contact/         # お問い合わせページ
│   ├── posts/           # 記事一覧ページ
│   ├── products/        # プロダクト一覧・詳細ページ
│   └── profile/         # プロフィールページ
├── components/          # Reactコンポーネント
│   ├── home/           # ホームページ用コンポーネント
│   ├── layout/         # レイアウトコンポーネント
│   ├── posts/          # 記事関連コンポーネント
│   ├── products/       # プロダクト関連コンポーネント
│   ├── profile/        # プロフィール関連コンポーネント
│   └── ui/             # 共通UIコンポーネント
├── data/               # 静的データ
├── lib/                # ユーティリティ関数
├── public/             # 静的ファイル
└── types/              # TypeScript型定義
```

## スクリプト

| コマンド               | 説明                           |
| ---------------------- | ------------------------------ |
| `npm run dev`          | 開発サーバーを起動             |
| `npm run build`        | プロダクションビルド           |
| `npm run start`        | プロダクションサーバーを起動   |
| `npm run lint`         | ESLintを実行                   |
| `npm run format`       | Prettierでコードをフォーマット |
| `npm run format:check` | フォーマットのチェック         |
