export const searchYoutube = async (artist: string, title: string) => {
  const api_key = process.env.YOUTUBE_KEY;

  const authOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${artist} ${title}&key=${api_key}`,
      authOptions
    );

    if (response.ok) {
      const data: GoogleApiYouTubeVideoResource & {
        items: { id: { videoId: string } }[];
      } = await response.json();
      return data.items[0].id.videoId;
    }
  } catch (error) {
    console.error(error);
  }
};
