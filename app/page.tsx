import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Common/Header";
import './page.scss'

import phone from '@/assets/audio-hero/phone/big-phone.png'
import FeatureList from "@/components/Common/FeatureList";
import Statistics from "../components/Statistics/page";
import UseCases from '../components/Usecases/page';
import Explanation from "../components/Explanation/page";
import AppReview from "../components/AppReview/page";
import { HeaderSticky } from '../components/Common/HeaderSticky/index';
import { CategoryExplorer } from "../components/CategoryExplorer/page";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HeaderSticky />
      <div className="audio-hero">
        <div className="audio-hero__container container">
          <div className="grid">
            <div className="audio-hero-content audio-hero__content">
              <h1 className="audio-hero-content__headline audio-hero-content__headline--h2-mobile">
                More knowledge
                <br className="hidden-mobile" />in less time
              </h1>
              <div className="audio-hero-content__subheadline">
                Perfect for curious people who love to learn, busy people who don’t have time to read, and even people who aren’t into reading.
              </div>
              <div className="audio-hero-content__cta button button--x-wide button--block">
                <span>Start your free trial</span>
              </div>
            </div>
            <div className="audio-hero-image audio-hero__image">
              <div className="audio-hero-image__container">
                <img src="/phone/small-phone.png" alt="" loading="lazy" className="pict__image audio-hero-image__phone__image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-features">
        <div className="container">
          <div className="grid">
            <h2 className="main-features__headline grid__el--xs-12">Understand books & podcasts in 15 minutes</h2>
          </div>
          <div className="features-detail">
            <FeatureList />
          </div>
        </div>
      </div>
      <Statistics />
      <UseCases />
      <Explanation />
      <AppReview />
      <CategoryExplorer />
    </div>

  );
}
