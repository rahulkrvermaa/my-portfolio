import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

# 1. Update Buttons for hover accent color (Electric Blue: hover:bg-blue-600, etc.)
content = content.replace('hover:bg-zinc-800 text-white', 'hover:bg-blue-600 hover:border-blue-600 text-white')
content = content.replace('hover:bg-zinc-100 text-black', 'hover:bg-blue-600 hover:text-white hover:border-blue-600 text-black')
content = content.replace('hover:bg-zinc-200 text-zinc-900', 'hover:bg-blue-600 hover:text-white hover:border-blue-600 text-zinc-900')

# 2. Add Staggered Text Reveal
staggered_h1 = """
              <div className="flex flex-wrap overflow-hidden leading-none">
                {studentData.name.split(' ').map((word, wordIdx) => (
                  <div key={wordIdx} className="overflow-hidden inline-block mr-3 lg:mr-4">
                    {word.split('').map((char, charIdx) => (
                      <motion.span
                        key={`${wordIdx}-${charIdx}`}
                        className="inline-block text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase text-[#121212]"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          delay: (wordIdx * 5 + charIdx) * 0.04, 
                          duration: 0.6, 
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </div>
"""

content = re.sub(
    r'<h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase leading-none text-\[#121212\]">\s*\{studentData\.name\}\s*</h1>',
    staggered_h1,
    content
)

# 3. Add Marquee
marquee_component = """
      {/* Infinite Tech Marquee */}
      <div className="w-full bg-[#121212] py-3 overflow-hidden border-t border-b border-[#121212]">
        <div className="animate-marquee flex gap-8 items-center">
          {[...studentData.skills, ...studentData.skills, ...studentData.skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <span className="text-xs sm:text-sm font-mono font-bold uppercase text-white tracking-widest">{skill}</span>
              <span className="text-blue-500 font-black">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
"""

content = content.replace('</section>', marquee_component)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)
