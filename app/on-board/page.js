'use client';

import { useRouter } from 'next/navigation';

export default function OnBoard() {
  const router = useRouter();
  router.push('/on-board/register');
}
