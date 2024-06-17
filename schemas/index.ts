import * as z from "zod";


export const SettingsSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Invalid email format" }).optional(),
  password: z.string().min(6, { message: "Minimum of 6 characters required for password" }).optional(),
  newPassword: z.string().min(6, { message: "Minimum of 6 characters required for new password" }).optional(),
  primarySkill: z.string().optional(),
  secondarySkills: z.string().optional(), // Array of secondary skills
  dob: z.string().optional(), // Date of Birth in string format
  country: z.string().optional(), // Country of the user
  location: z.string().optional(), // Location of the user
  post: z.string().optional(), // Post of the user
  projects:z.string().url().optional(), // Array of project names
  institution: z.string().optional(), // Institution name
  study: z.string().optional(), // Field of study
  profilePic: z.string().url({ message: "Invalid URL format" }).optional(), // Profile picture URL
})
.refine((data) => {
  if (data.password && !data.newPassword) {
    return false;
  }
  return true;
}, {
  message: "New password is required if password is provided!",
  path: ["newPassword"]
})
.refine((data) => {
  if (data.newPassword && !data.password) {
    return false;
  }
  return true;
}, {
  message: "Password is required if new password is provided!",
  path: ["password"]
});


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
  birthday:z.string() || z.date(),
});
