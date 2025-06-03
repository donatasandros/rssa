import { z } from "zod/v4-mini";

export const signInFormSchema = z.object({
  email: z.email({ error: "Klaidingai įvestas el. paštas." }),
  password: z
    .string()
    .check(z.minLength(1, "Prašome įrašyti savo slaptažodį.")),
  remember: z.boolean(),
});

export const signUpFormSchema = z.object({
  username: z
    .string()
    .check(z.minLength(1, "Prašome įrašyti savo slapyvardį.")),
  email: z.email({ error: "Klaidingai įvestas el. paštas." }),
  password: z
    .string()
    .check(
      z.minLength(8, "Slaptažodis negali būti trumpesnis nei 8 simboliai."),
    ),
});
