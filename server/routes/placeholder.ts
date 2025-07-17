import { RequestHandler } from "express";

export const handlePlaceholder: RequestHandler = (req, res) => {
  const { width = 400, height = 300 } = req.params;

  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1f2937"/>
      <rect x="10%" y="40%" width="80%" height="20%" fill="#D90429" rx="8"/>
      <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">
        Loc'D 60
      </text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", "public, max-age=31536000");
  res.send(svg);
};
