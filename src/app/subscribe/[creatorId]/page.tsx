'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { use } from 'react';

interface SubscribePageProps {
  params: Promise<{ creatorId: string }>;
}

export default function SubscribePage({ params }: SubscribePageProps) {
  const { connected } = useWallet();
  const { creatorId } = use(params);

  // Simulated plan data (replace with on-chain fetch)
  const plan = {
    name: '0x' + creatorId.slice(0, 6),
    price: 1.25, // SOL
    description:
      'Access all premium content, monthly newsletters, and private Q&As.',
  };

  return (
    <main className='min-h-screen bg-background text-foreground p-6'>
      <div className='max-w-md mx-auto'>
        <Card>
          <CardContent className='p-6 space-y-4 text-center'>
            <h1 className='text-2xl font-bold'>Subscribe to {plan.name}</h1>
            <p className='text-muted-foreground'>{plan.description}</p>
            <p className='text-lg font-semibold'>Price: {plan.price} SOL</p>

            {connected ? (
              <Button size='lg'>Confirm & Subscribe</Button>
            ) : (
              <Button size='lg' disabled>
                Connect wallet to continue
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
