import { useDispatch, useSelector } from 'react-redux'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { useMemo } from 'react'
import store, { AppState } from '../index'
import { saveUserInfo, UserInfo } from './actions'
import { useCallback } from 'react'
import { useActiveWeb3React } from 'hooks'
import { signMessage } from '../../constants'
import { useWeb3Instance } from 'hooks/useWeb3Instance'
import { useLogin } from 'hooks/useBackedDaoServer'
import { toast } from 'react-toastify'

export function clearAllSignStoreSync() {
  store.dispatch({
    type: 'localUserInfo/removeUserInfo'
  })
}

export function useUserInfo(): UserInfo | undefined {
  const allUserInfo = useSelector((state: AppState) => state.localUserInfo)
  const { account } = useWeb3ReactCore()

  return useMemo(() => {
    if (!account || account.toLowerCase() !== allUserInfo.addressInfo?.account.toLowerCase()) {
      return undefined
    }
    return allUserInfo.addressInfo
  }, [account, allUserInfo])
}

export function useLoginSignature() {
  const login = useLogin()
  const web3 = useWeb3Instance()
  const { account } = useActiveWeb3React()
  const dispatch = useDispatch()

  return useCallback(async () => {
    if (!account || !web3) return

    return web3.eth.personal.sign(signMessage, account, '').then(async signStr => {
      const res = await login.login(account, signMessage, signStr)
      toast.success('Welcome to Clique')
      dispatch(saveUserInfo({ userInfo: { account, signature: signStr, loggedToken: res } }))
      return signStr
    })
  }, [account, web3, login, dispatch])
}
