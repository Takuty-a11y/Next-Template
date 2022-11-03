import { fetcher } from 'fetcher'
import { ApiContext, User } from 'types'

export type GetUserParams = {
  id: number
}

/**
 * ユーザ個別取得
 * @param context APIコンテキスト
 * @param param ユーザーID
 * @returns ユーザー
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser
