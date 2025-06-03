'use client';

import { useEffect } from 'react';
export default function HomePage() {
  useEffect(() => {
    fetch('/api/linkedin')
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return (
    <main>
      <h1> Welcome to the HomePage</h1>
    </main>
  );
}
