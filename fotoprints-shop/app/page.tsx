import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import titleImage from "../public/landingPageImg/titleImage.jpg";
import rightImage from "../public/landingPageImg/Kran.jpg";
import leftImage from "../public/landingPageImg/Dresden.jpg";

import NavBar from "./components/navBar";
import HeadingField from "./components/headingField";
import StoryCard from "./components/storyCard";
import TransparentBox from "./components/transparentBox";
import CtaButton from "./components/ctaButton";
import BlogPostCard from "./components/blogPostCard";
import GradientBottom from "./components/gradientBottom";
import PhotoCredit from "./components/photoCredit";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`relative ${montserrat.className} text-lg text-black md:text-2xl bg-white`}
    >
      {/* Top Section */}
      <section className="w-full h-screen">
        <div>
          <NavBar />
        </div>
        {/* Image Area */}
        <div className="relative h-4/5 z-0">
          {/* White Notch */}
          <div className="absolute top-0 left-1/2 w-32 h-5 transform -translate-x-1/2 rounded-b-3xl z-20 bg-white"></div>
          <div className="h-full">
            <Image
              src={titleImage}
              alt="Thüringer Wald versinkt im Nebel"
              className="h-full object-cover"
              priority
            />
          </div>
          <div className="absolute w-full left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 p-4 md:p-32 md:max-w-7xl">
            <HeadingField
              ctaButtonText="Shop now"
              ctaLinkText=""
            ></HeadingField>
          </div>
        </div>
      </section>
      {/* Newest Collections */}
      <section className="h-full w-full flex flex-col items-center justify-center p-4 pt-0 -mt-16 md:mt-0"></section>
      {/* Fotograf:innen */}
      <section className="w-full h-full mt-16 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={leftImage}
            alt="Kondensstreifen von Flugzeug parallel zu Kran bei Nacht"
            className="h-full object-cover"
          ></Image>
          <Image
            src={rightImage}
            alt="Konturen der Hofkirche Dresden vor lila Sonnenuntergang."
            className="h-full object-cover"
          ></Image>
        </div>
        <div className="absolute p-4 md:p-32 md:max-w-7xl">
          <TransparentBox
            ctaButtonText="Fotograf:innen"
            ctaLinkText=""
          ></TransparentBox>
        </div>
      </section>
      {/* Blog Posts */}
      <section className="relative w-full h-full mt-16 p-4 flex flex-col items-center justify-center">
        <div className="w-full">
          <BlogPostCard ctaButtonText="Explore" ctaLinkText=""></BlogPostCard>
        </div>
      </section>
      {/* Kontakt */}
      <section className="w-full h-full mt-16 flex flex-col items-center justify-center">
        <div className="">
          <CtaButton
            text="kontaktiere uns"
            ctaLink="mailto:kontakt@blendeeinssieben.com?subject=Anfrage%20an%20Blende1.7"
          ></CtaButton>
        </div>
      </section>
      {/* Footer */}
      <section className="relative text-xs text-gray-600 w-full h-full flex-col mt-16 mb-5 text-center">
        <div className="">
          <GradientBottom></GradientBottom>
          <h2 className="mt-5">folge uns</h2>
          <Link
            href="https://www.instagram.com/blendeeinssieben?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="mt-2 text-xl transition-transform transform hover:scale-105"
            ></FontAwesomeIcon>
          </Link>
        </div>
        <div className="mt-5">
          <PhotoCredit
            authorLink="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            authorText="Nathan Dumlao"
            siteLink="https://unsplash.com/photos/shallow-focus-photography-of-coffee-late-in-mug-on-table-zUNs99PGDg0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            siteText="Unsplash"
          ></PhotoCredit>
          <p>
            Checkout{" "}
            <Link
              href="https://www.flaticon.com"
              passHref
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flaticon
            </Link>{" "}
            for cool icons:
          </p>
          <div>
            <Link
              href="https://www.flaticon.com/free-icons/shopping-online"
              passHref
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopping online icons created by NeXore88 - Flaticon
            </Link>
          </div>
          <div>
            <Link
              href="https://www.flaticon.com/free-icons/account"
              passHref
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Account icons created by Shashank Singh - Flaticon
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
