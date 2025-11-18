import bcrypt from "bcrypt"

const hashedAdmin = await bcrypt.hash("admin123", 10)
const hashedUser = await bcrypt.hash("user123", 10)

export const users = [
  { id: "1", name: "Alice", email: "admin", password: hashedAdmin, role: "admin" },
  { id: "2", name: "Bob", email: "user", password: hashedUser, role: "user" },
]
