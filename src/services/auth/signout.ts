import { fetcher } from 'fetcher'
import { ApiContext } from 'types'

/**
 * サインアウトAPI
 * @param context APIコンテキスト
 * @returns メッセージ
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signout`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default signout
