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
    async session({ session, user }) {
      try {
        return {
          ...session,
          id: user.id
        }
      } catch (error) {
        return {
          ...session,
          id: null
        }
      }
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signIn({ user, account, profile }) {
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
