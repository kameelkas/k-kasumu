import Image from 'next/image';
import HeroSectionImage from '@/images/dark-KK.jpeg';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import MotionWrapper from './MotionWrapper';
export default function Hero() {
  const heroLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kameelkas',
      icon: <SiGithub size={36} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ka-kasumu/',
      icon: <SiLinkedin size={36} />,
    },
    {
      name: 'Resume',
      url: "/Kameel Kasumu Resume '25.pdf",
      icon: <IoIosPaper size={36} />,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        <MotionWrapper>
        <div className="relative">
          <Image
            src={HeroSectionImage}
            alt="Logo Image (Kameel Kasumu's Initials 'KK')"
            width={500}
            height={500}
            className="h-56 w-56 rounded-full shadow-lg sm:h-64 sm:w-64 lg:h-96 lg:w-96"
          />
        </div></MotionWrapper>
        <MotionWrapper direction='left'>
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl">Hey, I&apos;m</h1>
          <h1 className="text-6xl font-bold sm:text-8xl">Kameel!</h1>
          <h1 className="text-xl sm:text-2xl">Emerging Software Engineer</h1>
          <div className="mt-3 flex items-center justify-between space-x-6">
            {heroLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform duration-300 ease-in-out interactive:scale-125 interactive:text-accentHover-light dark:interactive:text-accentHover-dark"
              >
                {link.icon}
              </a>
            ))}
            <a
              href="#contact"
              className="transform duration-300 ease-in-out interactive:scale-125 interactive:text-accentHover-light dark:interactive:text-accentHover-dark"
            >
              <MdEmail size={36} />
            </a>
          </div>
        </div></MotionWrapper>
      </div>
    </div>
  );
}
