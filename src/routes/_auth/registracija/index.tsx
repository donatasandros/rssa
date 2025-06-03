import { createFileRoute } from "@tanstack/react-router";

import { SignUpForm } from "@/features/auth/components/sign-up-form";

export const Route = createFileRoute("/_auth/registracija/")({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div>
      <div className="mb-8 space-y-3 text-center">
        <h1 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-50">
          Susikurkite paskyrą
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Susikurkite paskyrą norėdami naudotis forumu.
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}
