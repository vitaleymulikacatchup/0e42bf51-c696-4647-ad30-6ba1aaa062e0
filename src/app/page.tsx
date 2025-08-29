"use client";
import { useEffect } from 'react';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <>
      <BillboardHero title="MemeCoin Fiesta — Ride the Meme Wave" subtitle="A playful community token built for fun and simple participation." />
      <SplitAbout description="A community-driven meme token designed for approachable onboarding and lighthearted vibes. No hype-only promises—just a fun token with a transparent setup and straightforward goals. Join a growing, friendly community that loves memes and simple participation." />
      <TokenBillboardHero title="Token Mechanics" subtitle="Enjoy seamless transactions!" contractAddress="0x1234567890abcdef" copyButtonText="Copy" copiedText="Copied!" />
      <NumberGridTokenomics title="Tokenomics Overview" description="A simple tokenomics model aimed at steady liquidity and community growth, with a focus on transparency and minimal friction for new participants." kpiItems={[{value: '1,000,000,000 MEME', description: 'Total Supply'},{value: '700,000,000 MEME', description: 'Circulating Supply'},{value: '25% locked', description: 'Liquidity'},{value: '2-3%', description: 'Tax (sell) toward liquidity and marketing'}]} />
      <CentralFAQ items={[{title: "Is MemeCoin Fiesta a guaranteed investment?", content: "No. MemeCoin Fiesta is a community token meant for fun and participation. Do your own research before engaging."},{title: "How do I stay updated?", content: "Join our official channels and subscribe to announcements for updates."},{title: "Where can I see the tokenomics?", content: "Tokenomics are listed in the tokenomics section of this page for transparency."},{title: "Is the project audited?", content: "Information about audits or security reviews will be shared publicly when available."}]} lead="Frequently Asked Questions" subcopy="Clear answers to common questions about joining and participating in MemeCoin Fiesta." />
      <FooterBase logoSrc="/images/logo.svg" logoWidth={150} logoHeight={50} copyrightText="© 2025 MemeCoin Fiesta. All rights reserved." columns={[{ title: "About", items: [{ label: "What is MemeCoin Fiesta?", onClick: () => (location.href='#about') },{ label: "How to Buy", onClick: () => (location.href='#how-to-buy') }] },{ title: "Legal", items: [{ label: "Terms & Conditions", onClick: () => (location.href='#footer') },{ label: "Privacy Policy", onClick: () => (location.href='#footer') }] },{ title: "Community", items: [{ label: "Discord", onClick: () => (window.open('https://example.com/discord')) },{ label: "Twitter", onClick: () => (window.open('https://example.com/twitter')) }] }]} onPrivacyClick={() => { window.open('#footer'); }} />
    </>
  );
}