'use client'

import { bungee } from "../fonts";
import { motion } from "motion/react";
import { ChevronDown, CopyrightIcon, EarthIcon, GaugeIcon, HandCoinsIcon, RocketIcon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import RocketSkeleton from "./rocket-skeleton";
import Prose from "../primitive/prose";


export default function Meridian() {
  return (
    <div className="flex flex-col gap-10 justify-center py-8">
      <ChevronDown size="30" className="absolute mx-auto invisible lg:visible bottom-5 left-1/2 translate-x-[-50%]"></ChevronDown>
      <Prose font={bungee}>
        <div className="relative h-full">
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div>
              <h1>
                Introducing<br/>Meridian <span className="animate-blink">|</span>
              </h1>
            </div>
            <div className="flex justify-center items-center p-10 lg:p-0">
              <figure className="rotate-330 lg:rotate-210 w-sm lg:w-xl">
                <img src="/branding/rocket.png"></img>
              </figure>
            </div>
          </div>
          <h4 className="relative">
            St Andrews premier rocket development project
            <br/>
            <RotatingTextContainer duration={4000} text={["advanced telemetry tracking", "custom avionics", "a g-class solid rocket motor"]}>
              <span className="flex flex-row gap-2">
                Featuring
                <span className="text-red-600"><RotatingText/></span>
              </span>
            </RotatingTextContainer>
          </h4>
        </div>
      </Prose>

      <div className="w-full flex flex-col md:flex-row justify-center gap-10 px-8 lg:px-32 md:py-8">
        <div className="flex-1">
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
                <a href="/team">
                  <Button className="w-full">
                    Meet the team
                    <UsersIcon/>
                  </Button>
                </a>
                <a href="/sponsor">
                  <Button className="w-full">
                    Sponsor Us
                    <HandCoinsIcon/>
                    </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
        <Separator orientation="vertical"/>
        <motion.div
          initial={{visibility:"hidden", opacity: 0, translateX:100}}
          whileInView={{visibility:"visible", opacity: 1, translateX: 0}}
          transition={{duration: 0.5}}
          viewport={{ once: true }}>

          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-row gap-2">
                  <RocketIcon/>
                  Target Altitude
                </CardTitle>
              </CardHeader>
              <CardContent>
                700 m
              </CardContent>
            </Card>

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
            <EarthIcon className="hidden md:block" size="400"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}