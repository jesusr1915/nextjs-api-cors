export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(404).json({ message: "Not found" });
    return;
  }

  setTimeout(() => {
    res.status(200).json({ name: "Jesus", lastName: "Romero" });
  }, 1000);
}
