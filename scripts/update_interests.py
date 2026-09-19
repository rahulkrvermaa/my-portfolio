with open('src/data.ts', 'r') as f:
    data = f.read()

data = data.replace(
    "'Artificial Intelligence',",
    "'Systems Architecture',"
)

data = data.replace(
    "'Problem Solving',",
    "'Cloud Computing',"
)

with open('src/data.ts', 'w') as f:
    f.write(data)
