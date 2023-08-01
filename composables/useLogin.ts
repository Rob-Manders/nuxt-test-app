import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function useLogin() {
  const googleAuthProvider = new GoogleAuthProvider()
  const auth = useFirebaseAuth()!

  signInWithPopup(auth, googleAuthProvider).catch(reason => {
    console.error('Failed sign in', reason)
  })
}
