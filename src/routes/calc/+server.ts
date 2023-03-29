import type { RequestHandler } from './$types';
import { json } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const { x, y } = await request.json();
  const result = x + y;
  return json({ result });
};