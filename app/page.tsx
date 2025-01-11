"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoCarousel from "./components/ui/LogoCarousel";
import PartnershipForm from "./components/ui/PartnershipForm";
import TeamCard from "./components/ui/TeamCard";
export default function Home() {
  const currentYear = new Date().getFullYear();

  const opportunities = [
    {
      id: 1,
      title: "Hackathons",
      image: "/hackathons.jpg", // Ensure this path is correct
      description:
        "Collaborate with brilliant minds to solve pressing problems, showcase your skills, and gain valuable experience working on innovative AI/ML projects",
    },
    {
      id: 2,
      title: "Events & Workshops",
      image: "/career-fair.jpg", // Ensure this path is correct
      description:
        "Attend live sessions and gain hands-on experience with the latest tools and technologies",
    },
    {
      id: 3,
      title: "Project Incubator",
      image: "/bootcamp.jpg", // Ensure this path is correct
      description:
        "Bring your ideas to life with support from our community and resources",
    },
  ];
  const [activeTab, setActiveTab] = useState(opportunities[0]);

  return (
    <main className="p-4 mt-10 md:mt-0 md:px-24 flex flex-col justify-center items-center gap-48">
      {/* Hero Section */}
      <motion.section
        className="h-screen w-full flex flex-col justify-center items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="text-center text-white text-3xl md:text-5xl leading-normal font-bold">
          Empowering <span className="text-main">AI/ML </span> Innovators
          Through Collaboration <span className="text-main"> & </span>Community
        </h1>
        <p className="text-md text-white text-center w-4/5">
          Join a forward-thinking community dedicated to fostering innovation,
          creating opportunities, and helping individuals break into AI/ML
          engineering.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <motion.button
            className="bg-white text-black px-6 py-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="https://tally.so/r/m6AAKJ">Join the community</Link>
          </motion.button>
          <motion.button
            className="bg-main text-white px-4 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Partner with us
          </motion.button>
        </div>
        <section className="flex flex-col justify-center items-center mt-24">
          <div className="">
            <h3 className="text-gray-300 text-2xl font-semibold">
              <span className="text-main">400+ members </span>{" "}
              {`Our Chapters Across The Nation`}
            </h3>
          </div>
          <LogoCarousel />
        </section>
      </motion.section>

      {/* Section with AI/ML Collaboration Info */}
      <motion.section
        className="flex flex-col md:flex-row justify-center items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.03 }}
        id="about"
      >
        <div className="md:w-1/2 space-y-5">
          <h3 className="text-white text-3xl font-md">
            Collaboration at the core of AI/ML innovation
          </h3>
          <p className="text-md text-gray-300 leading-normal">
            HEADSTARTER Gh brings together individuals passionate about
            artificial intelligence and machine learning. We provide the
            resources, connections, and support needed to innovate, grow, and
            thrive. Whether you&apos;re new to AI or an experienced engineer,
            we’re here to help you create meaningful solutions and achieve your
            goals.
          </p>
          <ul className="flex flex-col gap-2">
            <motion.li whileHover={{ scale: 1.05 }} className="text-gray-400">
              ✅{" "}
              <span className="font-semibold text-lg text-main">
                {" "}
                Collaboration{" "}
              </span>
              {`{ Building AI/ML solutions as a community }`}
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="text-gray-400">
              ✅{" "}
              <span className="font-semibold text-lg text-main">
                {" "}
                Inclusivity{" "}
              </span>
              {`{ A welcoming space for all skill levels }`}
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} className="text-gray-400">
              ✅{" "}
              <span className="font-semibold text-lg text-main"> Growth </span>
              {`{ Supporting personal and professional development }`}
            </motion.li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/bg-main.jpg"
            alt="AI Community"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </motion.section>

      {/* Opportunities Section */}
      <motion.section
        className="flex flex-col justify-center items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.03 }}
        id="benefits"
      >
        <h3 className="text-main text-3xl font-md text-center">
          Fuel Your AI/ML Engineering Journey <br />
          <span className="text-gray-400">
            {" "}
            {`Community Support, Learning, and Opportunities`}
          </span>
        </h3>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="border border-teal-300 w-60 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">
              Collaborative Projects
            </h3>
            <p className="text-gray-600">
              Building AI/ML projects driving innovation and real world
              solutions as a community
            </p>
          </div>
          <div className="border border-teal-300 w-60 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Incubation</h3>
            <p className="text-gray-600">
              Nurturing AI/ML Startups with mentorships, resources, and
              innovative ideas
            </p>
          </div>
          <div className="border border-teal-300 w-60 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Career Support</h3>
            <p className="text-gray-600">
              Comprehensive career support for AI/ML engineers to build resumes,
              get better with technical interviews and land their dream jobs
            </p>
          </div>
          <div className="border border-teal-300 w-60 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">
              Networking Opportunities
            </h3>
            <p className="text-gray-600">
              Networking opportunities with industry professionals, AI/ML
              engineers, and like-minded individuals
            </p>
          </div>
        </div>
      </motion.section>

      <section className="py-12 md:px-10 bg-gray-600/30 text-white rounded-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Unlock Pathways to AI/ML Excellence
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-20">
            {/* Tabs */}
            <div className="w-full md:w-1/2 space-y-4">
              {opportunities.map((opportunity) => (
                <button
                  key={opportunity.id}
                  className={`w-full text-left p-4 rounded-lg border ${
                    activeTab.id === opportunity.id
                      ? "bg-main border-lime-500 text-white"
                      : "bg-gray-800 border-gray-700 text-gray-300"
                  }`}
                  onClick={() => setActiveTab(opportunity)}
                >
                  <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                  <p className="text-sm">{opportunity.description}</p>
                </button>
              ))}
            </div>

            {/* Image Display */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={activeTab.image}
                alt={activeTab.title}
                className="rounded-lg shadow-lg w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center gap-10"
        id="events"
      >
        <h3 className="text-main text-3xl font-md  text-center">
          Events & Workshops <br />
          <span className="text-gray-400"> {`Learn, Share and Grow`}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
          {/* {cards.map((card, index) => (
        <EventCard key={index} image={card.image} title={card.title} />
      ))} */}
          <span className="text-gray-300 text-center text-xl font-semibold">
            Coming soon ...
          </span>
        </div>
      </section>
      <section className="flex flex-col justify-center items-start gap-6">
        <h3 className="text-main text-2xl md:text-4xl font-semibold ">
          A Community of Vibrant AI/ML Engineers
          <br />
          <span className="text-gray-400"> {`Learn, Share and Grow`}</span>
        </h3>
        <p className="text-white  text-xl md:text-3xl font-light">
          We believe in the power of community. Whether it’s troubleshooting a
          technical issue, brainstorming project ideas, or finding the right
          career path, Headstarter is here to support you every step of the way
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full">
          <Link href="https://tally.so/r/m6AAKJ">Join the commuity</Link>
        </button>
      </section>
      <section
        className="flex flex-col justify-center items-center gap-4 "
        id="team"
      >
        <h3 className="text-main text-2xl md:text-4xl font-semibold text-center ">
          Meet The Team
          <br />
          <span className="text-gray-400 text-center">
            {" "}
            {`Empowering Ghana’s AI community`}
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
          <TeamCard
            name="Gifty Asamoah"
            role="Organizer"
            imageUrl="/gifty.png"
            linkedinUrl="https://www.linkedin.com/in/gifty-asamoah-344172a7/"
          />
          <TeamCard
            name="Selasie Sepenu"
            role="Co-Organizer"
            imageUrl="/profile2.jpg"
            linkedinUrl="https://www.linkedin.com/in/selasiekofisepenu/"
          />
          <TeamCard
            name="Peter Essibu"
            role="Operations Manager"
            imageUrl="/pkessibu.png"
            linkedinUrl="https://www.linkedin.com/in/peteressibu"
          />
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center gap-10"
        id="partner"
      >
        <h3 className="text-main text-3xl font-md  text-center">
          Let&apos;s Build Something Great Together <br />
          <span className="text-gray-400">
            {" "}
            {`Partner with Us to Create Impactful Solutions`}
          </span>
        </h3>

        <PartnershipForm />
      </section>

      <footer className="w-full rounded-lg bg-gray-600/30 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/2">
            <h3 className="text-main text-2xl font-semibold mb-4">
              Stay Connected
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <span className="text-gray-300 hover:text-main">
                <Link href="https://www.linkedin.com/company/headstarterai-ghana/">{`LinkedIn`}</Link>
              </span>
              <span className="text-gray-300 hover:text-main">
                <Link href="https://www.instagram.com/headstarterai_gh?igshid=NDk6DND1eWs4Ynhw">{`Instagram`}</Link>
              </span>
              <span className="text-gray-300 hover:text-main">
                <Link href=" https://chat.whatsapp.com/Gu9HiZYbOBb9a0mZKRL5wX">{`WhatsApp`}</Link>
              </span>
              <span className="text-gray-300 hover:text-main">
                <Link href="https://www.meetup.com/headstarter-ai-ghana/">{`Meetup`}</Link>
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right">
            <h3 className="text-main text-lg font-semibold">
              &copy; {currentYear} Headstarter Ghana. All rights reserved.
            </h3>
          </div>
        </div>
      </footer>
    </main>
  );
}
