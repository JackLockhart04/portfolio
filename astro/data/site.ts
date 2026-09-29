export const site = {
  name: "Jack Lockhart",
  phone: "(205) 569-8341",
  email: "jrlockhart04@gmail.com",
  github: "https://github.com/JackLockhart04",
  linkedin: "https://www.linkedin.com/in/jack-r-lockhart/",
} as const;

export const contactMethods = [
  {
    label: "Phone",
    value: site.phone,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: site.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "GitHub Profile",
    href: site.github,
    external: true,
  },
] as const;
