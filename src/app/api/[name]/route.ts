import Data from "../../utils/data.json";

interface MyContext {
  params: {
    name: string;
  };
}

export async function GET(request: Request, context: MyContext) {
  const name = context.params.name;
  const filterData = Data.filter(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  return Response.json(filterData[0]);
}
