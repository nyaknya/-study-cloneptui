import Image from "next/image";

export default function MainFeatures() {
  return (
    <section className="bg-gray-900 py-36">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-white">
          Every feature you need to win. Try it for yourself.
        </h2>
        <p className="max-w-3xl mt-4 text-gray-400 text-lg">
          Pocket was built for investors like you who play by their own rules
          and aren’t going to let SEC regulations get in the way of their
          dreams. If other investing tools are afraid to build it, Pocket has
          it.
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
              <h3 className="font-bold text-lg">Notifications on stock dips</h3>
              <p className="text-gray-400">
                Get a push notification every time we find out something that’s
                going to lower the share price on your holdings so you can sell
                before the information hits the public markets.
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
  );
}
