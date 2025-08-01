import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";
import type { QueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/PageHeader";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <Toaster richColors position="top-center" />
      <Outlet />
      <TanStackRouterDevtools />

      <TanStackQueryLayout />
    </>
  ),
});
