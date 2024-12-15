import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="flex flex-col container max-w-7xl mx-auto px-8 py-36 gap-20 ">
            <div>
              <h2 className="text-4xl font-semibold">
                Invest at the perfect time.
              </h2>
              <p className="mt-6 text-lg max-w-xl">
                By leveraging insights from our network of industry insiders,
                you’ll know exactly when to buy to maximize profit, and exactly
                when to sell to avoid painful losses.
              </p>
              <div className="flex gap-6 mt-6">
                <button className="text-white font-semibold bg-gray-800 hover:bg-gray-900 rounded-md p-2">
                  <Image
                    src="/images/appstore.svg"
                    alt="다운로드 앱스토어"
                    width={110}
                    height={36}
                  />
                </button>
                <button>
                  <Link
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    className="flex gap-2 border p-2 rounded-md text-gray-600 text-sm"
                  >
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
            <div className="flex flex-col gap-10">
              <div className="font-bold">As featured in</div>
              <ul className="flex justify-between  max-w-xl">
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
              <ul className="flex justify-between  max-w-xl">
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
          <div className="absolute w-[1024px] h-[1024px] right-10 top-16 -z-10">
            <Image
              src="/images/circle-big.svg"
              alt="큰 원"
              width={1026}
              height={1026}
              className="absolute animate-spin-slow"
            />
            <Image
              src="/images/circle-small.svg"
              alt="작은 원"
              width={800}
              height={800}
              className="absolute left-28 top-28 animate-spin-slow-reverse"
            />
            <Image
              src="/images/phone.png"
              alt="휴대폰"
              width={360}
              height={728}
              className="absolute right-80 bottom-80"
            />
          </div>
        </section>
        <section className="bg-gray-900 py-36">
          <div className="container max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold text-white">
              Every feature you need to win. Try it for yourself.
            </h2>
            <p className="max-w-3xl mt-4 text-gray-400 text-lg">
              Pocket was built for investors like you who play by their own
              rules and aren’t going to let SEC regulations get in the way of
              their dreams. If other investing tools are afraid to build it,
              Pocket has it.
            </p>
            <div className="mt-24 flex text-white gap-20">
              <div className="w-1/2 relative">
                <Image
                  src="/images/main-phone-people.png"
                  alt="Invite people"
                  width={366}
                  height={729}
                  className="mx-auto relative z-10"
                />
                <Image
                  src="/images/circle-blue.svg"
                  alt="배경 스핀"
                  width={558}
                  height={558}
                  className="absolute top-20 left-6 -z-0 animate-spin-slow"
                />
              </div>
              <div className="w-1/2 flex flex-col gap-8 transition-all">
                <div className="p-8 transition-all flex flex-col gap-4 bg-gray-700 rounded-xl">
                  <Image
                    src="/images/invite-friends.svg"
                    alt="invite friends"
                    width={32}
                    height={32}
                  />
                  <h3 className="font-bold text-lg">
                    Invite friends for better returns
                  </h3>
                  <p className="text-gray-400">
                    For every friend you invite to Pocket, you get insider
                    notifications 5 seconds sooner. And it’s 10 seconds if you
                    invite an insider.
                  </p>
                </div>
                <div className="p-8 transition-all flex flex-col gap-4 hover:bg-gray-800  rounded-xl">
                  <Image
                    src="/images/notifications.svg"
                    alt="notifications"
                    width={32}
                    height={32}
                  />
                  <h3 className="font-bold text-lg">
                    Notifications on stock dips
                  </h3>
                  <p className="text-gray-400">
                    Get a push notification every time we find out something
                    that’s going to lower the share price on your holdings so
                    you can sell before the information hits the public markets.
                  </p>
                </div>
                <div className="p-8 transition-all flex flex-col gap-4 hover:bg-gray-800 rounded-xl">
                  <Image
                    src="/images/invest.svg"
                    alt="notifications"
                    width={32}
                    height={32}
                  />
                  <h3 className="font-bold text-lg">Invest what you want</h3>
                  <p className="text-gray-400">
                    We hide your stock purchases behind thousands of anonymous
                    trading accounts, so suspicious activity can never be traced
                    back to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
