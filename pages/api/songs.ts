export default (req, res) => {
    const songs = [
      {
        name:
          "Soul to Squeeze",
        artist: "RHCP",
      },
    ]
    res.json(songs)
}
