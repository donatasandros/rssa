import { createFileRoute } from "@tanstack/react-router";

import { SignInForm } from "@/features/auth/components/sign-in-form";

export const Route = createFileRoute("/_auth/prisijungimas/")({
  component: SignInPage,
});

function SignInPage() {
  return (
    <div>
      <div className="mb-8 space-y-3 text-center">
        <h1 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-50">
          Sveiki sugrįžę
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sveiki sugrįžę! Įveskite savo duomenis.
        </p>
      </div>
      <SignInForm />
    </div>
  );
}
