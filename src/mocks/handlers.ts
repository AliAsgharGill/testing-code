import { rest, RequestHandler, RestRequest, RestResponse, RestContext } from 'msw';

const getUsersHandler: RequestHandler = (req: RestRequest, res: RestResponse, ctx: RestContext) => {
  return res(
    ctx.status(200),
    ctx.json([
      { name: 'Leanne Graham' },
      { name: 'Ervin Howell' },
      { name: 'Clementine Bauch' },
      { name: 'Patricia Lebsack' },
      { name: 'Chelsey Dietrich' }
    ])
  );
};

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', getUsersHandler),
];
