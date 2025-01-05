"use client"
import { useState } from "react";
import Image from "next/image";
import Card from "./components/ui/Card";
import EventCard from "./components/ui/EventCard";
export default function Home() {
  const opportunities = [
    {
      id: 1,
      title: "Hackathons",
      image: "/hackathons.jpg", // Ensure this path is correct
      description: "Collaborate with brilliant minds to solve pressing problems, showcase your skills, and gain valuable experience working on innovative AI/ML projects",
    },
    {
      id: 2,
      title: "Bootcamps",
      image: "/bootcamp.jpg", // Ensure this path is correct
      description: "Immerse yourself in hands-on training sessions designed to equip you with cutting-edge knowledge, practical expertise, and a clear roadmap to excel in AI/ML engineering.",
    },
    {
      id: 3,
      title: "Career Fairs",
      image: "/career-fair.jpg", // Ensure this path is correct
      description: "Meet top companies, explore job openings, and showcase your talent to potential employers. A stepping stone to landing your dream role in AI/ML engineering.",
    },
  ];
  const [activeTab, setActiveTab] = useState(opportunities[0]);

  const cards = [
    { image: "/hackathons.jpg", title: "Hackathons" },
    { image: "/bootcamp.jpg", title: "AI Bootcamps" },
    { image: "/career-fair.jpg", title: "Career Fairs" },
    { image: "/hackathon.jpg", title: "Workshops" },
  ];

  return (
    <main className="p-4 md:px-24 flex flex-col justify-center items-center gap-48">
      {/* Hero Section */}
      <section className="h-screen w-full flex flex-col justify-center items-center gap-4">
        <h1 className=" text-center text-white text-5xl leading-normal font-bold">Empowering <span className="text-lime-400">AI/ML </span> Innovators Through Collaboration <span className="text-lime-400"> & </span>Community</h1>
        <p className="text-md text-white text-center w-4/5">Join a forward-thinking community dedicated to fostering innovation, creating opportunities, and helping individuals break into AI/ML engineering.</p>
        <div className="flex flex-col md:flex-row gap-4">
    <button className="bg-white text-black px-6 py-3 rounded-full">
      Join the commuity
    </button>
    <button className="bg-lime-400 text-white px-4 py-2 rounded-full">
      Partner with us
    </button>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-1/2 space-y-5">
        <h3 className="text-white text-3xl font-md">Collaboration at the core of AI/ML innovation</h3>
        <p className="text-md text-gray-300 leading-normal">AI Collective Hub brings together individuals passionate about artificial intelligence and machine learning. We provide the resources, connections, and support needed to innovate, grow, and thrive. Whether you're new to AI or an experienced engineer, we’re here to help you create meaningful solutions and achieve your goals.</p>
        <ul className="flex flex-col gap-2">
          <li>
        <p className="text-gray-400">
        ✅ <span className="font-semibold text-lg text-lime-400"> Collaboration </span>
        {`{ Building AI/ML solutions as a community }`}
          </p>  
          </li>
          <li>
        <p className="text-gray-400">
        ✅ <span className="font-semibold text-lg text-lime-400">  Inclusivity </span>
        {`{ A welcoming space for all skill levels }`}
          </p>  
          </li>
          <li>
        <p className="text-gray-400">
        ✅ <span className="font-semibold text-lg text-lime-400"> Growth </span>
        {`{ Supporting personal and professional development }`}
          </p>  
          </li>
          </ul>
        </div>
        <div className="w-1/2">
        <Image src="/bg-main.jpg" alt="AI Community" width={500} height={500} />
          </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-10">
        <h3 className="text-lime-400 text-3xl font-md  text-center">Fuel Your AI/ML Engineering Journey <br/>
          <span className="text-gray-400"> {`{ Community Support, Learning, and Opportunities }`}</span>
        </h3>
        <div className="flex flex-col md:flex-row gap-10">
    <Card svgComponent={<svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>} cardTitle="Collaborative Projects" cardContent="Access resources, courses, and workshops to build your AI/ML skills." />
    <Card svgComponent={<svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>} cardTitle="Learning Resources" cardContent="Access resources, courses, and workshops to build your AI/ML skills." />
    <Card svgComponent={<svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>} cardTitle="Career Support" cardContent="Access resources, courses, and workshops to build your AI/ML skills." />
    <Card svgComponent={<svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>} cardTitle="Networking Opportunities" cardContent="Access resources, courses, and workshops to build your AI/ML skills." />
        </div>
      </section>
      <section className="py-12 px-10 bg-gray-600/30 text-white rounded-lg">
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
                    ? "bg-lime-400 border-lime-500 text-white"
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
    <section className="flex flex-col justify-center items-center gap-10">
        <h3 className="text-lime-400 text-3xl font-md  text-center">Events & Workshops <br/>
          <span className="text-gray-400"> {`{ Learn, Share and Grow }`}</span>
        </h3>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {cards.map((card, index) => (
        <EventCard key={index} image={card.image} title={card.title} />
      ))}
  
        </div>
        </section>
        <section className="flex flex-col justify-center items-start">
        <h3 className="text-lime-400 text-4xl font-semibold ">A  Community of Vibrant AI/ML Engineers<br/>
          <span className="text-gray-400"> {`{ Learn, Share and Grow }`}</span>
          <p></p>
        </h3>
          </section>
  </main>
  );
}
