/* eslint-disable @typescript-eslint/no-unused-vars */
import { format } from 'date-fns'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import firebase from '../../../services/firebaseConnections'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECURITY
    })
  ],
  callbacks: {
    async session({ session, token }) {
      try {
        const lastDonate = await firebase
          .firestore()
          .collection('users')
          .doc(String(token.sub))
          .get()
          .then((snapshot) => {
            if (snapshot.exists) {
              return snapshot.data()?.lastDonate.toDate()
            } else {
              return null
            }
          })
        return {
          ...session,
          id: token.sub,
          vip: !!lastDonate,
          lastDonate: lastDonate
        }
      } catch (error) {
        console.log(error)
        return {
          ...session,
          id: null,
          vip: false,
          lasDonate: null
        }
      }
    },

    signIn({ user, profile }) {
      const { email } = user
      try {
        return true
      } catch (error) {
        console.log('Houve Algum error.', error)
        return false
      }
    }
  }
})
