import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            Home
          </Link>
          <Link href="/new">
            Add Pet
          </Link>
        </div>

        <img
          id="title"
          src="https://20240828petshopstorage.blob.core.windows.net/petshop/pet_shelter_4.png?sp=r&st=2024-08-29T02:41:55Z&se=2024-08-29T10:41:55Z&spr=https&sv=2022-11-02&sr=b&sig=ZX8FgTqLggSOhR5EGfxBo7fCkC3ZbRdOuw2UItbE7hA%3D"
          alt="pet care logo"
        ></img>
      </div>
      <h1>Adoption shelter</h1>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
