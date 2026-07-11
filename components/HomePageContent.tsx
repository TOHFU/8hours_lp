"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { AnimatedTimerArcBackground } from "@/components/AnimatedTimerArcBackground";
import TimerArc from "@/components/TimerArc";
import "lenis/dist/lenis.css";

export function HomePageContent() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },{threshold: 0.5});

    document.querySelectorAll(".fade-in:not(.fade-in-immediate)").forEach((el) =>
      observer.observe(el),
    );

    document.querySelectorAll(".fade-in-immediate").forEach((el) => {
      requestAnimationFrame(() => el.classList.add("show"));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col align-center justify-center bg-background">
      <ReactLenis root />
      <section className="flex flex-col align-center justify-center h-screen mh-800 relative">
        <TimerArc
          className="absolute top-0 left-0 right-0 bottom-0 m-auto blur-xl animate-[spin_6000ms_linear_infinite]"
          progress={0.8}
          radius={50}
          strokeWidth={50}
          stroke="#E1FF00"
          viewBoxSize={200}
        />
        <AnimatedTimerArcBackground />
        <div className="fade-in fade-in-immediate relative z-10 flex flex-col items-center">
          <h1 className="text-8xl text-center">8hours</h1>
          <p className="mt-4 text-center">8h Timer + 15m Pomodoro & To-Do List</p>
        </div>
      </section>
      <section className=" p-10 flex flex-col align-center items-center justify-center h-screen mh-800 relative">
        <p className="fade-in text-center text-xs/8 font-system-ui">
          理想の働き方を叶えるカギは、
          <br />
          1日の基準となる「8時間」の可視化にあります。
        </p>
        <p className="fade-in mt-4 text-center text-xs/8 font-system-ui">
          タスクを正確に記録・管理し、
          <br />
          あなたの限られた時間を
          <br />
          最大限に引き出すためのアプリです。
        </p>
        <img
          className="fade-in w-full h-auto max-w-[600px] rotate-[6deg] top-[40px] left-[-10%] relative"
          src="/assets/image/lead.png"
          width={600}
          height={110}
          alt="限られた「8時間」を、もっとスマートに。"
          loading="lazy"
        />
      </section>
      <section className="pt-12 pb-[195px] flex items-center justify-center h-screen relative min-h-max overflow-x-hidden">
        <img
          src="/assets/image/desktop.png"
          width={1500}
          height={1269}
          alt="desktop"
          className="min-w-[1500px] min-h-[1269px] left-[-420px] top-[195px] relative"
          loading="lazy"
        />
        <iframe
          className="absolute top-[-155px] left-0 right-0 bottom-5 m-auto"
          src="https://8hours.vercel.app/"
          allow="accelerometer;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width={219}
          height={650}
        ></iframe>
        <div className="w-40 h-4 absolute top-[-145px] bottom-180 left-23 right-0 m-auto">
          <p className="text-time font-system-ui text-sm font-medium text-center">{`${String(new Date().getMonth() + 1)}月${String(new Date().getDate())}日 (${["日", "月", "火", "水", "木", "金", "土"][new Date().getDay()]}) ${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}`}</p>
        </div>
        <img
          src="/assets/image/bubble01.png"
          width={184}
          height={96}
          alt="15 minutespomodoro timer."
          className="absolute top-[-160px] left-0 right-85 bottom-168 m-auto pointer-events-none"
          loading="lazy"
        />
        <img
          src="/assets/image/bubble02.png"
          width={195}
          height={94}
          alt="15 minutespomodoro timer."
          className="absolute top-[-140px] left-0 right-60 bottom-65 m-auto pointer-events-none"
          loading="lazy"
        />
        <img
          src="/assets/image/bubble03.png"
          width={175}
          height={115}
          alt="15 minutespomodoro timer."
          className="absolute top-[-160px] left-0 right-30 bottom-20 m-auto pointer-events-none"
          loading="lazy"
        />
      </section>
      <section className="fade-in pt-12 pb-12 flex flex-col items-center justify-center h-screen relative min-h-max">
        <p className="text-center">Available for download on GitHub.</p>
        <a
          className="mt-3 bg-white rounded-md hover:bg-gray-300 transition-colors duration-300"
          href="https://github.com/TOHFU/8hours/releases/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/image/github.png"
            width={1344}
            height={381}
            alt="github"
            className="w-30 h-auto"
          />
        </a>
        <div className="font-system-ui absolute bottom-0 right-0 pb-5 pr-5">
          <p className="text-right text-xs">
            <a href="https://tohfu-tronica.netlify.app/" target="_blank" rel="noopener noreferrer">
              tohfu-tronica.netlify.app
            </a>
          </p>
          <p className="text-right text-xs">© tohfu-tronica</p>
        </div>
      </section>
    </main>
  );
}
