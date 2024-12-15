import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="flex-col relative">
          <div className="flex-col">
            <h2>Invest at the perfect time.</h2>
            <p>
              By leveraging insights from our network of industry insiders,
              you’ll know exactly when to buy to maximize profit, and exactly
              when to sell to avoid painful losses.
            </p>
            <div className="flex">
              <button>
                <Image
                  src="/images/appstore.svg"
                  alt="다운로드 앱스토어"
                  width={210}
                  height={40}
                />
              </button>
              <button>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <Image
                    src="/images/video.svg"
                    alt="비디오"
                    width={24}
                    height={24}
                  />
                  Watch the video
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-col">
            <div>As featured in</div>
            <div>
              <ul>
                <li>
                  <Image
                    src="/images/forbes.svg"
                    alt="forbes"
                    width={82}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src="/images/techcrunch.svg"
                    alt="techcrunch"
                    width={181}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src="/images/wired.svg"
                    alt="wired"
                    width={121}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src="/images/cnn.svg"
                    alt="cnn"
                    width={68}
                    height={32}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <Image
                    src="/images/bbc.svg"
                    alt="bbc"
                    width={83}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src="/images/cbs.svg"
                    alt="cbs"
                    width={101}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src="/images/fast-company.svg"
                    alt="fast company"
                    width={124}
                    height={32}
                  />
                </li>
                <li>
                  <Image
                    src="/images/huffpost.svg"
                    alt="huffpost"
                    width={142}
                    height={32}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute">
            <img src="/images/circle-big" alt="" />
            <img src="/images/circle-small" alt="" />
            <img src="/images/phone.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
