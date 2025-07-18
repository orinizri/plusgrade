import { getHealthStatus } from "../services/health.service.ts";
import { Request, Response, NextFunction } from "express";

/**
 * healthController
 * ----------------
 * Express controller that wraps the healthService and
 * sends an HTTP response.
 *
 * @param {import('express').Request}  req  – incoming request (unused)
 * @param {import('express').Response} res  – response helper
 * @param {import('express').NextFunction} next – next middleware
 */
export function healthController(_req: Request, res: Response, next: NextFunction) {
  try {
    const payload = getHealthStatus();
    // 200 OK + JSON body
    return res.status(200).json(payload);
  } catch (err) {
    // Unexpected errors bubble to your global error handler
    return next(err);
  }
}