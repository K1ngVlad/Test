import { Footer, Header, Hero, Posts, Works } from './blocks';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Posts />
        <Works />
      </main>
      <Footer />
    </>
  );
}
