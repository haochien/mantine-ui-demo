import { HeaderMenu } from '../components/HeaderMenu';
import { HomeLandingBanner } from '../components/HomeLandingBanner';
import { FooterArea } from '../components/FooterArea';
import { HomeFeatureBoard } from '../components/HomeFeatureBoard';
import { HomeCustomerReviews } from '../components/HomeCustomerReviews';
import { HomeImageIntro} from '../components/HomeImageIntro';
import { HelmetContent } from '../components/HelmetContent';

export function Home() {
  return (
    <>
    <HelmetContent
    title='HaoWeb - The best website design'
    description='Create the best and modern website for your brand'
    robots='index, follow'
    pageUrl=''
    imageUrl='https://assets.haodevelop.com/haoweb/home/home_1.jpg'
    type='article'
     />

    <HeaderMenu />
    <HomeLandingBanner />
    <HomeFeatureBoard />
    <HomeImageIntro />
    <HomeCustomerReviews />
    <FooterArea />
    </>
  );
}