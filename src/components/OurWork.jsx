import { ArrowUpRight } from 'lucide-react'
import WorkImage from '../assets/images/ok1.jpg'
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function OurWork() {
  const workItems = [
    {
      year: "2024",
      title: "400+ projects",
      description: "We built an advanced customer support chatbot for Doodle. Our chatbot now handles 87% of Doodle's customer support inquiries, freeing up their team to focus on more complex issues.",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      year: "2024",
      title: "3,500+ Partners",
      description: "Established strategic partnerships across multiple industries, enabling seamless integration and enhanced service delivery for our clients.",
      image: "/placeholder.svg?height=400&width=600"
    },
    {
      year: "2024",
      title: "150+ Clients",
      description: "Successfully delivered innovative solutions to diverse clients globally, maintaining a 95% satisfaction rate and long-term relationships.",
      image: "/placeholder.svg?height=400&width=600"
    }
  ]

  const [expandedIndex, setExpandedIndex] = useState(null)
  const defaultImage = WorkImage // Use the imported image as the default

  return (
  <div className="font-['Tomorrow','swap'] text-lg relative z-10 bg-black text-white min-h-screen mt-8 pt-24">
  <h1 className="text-6xl md:text-8xl font-semilight mb-8">
    Our <span className="text-[#c2fcbd]">Work</span>
  </h1>
  
  <div className="grid md:grid-cols-[1fr,minmax(300px,600px)] gap-16 items-start md:gap-x-20 lg:gap-x-28 md:p-10"> {/* Optimized grid layout */}
    <div className="space-y-16 z-10">
      {workItems.map((item, index) => (
        <div 
          key={item.title}
          className="border-b border-white/10 pb-8"
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        >
          <div className="text-sm font-semibold text-[#4aea8b] mb-4">{item.year}</div>
          <div className="flex items-center justify-between gap-16 cursor-pointer">
            <span className="text-4xl md:text-5xl font-semilight">{item.title}</span>
            <motion.div
              initial={false}
              animate={{ rotate: expandedIndex === index ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="w-10 h-10 text-[#4aea8b]" />
            </motion.div>
          </div>
          <AnimatePresence>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 mt-6 text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>

    {/* Image Section */}
    <div className="relative w-full md:w-[600px] lg:w-[50%] h-[400px] md:h-[auto] top-10"> {/* Responsive adjustments */}
      <AnimatePresence mode="wait">
        <motion.div
          key={expandedIndex !== null ? expandedIndex : 'default'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full h-full"
        >
          <img
            src={expandedIndex !== null ? workItems[expandedIndex].image : defaultImage}
            alt="Project visualization"
            className="object-cover rounded-lg w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</div>
  )
}