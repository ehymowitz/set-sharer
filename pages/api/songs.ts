export default (req, res) => {
    const songs = [
      {
        title: 'Soul to Squeeze',
        artist: 'RHCP',
      },
    ]
    res.json(songs)
}
