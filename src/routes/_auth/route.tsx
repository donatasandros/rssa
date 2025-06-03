import { Outlet, createFileRoute } from "@tanstack/react-router";

import { LOGOMARK_URL } from "@/constants";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 md:grid-cols-2">
        <div className="flex h-full py-12 max-md:px-4 md:items-center md:py-32">
          <div className="mx-auto h-fit w-full max-w-[360px]">
            <img
              src={LOGOMARK_URL}
              className="mx-auto mb-6 size-10 drop-shadow-sm md:size-12"
            />
            <Outlet />
          </div>
        </div>
        <div className="hidden h-full w-full items-center py-4 pr-4 md:flex">
          <div className="relative h-full max-h-[960px] w-full overflow-hidden rounded-[20px] border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
            <img
              src="https://placehold.co/1024x687/png"
              className="absolute -bottom-20 left-20 min-w-[1024px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
