import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES } from "@/shared/lib/constants";
import { Layout } from "../layout";

const HomePage = lazy(() => import("@/pages/home"));
const ProfilePage = lazy(() => import("@/pages/profile"));
const MeetChatPage = lazy(() => import("@/pages/meetchat"));
const LoginPage = lazy(() => import("@/pages/login"));
const RegisterPage = lazy(() => import("@/pages/register"));
const ErrorPage = lazy(() => import("@/pages/error"));

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.MEETCHAT} element={<MeetChatPage />} />
          </Route>

          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
