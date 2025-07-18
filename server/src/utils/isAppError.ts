import AppError from "./AppError.ts";

export function isAppError(err: unknown): err is AppError {
  return (
    err instanceof AppError ||
    (typeof err === "object" &&
      err !== null &&
      "message" in err &&
      "statusCode" in err)
  );
}
