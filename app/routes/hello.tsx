import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

export const fetchHelloFromServer = createServerFn({ method: "GET" }).handler(
  async () => {
    console.info("Hello from Server...");
    return "Hello from Server";
  }
);

export const helloQueryOptions = () =>
  queryOptions({
    queryKey: ["hello"],
    queryFn: () => fetchHelloFromServer(),
  });

export const Route = createFileRoute("/hello")({
  component: RouteComponent,
  loader: async ({ context }) => {
    const data = await context.queryClient.ensureQueryData(helloQueryOptions());

    return {
      data,
    };
  },
});

function RouteComponent() {
  const helloQuery = useSuspenseQuery(helloQueryOptions());

  return (
    <div>
      <div>Hello "/hello"!</div>
      <div>{helloQuery.data}</div>
    </div>
  );
}
