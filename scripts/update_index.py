import re

with open('index.html', 'r') as f:
    content = f.read()

head_additions = """
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Rahul Verma — B.Tech CSE & Developer" />
    <meta property="og:description" content="Portfolio of Rahul Verma — B.Tech Computer Science student, full-stack developer, and problem solver." />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Rahul Verma — B.Tech CSE & Developer" />
    <meta property="twitter:description" content="Portfolio of Rahul Verma — B.Tech Computer Science student, full-stack developer, and problem solver." />
    <!-- Favicon (SVG for broad support) -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
    <meta name="theme-color" content="#121212" />
"""

content = content.replace('<title>', head_additions + '\n    <title>')

with open('index.html', 'w') as f:
    f.write(content)
