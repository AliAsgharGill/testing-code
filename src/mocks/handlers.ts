import { http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      // ctx.status(200),
      ctx.json([
        { name: "Leanne Graham" },
        { name: "Ervin Howell" },
        { name: "Clementine Bauch" },
        { name: "Patricia Lebsack" },
        { name: "Chelsey Dietrich" },
        { name: "Mrs. Dennis Schulist" },
        { name: "Kurtis Weissnat" },
        { name: "Nicholas Runolfsdottir V" },
        { name: "Glenna Reichert" },
        { name: "Clementina DuBuque" },
      ])
    );
  }),
];
