import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CreatorPageProps {
  params: { id: string };
}

export default function CreatorPage({ params }: {
  params: { id: string };
}) {
  const { id } = params;

  // Later: Fetch creator data from smart contract or backend
  const fakeCreator = {
    name: '0x' + id.slice(0, 6),
    bio: 'Writer, researcher, and content creator on Web3 trends.',
    price: 1.25, // in SOL
    publicPosts: ['Why Solana is the Future', 'How NFTs Unlock New Models'],
  };

  if (!id) return notFound();

  return (
    <main className='min-h-screen bg-background text-foreground p-6'>
      <div className='max-w-3xl mx-auto space-y-8'>
        <section className='space-y-2 text-center'>
          <h1 className='text-3xl font-bold'>{fakeCreator.name}</h1>
          <p className='text-muted-foreground'>{fakeCreator.bio}</p>
          <Button variant='secondary' size='lg'>
            <Link href={`/subscribe/${id}`}>
              Subscribe (🔒 {fakeCreator.price} SOL)
            </Link>
          </Button>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-4'>Public Posts</h2>
          <div className='grid gap-4'>
            {fakeCreator.publicPosts.map((post, idx) => (
              <Card key={idx}>
                <CardContent className='p-4'>{post}</CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
