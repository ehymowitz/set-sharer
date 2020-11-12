import Head from 'next/head'

const Seo = ({page}) => {
  return (
    <Head>
      <title>Set Sharer { page && ` - ${page.charAt(0).toUpperCase() + page.slice(1)}`}</title>
      <meta property="og:title" content="Set Sharer" key="title" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Create and organize setlists for gig preparation and performance" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:url" content="https://set-sharer.vercel.app/"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Set Sharer"/>
      <meta property="og:description" content="Create and organize setlists for gig preparation and performance"/>
      <meta property="og:image" content="https://picsum.photos/id/1025/400/300"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="set-sharer.vercel.app"/>
      <meta property="twitter:url" content="https://set-sharer.vercel.app/"/>
      <meta name="twitter:title" content="Set Sharer"/>
      <meta name="twitter:description" content="Create and organize setlists for gig preparation and performance"/>
      <meta name="twitter:image" content="https://picsum.photos/id/1025/400/300"/>
    </Head>
  )
}

export default Seo
