// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "@/styles/app.css?url";
import { NotFound } from "@/components/NotFound";
import { QueryClient } from "@tanstack/react-query";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-col w-screen">
            <header className="flex bg-slate-100 px-4 py-2 border-slate-200 border-b shadow-sm">
              <SidebarTrigger />
              <h1 className="text-xl">Account & Settings</h1>
            </header>

            <main className="flex flex-1 flex-col p-4 ">
              <div className="flex-1">{children}</div>
            </main>
            <footer className="flex bg-slate-100 px-4 py-2 border-slate-200 border-t">
              <div>
                <div>
                  <p className="text-muted-foreground">Battery Test Center</p>
                  <a
                    className="text-primary"
                    href="https://novum-engineering.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    by NOVUM engineering GmbH
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </SidebarProvider>
        <Scripts />
      </body>
    </html>
  );
}
