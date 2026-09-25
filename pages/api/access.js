import { hasAccessCookie } from "../../lib/access";

export default function handler(req, res) {
  res.status(200).json({
    unlocked: hasAccessCookie(req.headers.cookie || ""),
  });
}
