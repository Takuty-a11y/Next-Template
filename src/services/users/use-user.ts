import useSWR from 'swr'
import { ApiContext, User } from 'types'

export type UseUserProps = {
  id: number
  initial?: User
}

export type UseUser = {
  user?: User
  isLoading: boolean
  isError: boolean
}

/**
 * ユーザー個別取得のカスタムフック
 * @param context APIコンテキスト
 * @param param ユーザーID＆初期ユーザー
 * @returns ユーザー＆APIの状態
 */
const useUser = (
  context: ApiContext,
  { id, initial }: UseUserProps,
): UseUser => {
  const { data, error } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
  )

  return {
    user: data ?? initial,
    isLoading: !error && !data,
    isError: !!error,
  }
}

export default useUser
