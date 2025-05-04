'use client';

import { ReactNode, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface ProtectedRouteProps {
  children: ReactNode;
  requireNFT?: boolean;
}

export function ProtectedRoute({
  children,
  requireNFT = false,
}: ProtectedRouteProps) {
  const { connected, publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connected || !publicKey) {
      router.push('/');
      toast.warning('Please connect your wallet to access this page.');
    }

    // Later: Add NFT ownership check for gated content
    if (requireNFT) {
      // Implement NFT check logic here and redirect if not owner
    }
  }, [connected, publicKey, router, requireNFT]);

  if (!connected || !publicKey) return null;

  return <>{children}</>;
}
