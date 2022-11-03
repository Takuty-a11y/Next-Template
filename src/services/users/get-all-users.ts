import { fetcher } from 'fetcher'
import { ApiContext, User } from 'types'

/**
 * ユーザー全取得
 * @param context APIコンテキスト
 * @returns ユーザー配列
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllUsers
