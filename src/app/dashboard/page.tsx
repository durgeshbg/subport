'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function DashboardPage() {
  const { publicKey, connected } = useWallet();

  return (
    <ProtectedRoute>
      <main className='min-h-screen bg-background text-foreground p-6'>
        <section className='max-w-5xl mx-auto space-y-6'>
          <header className='text-center space-y-2'>
            <h1 className='text-3xl font-bold'>Dashboard</h1>
            {connected ? (
              <p className='text-muted-foreground text-sm'>
                Connected as:{' '}
                <span className='font-mono'>
                  {publicKey?.toBase58().slice(0, 4)}...
                  {publicKey?.toBase58().slice(-4)}
                </span>
              </p>
            ) : (
              <p className='text-red-500 text-sm'>Wallet not connected</p>
            )}
          </header>

          <Tabs defaultValue='creator' className='w-full'>
            <TabsList className='flex justify-center'>
              <TabsTrigger value='creator'>Creator Tools</TabsTrigger>
              <TabsTrigger value='subscriber'>My Subscriptions</TabsTrigger>
            </TabsList>

            {/* Creator View */}
            <TabsContent value='creator'>
              <div className='grid md:grid-cols-2 gap-6 mt-6'>
                {/* Create Plan */}
                <Card>
                  <CardContent className='p-6 space-y-4'>
                    <h2 className='text-xl font-semibold'>
                      Create Subscription Plan
                    </h2>
                    <p className='text-sm text-muted-foreground'>
                      Set your pricing in SOL and launch instantly.
                    </p>
                    <Button>Create Plan</Button>
                  </CardContent>
                </Card>

                {/* Active Subscribers */}
                <Card>
                  <CardContent className='p-6 space-y-4'>
                    <h2 className='text-xl font-semibold'>
                      Active Subscribers
                    </h2>
                    <p className='text-sm text-muted-foreground'>
                      View addresses of users subscribed to your content.
                    </p>
                    <div className='text-muted-foreground italic'>
                      [Coming soon]
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Subscriber View */}
            <TabsContent value='subscriber'>
              <div className='grid gap-6 mt-6'>
                <Card>
                  <CardContent className='p-6 space-y-4'>
                    <h2 className='text-xl font-semibold'>
                      Your Subscriptions
                    </h2>
                    <p className='text-sm text-muted-foreground'>
                      Access your subscribed creators and unlock their gated
                      content.
                    </p>
                    <div className='text-muted-foreground italic'>
                      [Coming soon]
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </ProtectedRoute>
  );
}
