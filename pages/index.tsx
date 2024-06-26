
import { ChecksGrid } from "@/components/ChecksGrid"
import { Layout } from "@/components/layout"

export default function IndexPage() {
  return (
    <Layout>
      {/* <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <section className="h-screen w-full items-center justify-center ">
        <ChecksGrid />
      </section>
    </Layout>
  )
}
