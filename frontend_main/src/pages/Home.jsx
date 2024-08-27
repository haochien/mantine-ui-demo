import { HeaderMenu } from '../components/HeaderMenu';
import { HomeLandingBanner } from '../components/HomeLandingBanner';
import { FooterArea } from '../components/FooterArea';
import { HomeFeatureBoard } from '../components/HomeFeatureBoard';
import { HomeCustomerReviews } from '../components/HomeCustomerReviews';
import { HomeQuote} from '../components/HomeQuote';
import { HomeImageIntro} from '../components/HomeImageIntro';

export function Home() {
  return (
    <>
    <HeaderMenu />
    <HomeLandingBanner />
    <HomeFeatureBoard />
    <HomeImageIntro />
    <HomeCustomerReviews />
    <FooterArea />
    </>
  );
}