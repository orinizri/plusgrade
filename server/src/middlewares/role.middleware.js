export default function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: "Forbidden" });
    if (req.user?.role !== role)
      return res.status(403).json({ error: "Forbidden" });
    next();
  };
}
