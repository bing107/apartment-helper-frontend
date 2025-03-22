export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Mock signup received:", body);
  return { status: "ok" };
});
