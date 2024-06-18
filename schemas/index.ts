import { z } from "zod";

export const SettingsSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().email({ message: "Invalid email format" }).optional(),
    password: z
      .string()
      .min(6, { message: "Minimum of 6 characters required for password" })
      .optional(),
    newPassword: z
      .string()
      .min(6, { message: "Minimum of 6 characters required for new password" })
      .optional(),
    primarySkill: z.string().optional(),
    secondarySkills: z.string().optional(),
    country: z.string().optional(),
    location: z.string().optional(),
    posts: z.array(z.string()).optional(),
    projects: z
      .array(z.string().url({ message: "Invalid URL format" }))
      .optional(),
    institution: z.string().optional(),
    study: z.string().optional(),
    profilePic: z.string().url({ message: "Invalid URL format" }).optional(),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required if password is provided!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required if new password is provided!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  birthday: z.string() || z.date(),
});

export const PostSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  markdown: z.string().optional(),
  images: z
    .array(z.string().url({ message: "Invalid image URL format" }))
    .optional(),
  videos: z
    .array(z.string().url({ message: "Invalid video URL format" }))
    .optional(),
  userId: z.string().min(1, { message: "User ID is required" }),
});
