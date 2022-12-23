export const DemoData = [
  {
    id: 1,
    slug: "how-to-reslove-react-hydration-error-in-simple-way",
    title: "Reslove react hydration error in simple way 🚀",
    subtitle:
      "Fix Next.js “Text content does not match server-rendered HTML” React hydration error in Next Js",
    NetlifyBlog: "React Hydration Error",
    catagory: "html",
    view: Math.floor(Math.random() * 500),
    likes: 5,
    date: "Thus 15th September",
    tags: ["React", "Vue"],
    createdAt: new Date(),
    code: `  
const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, []);
  return hydration ? children : <div></div>;
};
    `,
    description: `
    1. While rendering your application, there was a difference between the React tree that was pre-rendered
    (SSR/SSG) and the React tree that rendered during the first render in the Browser.
    
    `,
  },
  {
    id: 2,

    title: "We offer sale of products through the you should ",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-booker",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "css",
  },
  {
    id: 3,
    title: "Why reading is Important for our children",
    subtitle:
      "In our app you can see the delay time of your order. What books you should read What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-app",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "javascript",
  },
  {
    id: 4,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "react",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },

  {
    id: 5,
    title: "What books you should read in 2022?",
    subtitle:
      "What books you should read in 2022? What books you should read in 2022? What books you should read in 2022? What books you should read in 2022?",
    likes: 5,
    view: Math.floor(Math.random() * 500),
    date: "Thus 15th September",
    createdAt: new Date(),
    slug: "What-books",
    code: `import { Button } from '@mantine/core';

  return <Button>Hello</Button>
}`,
    catagory: "next",
  },
];
