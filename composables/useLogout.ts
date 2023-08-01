import { signOut } from 'firebase/auth'

export default function useLogin() {
  const auth = useFirebaseAuth()!

  signOut(auth).catch(reason => {
    console.error('Failes sign out', reason)
  })
}
