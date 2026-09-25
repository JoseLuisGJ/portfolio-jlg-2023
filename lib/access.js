export const ACCESS_COOKIE = "portfolio_access";

export function accessToken() {
  return process.env.PRIVATE_ACCESS_TOKEN || "";
}

export function hasAccessCookie(cookieHeader = "") {
  const token = accessToken();
  if (!token || !cookieHeader) return false;

  return cookieHeader.split(";").some((part) => {
    const [name, ...rest] = part.trim().split("=");
    return name === ACCESS_COOKIE && rest.join("=") === token;
  });
}
