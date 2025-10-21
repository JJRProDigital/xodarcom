import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import ProcessVideo from '@/components/sections/ProcessVideo';
import Benefits from '@/components/sections/Benefits';
import Systems from '@/components/sections/Systems';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import SuccessCases from '@/components/sections/SuccessCases';
import ContactForm from '@/components/sections/ContactForm';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import LoadingScreen from '@/components/ui/LoadingScreen';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <ProcessVideo />
        <Benefits />
        <Systems />
        <ProcessTimeline />
        <SuccessCases />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
