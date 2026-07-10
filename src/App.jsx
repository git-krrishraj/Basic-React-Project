import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './card.jsx'
function App() {
  const profiles = [
    {
      id: 1,
      name: "Jane S. Doe",
      address: "Amsterdam, Netherlands",
      role: "Copywriter",
      about: "Copywriter by day and photographer by night. I have 5+ years of experience working with startups big and small.",
      pfp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 2,
      name: "Marcus Lee",
      address: "Singapore",
      role: "UI/UX Designer",
      about: "Designing clean, human-centered interfaces. Coffee addict, weekend hiker, and Figma nerd.",
      pfp: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 3,
      name: "Sofia Rossi",
      address: "Milan, Italy",
      role: "Frontend Developer",
      about: "React and CSS enthusiast. I love turning designs into pixel-perfect, accessible web experiences.",
      pfp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 4,
      name: "Daniel Kim",
      address: "Seoul, South Korea",
      role: "Product Manager",
      about: "Bridging the gap between engineering and business. Big believer in shipping fast and learning faster.",
      pfp: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 5,
      name: "Amara Johnson",
      address: "Austin, USA",
      role: "Data Scientist",
      about: "Turning messy data into meaningful stories. Python, ML, and way too much coffee.",
      pfp: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 6,
      name: "Liam O'Connor",
      address: "Dublin, Ireland",
      role: "Backend Engineer",
      about: "Building scalable systems and breaking them in staging before anyone else can. Node.js and Go daily driver.",
      pfp: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 7,
      name: "Priya Sharma",
      address: "Bangalore, India",
      role: "DevOps Engineer",
      about: "Automating everything so humans don't have to. Kubernetes, CI/CD pipelines, and cloud infra are my playground.",
      pfp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 8,
      name: "Noah Müller",
      address: "Berlin, Germany",
      role: "Mobile Developer",
      about: "Flutter and Swift by trade. I care way too much about smooth 60fps animations.",
      pfp: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 9,
      name: "Elena Petrova",
      address: "Barcelona, Spain",
      role: "Illustrator",
      about: "Freelance illustrator working across editorial, branding, and games. Always sketching something.",
      pfp: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces"
    },
    {
      id: 10,
      name: "Ethan Walker",
      address: "Toronto, Canada",
      role: "Full Stack Developer",
      about: "JavaScript end to end. React on the frontend, Node on the backend, and way too many side projects.",
      pfp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces"
    }
  ];
  return <div className='parent'>
    {
      profiles.map(function (user) {
        return <Card info={user} key={user.id}/>
      })
    }
  </div>
}

export default App
