import { fetcher } from 'fetcher'
import { ApiContext, User } from 'types'

export type SigninParams = {
  username: string
  password: string
}

/**
 * サインインAPI
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns サインインユーザー
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    // 適宜URLを変更
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
