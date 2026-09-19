import os

# 1. Update types.ts
with open('src/types.ts', 'r') as f:
    types_content = f.read()

types_content = types_content.replace('  bio: string;', '  bio: string;\n  shortBio?: string;')

with open('src/types.ts', 'w') as f:
    f.write(types_content)

# 2. Update data.ts
with open('src/data.ts', 'r') as f:
    data_content = f.read()

data_content = data_content.replace(
    "  bio: 'I’m a B.Tech Computer Science student who enjoys building practical software, experimenting with new technologies, and turning ideas into working products. I’m currently exploring modern web development, AI, and software engineering.',",
    "  bio: 'I’m a B.Tech Computer Science student who enjoys building practical software, experimenting with new technologies, and turning ideas into working products. I’m currently exploring modern web development, AI, and software engineering.',\n  shortBio: 'Engineering student passionate about scalable architectures, elegant user interfaces, and solving complex algorithmic challenges.',"
)

# Fix skillsData redundancy
data_content = data_content.replace(
    "items: ['C','C++', 'Python', 'JavaScript', 'HTML', 'CSS','React'],",
    "items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],"
)
data_content = data_content.replace(
    "items: ['HTML','CSS','JS','React', 'Tailwind CSS'],",
    "items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Next.js'],"
)

with open('src/data.ts', 'w') as f:
    f.write(data_content)

# 3. Update Hero.tsx
with open('src/components/Hero.tsx', 'r') as f:
    hero_content = f.read()

hero_content = hero_content.replace(
    "{studentData.degree} &bull; Developer &bull; Problem Solver",
    "{studentData.role}"
)

hero_content = hero_content.replace(
    "<p className=\"text-sm sm:text-base text-zinc-800 leading-relaxed\">\n                {studentData.bio}\n              </p>",
    "<p className=\"text-sm sm:text-base text-zinc-800 leading-relaxed\">\n                {studentData.shortBio || studentData.bio}\n              </p>"
)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero_content)

