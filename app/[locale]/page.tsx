import Hero from '@/components/sections/Hero';
import Editorial from '@/components/sections/Editorial';
import StatsBar from '@/components/sections/StatsBar';
import RoomsPreview from '@/components/sections/RoomsPreview';
import Sensorial from '@/components/sections/Sensorial';
import GalleryMoodboard from '@/components/sections/GalleryMoodboard';
import Territory from '@/components/sections/Territory';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Hero locale={locale} />
      <Editorial />
      <StatsBar />
      <RoomsPreview locale={locale} />
      <Sensorial />
      <GalleryMoodboard locale={locale} />
      <Territory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
