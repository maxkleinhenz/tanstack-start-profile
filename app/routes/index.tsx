import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    console.log("Redirecting to /profile");
    throw redirect({
      to: "/profile",
    });
  },
});
