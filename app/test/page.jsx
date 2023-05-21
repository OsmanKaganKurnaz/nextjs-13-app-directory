import React from 'react'
import Head from 'next/head';

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function Test() {
  await delay(3000);

  return (
    <div>
      <div>Test Route</div>
    </div>

  );
}

export default Test