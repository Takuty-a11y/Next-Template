/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      // styledComponentsの有効化
      styledComponents: true,
    }

    // 本番環境ではテスト用のdata-testid属性を削除
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }

    return compilerConfig
  })(),
  //リクエストURL変換[CORSでのCookie送信対策]
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig