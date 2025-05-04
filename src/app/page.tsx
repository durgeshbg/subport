import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WalletConnect from '@/components/ui/wallet-connect';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-background text-foreground p-6'>
      {/* Hero */}
      <section className='text-center max-w-2xl mx-auto py-20 space-y-6'>
        <h1 className='text-4xl font-bold'>
          Own Your Audience. Publish Freely. Get Paid in Crypto.
        </h1>
        <p className='text-lg text-muted-foreground'>
          Subport is a decentralized publishing platform on Solana where
          creators monetize with NFT-based subscriptions. No middlemen, no
          censorship — just content and crypto.
        </p>
        <div className='flex justify-center gap-4'>
          <WalletConnect />
          <Button variant='outline' size='lg'>
            Explore Creators
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-12 max-w-5xl mx-auto grid md:grid-cols-4 gap-6'>
        {[
          {
            title: '1. Connect Wallet',
            desc: 'Use Phantom or Solflare to sign in.',
          },
          {
            title: '2. Subscribe with SOL',
            desc: 'Pay and receive an NFT access pass.',
          },
          {
            title: '3. Access Premium Content',
            desc: 'Your NFT unlocks gated content.',
          },
          {
            title: '4. Support Creators Directly',
            desc: '95% to creators. 5% platform fee.',
          },
        ].map((step, i) => (
          <Card key={i} className='text-center'>
            <CardContent className='p-6'>
              <h3 className='font-semibold text-lg mb-2'>{step.title}</h3>
              <p className='text-sm text-muted-foreground'>{step.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* For Creators */}
      <section className='text-center py-16 max-w-2xl mx-auto space-y-4'>
        <h2 className='text-3xl font-bold'>
          Launch Your Subscription in Minutes
        </h2>
        <p className='text-muted-foreground text-base'>
          Set your price in SOL. Get paid instantly. Give your audience
          NFT-powered access.
        </p>
        <Button variant='secondary'>
          <Link href={'/dashboard'}>Go to Dashboard</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className='border-t border-muted py-8 text-sm text-center text-muted-foreground'>
        <p>Built on Solana • Powered by Anchor & Metaplex</p>
        <p className='mt-2'>
          © {new Date().getFullYear()} Subport — Dev wallet:
          AYD5on5Bh2h5aXg7moWR1btWJaHNjJWtKNAvUwqZHGHU
        </p>
      </footer>
    </main>
  );
}
