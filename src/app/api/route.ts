import Data from "../utils/data.json";

export async function GET() {
  return Response.json(Data);
}
