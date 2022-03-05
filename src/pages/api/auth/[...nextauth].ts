/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

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
        return {
          ...session,
          id: token.sub
        }
      } catch (error) {
        console.log(error)
        return {
          ...session,
          id: null
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
