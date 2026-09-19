import os

files = [
    'src/components/CertificatesSection.tsx',
    'src/components/ProjectsSection.tsx',
    'src/components/AboutSection.tsx',
    'src/components/Navbar.tsx',
    'src/components/SkillsSection.tsx'
]

for file in files:
    if os.path.exists(file):
        with open(file, 'r') as f:
            content = f.read()
        
        # Replace hover states to use accent color
        content = content.replace('hover:bg-zinc-800 text-white', 'hover:bg-blue-600 hover:border-blue-600 text-white')
        content = content.replace('hover:bg-zinc-800 transition-colors', 'hover:bg-blue-600 hover:border-blue-600 transition-colors')
        content = content.replace('hover:bg-zinc-100 text-zinc-700', 'hover:bg-blue-50 text-blue-600 hover:border-blue-500 text-zinc-700')
        content = content.replace('hover:bg-zinc-100 text-black', 'hover:bg-blue-50 text-blue-600 text-black')
        content = content.replace('hover:text-zinc-700', 'hover:text-blue-600')
        content = content.replace('hover:text-black', 'hover:text-blue-600')
        content = content.replace('hover:text-zinc-900', 'hover:text-blue-600')
        
        with open(file, 'w') as f:
            f.write(content)
