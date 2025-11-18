import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const path = req.nextUrl.pathname

      // 未登入 → 拒絕
      if (!token) return false

      // admin 才能進入 /admin
      if (path.startsWith("/admin") && token.role !== "admin") return false

      return true
    },
  },
})

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
}