# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
npm run dev          # 開発サーバー起動 (http://localhost:3000)
npm run build        # プロダクションビルド
npm run lint         # ESLint実行
npm run format       # Prettierでフォーマット
npm run format:check # フォーマットチェック
```

テストフレームワークは未導入。

## 環境変数

`.env.local` に以下が必要:

- `MICROCMS_SERVICE_DOMAIN`
- `MICROCMS_API_KEY`

## 技術スタック

- Next.js 15 (App Router) / React 18 / TypeScript
- Tailwind CSS (カスタムカラー: accent, base, main, text)
- microCMS（Products管理）
- Swiper（カルーセルUI）
- Node.js >= 22.0.0

## アーキテクチャ

### データソース

- **Products**: microCMS API経由で取得。`lib/microcms.ts` でクライアント生成・データ変換を行う。CMSの生データ(`CMSProduct`)をUI用の型(`Product`, `ProductDetail`)に変換するレイヤーがある
- **Posts**: 3つの外部ソース(WordPress/Qiita/Note)から `lib/posts.ts` で並行取得し、日付降順にマージ。各APIレスポンスは統一型`Post`に正規化される。revalidate: 3600秒

### ルーティング (App Router)

- `/` - ホーム
- `/products` - プロダクト一覧
- `/products/[id]` - プロダクト詳細（microCMSのIDで静的生成）
- `/posts` - 記事一覧（WordPress/Qiita/Note統合）
- `/profile` - プロフィール
- `/contact` - お問い合わせ（Google Formへリダイレクト）

### コンポーネント構成

`components/` はページ単位でサブディレクトリ分割（home, posts, products, profile）。共通UIは `components/ui/`、レイアウトは `components/layout/`。

### 型定義

`types/` にドメイン型を集約。`types/product.ts` はCMS型とUI表示用型の両方を定義。`types/post.ts` は各外部APIレスポンス型と統一Post型を定義。

### 定数

`data/constants.ts` に外部URL・ページパスを集約。マジックナンバーやハードコードURLはここに配置する。

## コードスタイル

- Prettier: セミコロンなし、シングルクォート、tabWidth 2、trailingComma es5、printWidth 100
- ESLint: next/core-web-vitals + prettier連携
- パスエイリアス: `@/*` → プロジェクトルート
- フォント: Inter, Noto Sans, Noto Sans JP（CSS変数経由）