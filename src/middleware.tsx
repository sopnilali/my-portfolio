export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard", "/dashboard/projects/addproject", "/dashboard/userinfo", "/dashboard/projects", "/dashboard/blogs/addblog", "/dashboard/blogs", "/dashboard/messages"] };