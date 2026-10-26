'use client'

import { bungee } from "../fonts";
import { motion } from "motion/react";
import { ChevronDown, CopyrightIcon, EarthIcon, GaugeIcon, HandCoinsIcon, RocketIcon, UsersIcon } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RotatingText, RotatingTextContainer } from "@/components/animate-ui/primitives/texts/rotating";
import { Separator } from "@/components/ui/separator";
import Prose from "../primitive/prose";
import LinkButton from "../primitive/link-button";
import PageContent from "../structural/page-content";
import HeroDiv from "../structural/hero-div";
import { sponsors } from "@/lib/static/sponsors";
import clsx from "clsx";
import Parallax from "../effects/parallax";
import Stagger from "../effects/stagger";


export default function Meridian() {
  return (
    <PageContent>
      <ChevronDown size="30" className="absolute mx-auto invisible lg:visible bottom-5 left-1/2 translate-x-[-50%]"></ChevronDown>

      <HeroDiv>
        <Prose font={bungee} className="flex flex-1">
          <div className="relative flex flex-col flex-1 pb-[10vh] md:pb-0">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <div className="relative z-10">
                <h1>
                  Introducing<br/>Meridian <span className="animate-blink">|</span>
                </h1>
              </div>
              <div className="flex px-[clamp(1rem,calc(8rem-12vh),10rem)] md:px-0 justify-center items-center">

                <Parallax angle={271} range={-150} cutoff="30%" className="flex-1 hidden md:block">
                  <figure className="rotate-271 md:rotate-210 translate-y-[10vh] md:translate-y-0">
                    <img className="h-auto" draggable={false} src="/branding/rocket.png"></img>
                  </figure>
                </Parallax>

                <Parallax angle={0} range={-150} cutoff="30%" className="flex-1 block md:hidden">
                  <figure className="rotate-271 md:rotate-210 translate-y-[10vh] md:translate-y-0">
                    <img className="h-auto" draggable={false} src="/branding/rocket.png"></img>
                  </figure>
                </Parallax>

              </div>
            </div>
            <Parallax angle={0} className="mt-auto relative" cutoff="100%" range={-200}>
              <h4 className="mt-auto relative">
                St Andrews premier rocket development project
                <br/>
                <RotatingTextContainer duration={4000} text={["advanced telemetry tracking", "custom avionics", "a g-class solid rocket motor"]}>
                  <span className="flex flex-col md:flex-row gap-2">
                    Featuring
                    <span className="text-red-600"><RotatingText/></span>
                  </span>
                </RotatingTextContainer>
              </h4>
            </Parallax>
          </div>
        </Prose>
      </HeroDiv>

      <div className="flex flex-col md:flex-row justify-center gap-10 md:py-8">
        <div className="flex-3/5">
          <motion.div
            initial={{opacity: 0, translateY:100}}
            whileInView={{opacity: 1, translateY:0}}
            transition={{duration: 0.5}}
            viewport={{ once: true}}>
            <Card className="relative pt-0 w-full">
              <img
                src="/branding/moon.jpg"
                alt="Event cover"
                className="relative z-20 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>About STARI</CardTitle>
                <CardDescription>Founded 2025, St Andrews, Scotland</CardDescription>
              </CardHeader>
              <Separator/>
              <CardContent className="text-left">
                STARI (the St Andrews Rocketry Initiative) is a student-led organization created with the goal of producing high-performance aerospace technology.
                <br/><br/>
                We are currently working towards launching our first major project, the Meridian I rocket. This will function as a preliminary testing vehicle and the gateway to more advanced future developments. We soon hope to compete in national rocketry competitions.
                <br/><br/>
                STARI is funded by the generosity of sponsors. If you or your organisation would like to support us, please get in touch!

              </CardContent>
              <CardFooter className="gap-2">
                <LinkButton href="/team">
                  Meet the team
                  <UsersIcon/>
                </LinkButton>

                <LinkButton href="/contact">
                  Sponsor Us
                  <HandCoinsIcon/>
                </LinkButton>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <Separator orientation="vertical"/>

        <div className="flex flex-col gap-4 max-w-full md:max-w-100 flex-2/5">
          <Stagger className="flex flex-col gap-4" horizontal delay={0.3}>
            <motion.div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex flex-row gap-2">
                    <RocketIcon/>
                    Target Altitude
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  2000 ft
                </CardContent>
              </Card>
            </motion.div>

            <motion.div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex flex-row gap-2">
                    <GaugeIcon/>
                    Max Speed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  122 m/s
                </CardContent>
              </Card>
            </motion.div>
          </Stagger>
          <EarthIcon className="hidden md:block max-w-100 h-auto w-full"/>
        </div>
      </div>
      
      <Separator/>
      <Prose font={bungee}>
        <h2 className="md:mb-0">
          Proudly Sponsored By:
        </h2>
        <Stagger delay={0.3} className="flex flex-col pb-10 px-10 md:p-0 md:flex-row gap-0 md:gap-3 w-full items-center justify-center"> 
          {
            sponsors.map((sponsor, idx) => 
              <motion.a key={idx} href={sponsor.url} target="_" className="w-full mt-0 object-contain min-w-0">
                <motion.img draggable={false} whileHover={{ translateY: -3}} src={sponsor.logoSrc}></motion.img>
              </motion.a>
            )
          }
        </Stagger>
      </Prose>
    </PageContent>
  );
}