import Cors from "cors";

const cors = Cors({
  methods: ["GET"],
  origin: true,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  setTimeout(() => {
    res.status(200).json({ name: "Gustavo", lastName: "Romero" });
  }, 1000);
}
