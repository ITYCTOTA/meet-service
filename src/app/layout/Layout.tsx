import { Outlet } from "react-router"

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>
  )
}
