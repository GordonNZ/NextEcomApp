import Container from './components/container';
import HomeBanner from './components/nav/homeBanner';

export default function Home() {
  return (
    <div className='p-8'>
      <Container>
        <div>
          <HomeBanner />
        </div>
      </Container>
    </div>
  );
}
