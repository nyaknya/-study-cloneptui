import Image from "next/image";
import Link from "next/link";

export default function MainVisual() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col xl:justify-start justify-between h-[1160px] xl:h-auto container max-w-7xl mx-auto px-8 py-36 gap-20">
        <div>
          <h2 className="text-4xl font-semibold">
            Invest at the perfect time.
          </h2>
          <p className="mt-6 text-lg max-w-xl">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to
            sell to avoid painful losses.
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
        <div className="flex flex-col items-center xl:items-start gap-10">
          <div className="font-bold">As featured in</div>
          <ul className="flex justify-between max-w-xl gap-10">
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
                className="hidden xl:block"
              />
            </li>
          </ul>
          <ul className="flex justify-between gap-10 max-w-xl">
            <li>
              <Image src="/images/bbc.svg" alt="bbc" width={83} height={32} />
            </li>
            <li>
              <Image src="/images/cbs.svg" alt="cbs" width={101} height={32} />
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
                className="hidden xl:block"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute xl:w-[1024px] xl:h-[1024px] w-[760px] h-[760px] xl:right-[2%] right-1/2 translate-x-1/2 xl:translate-x-0 bottom-[5%]  -z-10">
        <Image
          src="/images/phone.png"
          alt="휴대폰"
          width={360}
          height={728}
          className="absolute xl:right-[0%] left-1/2 -translate-x-1/2 xl:translate-x-0  bottom-0"
        />
        <Image
          src="/images/circle-big.svg"
          alt="큰 원"
          width={1026}
          height={1026}
          className="absolute xl:right-0 xl:-bottom-[50%] left-[calc(50%-380px)] -bottom-[24%] w-[760px] h-[760px] xl:w-[1026px] xl:h-[1026px] animate-spin-slow -z-10"
        />
        <Image
          src="/images/circle-small.svg"
          alt="작은 원"
          width={800}
          height={800}
          className="absolute xl:right-0 xl:-bottom-[40%] xl:ml-20 right-[calc(50%-300px)] -bottom-[14%] w-[600px] h-[600px] xl:w-[800px] xl:h-[800px] animate-spin-slow-reverse -z-10"
        />
      </div>
    </section>
  );
}
