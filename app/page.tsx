import Image from "next/image";
import Link from 'next/link'
import Article from '@/images/Article.png'
import communicate from '@/images/Communicate.png'
import Badge from '@/images/Profile Badges_ 2b31e583-03f4-47bd-b406-5eba2bf79072.png'
import Global from '@/images/Global Connecti 770a56d2-46ae-435d-abb7-3c33115e9ba8.png'
import Skill from '@/images/Skill.png'
import  connect from '@/images/Connect.png'

export default function Widget() {
  return (
    <div>
   
   <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://m.economictimes.com/thumb/msid-92590513,width-1200,height-900,resizemode-4,imgsize-100510/productivity.jpg')" }}>
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-20">
          <div className="text-white text-xl md:text-2xl font-bold">ConnectAll</div>
          <div className="flex items-center space-x-4 md:space-x-6 text-white">
          <Link href="/profile" className="hover:underline">Profile</Link>
            <Link href="/search" className="hover:underline">Search</Link>
            <Link href="/groups" className="hover:underline">Groups</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/auth/register" className="bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full hover:bg-green-600">Join Now</Link>
          </div>
        </nav>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start p-4 md:p-6 space-y-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Connect.<br />Showcase.<br />Collaborate.<br />Succeed.
          </h1>
          <p className="text-white text-base md:text-lg">Integrate profiles, showcase skills, collaborate seamlessly, and grow together.</p>
          <Link href="/login" className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-green-600">Join Now</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Seamless Integration, Comprehensive Profiles, Endless Opportunities</h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-2">Showcase talents, connect, and collaborate professionally.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Profile Integration Made Easy</h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-2">Combine LinkedIn, GitHub, and certificates for a complete profile.</p>
            <div className="mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full mr-2">Get Started</button>
              <button className="border border-zinc-300 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-full">Learn More</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://t3.ftcdn.net/jpg/05/58/79/54/360_F_558795469_pvzp1H4yYhRSqo6hdhD00GzQMt2Vhian.jpg" alt="Hands together on a table" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
     
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white dark:bg-zinc-900 p-6">
      <div className="md:w-1/2">
        <img
          src="https://st3.depositphotos.com/4282501/18282/i/450/depositphotos_182825916-stock-photo-skill-concept-chart-with-keywords.jpg"
          alt="Person with magnifying glass"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 text-center md:text-left">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Skill-Based Search Simplified
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Find users by specific talents with our advanced search feature.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">
            Try Now
          </button>
          <button className="bg-zinc-200 text-zinc-700 py-2 px-6 rounded-full hover:bg-zinc-300">
            More Info
          </button>
        </div>
      </div>
    </div>
   
        <div className="flex flex-col md:flex-row items-center p-6 bg-white dark:bg-zinc-800">
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Real-Time Collaboration Groups</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">Create or join groups for real-time discussions and projects.</p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded-full">Join Groups</button>
              <button className="border border-zinc-300 text-zinc-700 dark:text-zinc-300 py-2 px-4 rounded-full">Learn How</button>
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <img src="https://www.freshbooks.com/wp-content/uploads/2021/11/Why-is-collaboration-important.jpg" alt="Collaboration Image" className="rounded-lg shadow-lg"/>
          </div>
        </div>
     
        <div className="bg-zinc-900 text-white p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-0">Boost Your Professional Network</h2>
              <p className="text-lg md:text-xl text-zinc-300">Showcase projects and skills to the community, fostering recognition and valuable networking.</p>
            </div>
            <div className="bg-zinc-900 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Image
            src={connect}
            alt="Person with magnifying glass"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
            </div>
            <div className="relative">
            <Image
            src={communicate}
            alt="Person with magnifying glass"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
            </div>
            <div className="relative">
            <Image
            src={Article}
            alt="Person with magnifying glass"
            width={900}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
              
             
            </div>
            <div className="relative">
            <Image
            src={Skill}
            
            alt="Person with magnifying glass"
            width={900}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
            
          />
              
            </div>
            <div className="relative">
            <Image
            src={Badge}
            alt="Person with magnifying glass"
            width={900}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          
              
            </div>
            <div className="relative">
            <Image
            src={Global}
            alt="Person with magnifying glass"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg"
          />
            </div>
          </div>
        </div>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-800 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">SkillConnect</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Connect, Collaborate, Grow Together
          </p>
          <Link href="/login">
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">Join Now</button>
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Company</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/about" className="text-zinc-600 dark:text-zinc-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-zinc-600 dark:text-zinc-300">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-zinc-600 dark:text-zinc-300">
                Team
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-zinc-600 dark:text-zinc-300">
                News
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/blog" className="text-zinc-600 dark:text-zinc-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/webinar" className="text-zinc-600 dark:text-zinc-300">
                Webinars
              </Link>
            </li>
            <li>
              <Link href="/event" className="text-zinc-600 dark:text-zinc-300">
                Events
              </Link>
            </li>
            <li>
              <Link href="/guide" className="text-zinc-600 dark:text-zinc-300">
                Guides
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Support</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/help" className="text-zinc-600 dark:text-zinc-300">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-600 dark:text-zinc-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="FAQ" className="text-zinc-600 dark:text-zinc-300">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Contact us</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">support@skillconnect.com</p>
          <p className="text-zinc-600 dark:text-zinc-300">123-456-7890</p>
          <div className="mt-4 flex space-x-4">
            <Link href="/insta" className="text-zinc-600 dark:text-zinc-300">
              <img src="https://placehold.co/24x24" alt="Instagram" />
            </Link>
            <Link href="#" className="text-zinc-600 dark:text-zinc-300">
              <img src="https://placehold.co/24x24" alt="Twitter" />
            </Link>
            <Link href="#" className="text-zinc-600 dark:text-zinc-300">
              <img src="https://placehold.co/24x24" alt="Facebook" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-zinc-600 dark:text-zinc-300">
        © 2024 SkillConnect, we love our users!
      </div>
    </div>
      
        
        </div>
 
      




    
  );
}
