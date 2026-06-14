export type Pricing = "free" | "paid"

export type Resource = {
  slug: string
  title: string
  provider: string
  platform: string
  author: string
  category: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  pricing: Pricing
  duration: string
  summary: string
  description: string
  highlights: string[]
  url: string
}

export type Section = {
  slug: "home" | "beginners" | "insights" | "roadmaps"
  name: string
  tagline: string
  description: string
  resources: Resource[]
}

// ---------------------------------------------------------------------------
// HOME — What is AI + tech leaders talking about AI
// ---------------------------------------------------------------------------
const homeResources: Resource[] = [
  {
    slug: "but-what-is-a-neural-network",
    title: "But what is a Neural Network?",
    provider: "3Blue1Brown",
    platform: "YouTube",
    author: "Grant Sanderson",
    category: "Foundations",
    level: "Beginner",
    pricing: "free",
    duration: "19 min",
    summary:
      "A visual, intuition-first introduction to what neural networks actually are and how they learn.",
    description:
      "This is the canonical starting point for anyone curious about AI. Grant Sanderson uses gorgeous animations to explain neurons, weights, biases, and layers without drowning you in math. By the end you understand how a network turns pixels into a digit prediction.",
    highlights: [
      "No prior ML knowledge required",
      "Beautiful, animated explanations",
      "Builds real intuition for how networks learn",
    ],
    url: "https://www.youtube.com/watch?v=aircAruvnKk",
  },
  {
    slug: "sam-altman-on-the-future-of-ai",
    title: "Sam Altman on the Future of AI",
    provider: "Lex Fridman Podcast",
    platform: "YouTube",
    author: "Lex Fridman & Sam Altman",
    category: "Industry Perspective",
    level: "All Levels",
    pricing: "free",
    duration: "2 hr 30 min",
    summary:
      "OpenAI's CEO discusses AGI, safety, and where large language models are heading next.",
    description:
      "A long-form conversation covering the trajectory of AI, the responsibilities of building powerful models, and what the next decade of intelligence could look like. Great for understanding the mindset of the people steering modern AI.",
    highlights: [
      "Vision for AGI and its risks",
      "How OpenAI thinks about safety",
      "Candid takes on hype vs reality",
    ],
    url: "https://www.youtube.com/watch?v=L_Guz73e6fw",
  },
  {
    slug: "the-godfather-of-ai-geoffrey-hinton",
    title: "The Godfather of AI — Geoffrey Hinton",
    provider: "CBS Mornings",
    platform: "YouTube",
    author: "Geoffrey Hinton",
    category: "Industry Perspective",
    level: "All Levels",
    pricing: "free",
    duration: "40 min",
    summary:
      "The pioneer of deep learning reflects on what he built and the risks he now warns about.",
    description:
      "Geoffrey Hinton, whose work made modern neural networks possible, shares why he left Google and what concerns him about the pace of AI progress. Essential context for understanding the ethical conversation around AI.",
    highlights: [
      "First-hand history of deep learning",
      "Honest discussion of AI risk",
      "Perspective from a Turing Award winner",
    ],
    url: "https://www.youtube.com/watch?v=qrvK_KuIeJk",
  },
  {
    slug: "how-ai-could-empower-any-business-andrew-ng",
    title: "How AI Could Empower Any Business",
    provider: "TED",
    platform: "YouTube",
    author: "Andrew Ng",
    category: "Industry Perspective",
    level: "All Levels",
    pricing: "free",
    duration: "12 min",
    summary:
      "Andrew Ng explains how AI is becoming accessible to small businesses, not just tech giants.",
    description:
      "A concise, optimistic TED talk on democratizing AI. Andrew Ng argues that the tools to build AI are increasingly available to everyone and outlines how non-technical organizations can start adopting it today.",
    highlights: [
      "Practical, business-focused view",
      "From one of AI's best teachers",
      "Short and highly quotable",
    ],
    url: "https://www.youtube.com/watch?v=reUZRyXxUs4",
  },
  {
    slug: "what-is-generative-ai",
    title: "What is Generative AI?",
    provider: "IBM Technology",
    platform: "YouTube",
    author: "Martin Keen",
    category: "Foundations",
    level: "Beginner",
    pricing: "free",
    duration: "8 min",
    summary:
      "A crisp explainer of generative AI, LLMs, and how tools like ChatGPT generate content.",
    description:
      "IBM's whiteboard-style breakdown of what generative AI means, how it differs from traditional models, and where it is used. A perfect quick primer before diving deeper.",
    highlights: [
      "Clear whiteboard explanations",
      "Covers LLMs and diffusion at a high level",
      "Great refresher for any level",
    ],
    url: "https://www.youtube.com/watch?v=hfIUstzHs9A",
  },
  {
    slug: "ai-for-everyone-coursera",
    title: "AI for Everyone",
    provider: "DeepLearning.AI",
    platform: "Coursera",
    author: "Andrew Ng",
    category: "Foundations",
    level: "Beginner",
    pricing: "free",
    duration: "~6 hours",
    summary:
      "A non-technical course explaining what AI can and cannot do for you and your organization.",
    description:
      "Designed for everyone, this course teaches the meaning of common AI terminology, what's realistic, and how to navigate AI projects. Auditable for free on Coursera.",
    highlights: [
      "No coding required",
      "Builds AI literacy fast",
      "Free to audit",
    ],
    url: "https://www.coursera.org/learn/ai-for-everyone",
  },
]

// ---------------------------------------------------------------------------
// BEGINNERS — Fundamentals: pandas, NumPy, TensorFlow, etc.
// ---------------------------------------------------------------------------
const beginnerResources: Resource[] = [
  {
    slug: "pandas-full-course",
    title: "Pandas — Full Course for Beginners",
    provider: "freeCodeCamp",
    platform: "YouTube",
    author: "freeCodeCamp",
    category: "Data Analysis",
    level: "Beginner",
    pricing: "free",
    duration: "4 hours",
    summary:
      "Learn data manipulation with pandas — DataFrames, cleaning, grouping, and merging.",
    description:
      "A complete, hands-on pandas course covering Series and DataFrames, reading data, filtering, grouping, and joining datasets. Pandas is the workhorse of data preparation for nearly every AI project.",
    highlights: [
      "DataFrames and Series from scratch",
      "Real dataset cleaning examples",
      "Foundation for all data work",
    ],
    url: "https://www.youtube.com/watch?v=vmEHCJofslg",
  },
  {
    slug: "numpy-full-course",
    title: "NumPy — Complete Tutorial",
    provider: "freeCodeCamp",
    platform: "YouTube",
    author: "Keith Galli",
    category: "Numerical Computing",
    level: "Beginner",
    pricing: "free",
    duration: "1 hour",
    summary:
      "Master N-dimensional arrays, broadcasting, and vectorized math — the base of all ML.",
    description:
      "NumPy underpins virtually every Python ML library. This tutorial teaches array creation, indexing, broadcasting, and linear-algebra operations you'll reuse constantly in TensorFlow and PyTorch.",
    highlights: [
      "ndarrays and broadcasting",
      "Vectorized operations",
      "Required before deep learning",
    ],
    url: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
  },
  {
    slug: "tensorflow-2-full-course",
    title: "TensorFlow 2.0 — Complete Course",
    provider: "freeCodeCamp",
    platform: "YouTube",
    author: "Tim Ruscica",
    category: "Deep Learning",
    level: "Intermediate",
    pricing: "free",
    duration: "7 hours",
    summary:
      "Build neural networks end to end with TensorFlow and Keras, from tensors to deployment.",
    description:
      "A thorough TensorFlow course covering tensors, neural networks, CNNs, RNNs, and reinforcement learning basics. Once you know pandas and NumPy, this is where you start building real models.",
    highlights: [
      "Keras model building",
      "CNNs and RNNs included",
      "Hands-on projects throughout",
    ],
    url: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
  },
  {
    slug: "matplotlib-crash-course",
    title: "Matplotlib Crash Course",
    provider: "freeCodeCamp",
    platform: "YouTube",
    author: "freeCodeCamp",
    category: "Data Visualization",
    level: "Beginner",
    pricing: "free",
    duration: "1.5 hours",
    summary:
      "Visualize data and model results with line plots, histograms, and subplots.",
    description:
      "Data visualization is how you understand your data and communicate results. This crash course teaches Matplotlib fundamentals you'll use to inspect datasets and training curves.",
    highlights: [
      "Plots, histograms, scatter charts",
      "Customizing figures",
      "Pairs perfectly with pandas",
    ],
    url: "https://www.youtube.com/watch?v=3Xc3CA655Y4",
  },
  {
    slug: "python-for-data-science",
    title: "Python for Data Science & ML Bootcamp",
    provider: "Udemy",
    platform: "Udemy",
    author: "Jose Portilla",
    category: "Foundations",
    level: "Beginner",
    pricing: "paid",
    duration: "25 hours",
    summary:
      "A structured path through Python, pandas, NumPy, Matplotlib, and intro ML.",
    description:
      "A best-selling bootcamp that ties all the fundamentals together — Python, the data stack, visualization, and an introduction to scikit-learn. A paid, guided alternative to piecing together free videos.",
    highlights: [
      "Structured, project-based",
      "Covers the full data stack",
      "Certificate of completion",
    ],
    url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
  },
  {
    slug: "scikit-learn-crash-course",
    title: "Scikit-learn Crash Course",
    provider: "freeCodeCamp",
    platform: "YouTube",
    author: "freeCodeCamp",
    category: "Machine Learning",
    level: "Beginner",
    pricing: "free",
    duration: "2 hours",
    summary:
      "Your first machine learning models — regression, classification, and pipelines.",
    description:
      "Scikit-learn is the gateway to classical machine learning. This course walks through training, evaluating, and tuning models with clean, consistent APIs before you move to deep learning.",
    highlights: [
      "Train/test splits and metrics",
      "Pipelines and preprocessing",
      "Bridge to deep learning",
    ],
    url: "https://www.youtube.com/watch?v=0B5eIE_1vpU",
  },
]

// ---------------------------------------------------------------------------
// INSIGHTS — ML, DL, CNN/RCNN, RNN, Transformers
// ---------------------------------------------------------------------------
const insightResources: Resource[] = [
  {
    slug: "machine-learning-andrew-ng",
    title: "Machine Learning Specialization",
    provider: "DeepLearning.AI & Stanford",
    platform: "Coursera",
    author: "Andrew Ng",
    category: "Machine Learning",
    level: "Intermediate",
    pricing: "free",
    duration: "~2 months",
    summary:
      "The definitive ML course — supervised learning, neural networks, and best practices.",
    description:
      "The modernized version of the legendary ML course. Covers regression, classification, neural networks, and practical advice for building systems that work. Auditable for free.",
    highlights: [
      "Taught by Andrew Ng",
      "Strong math and intuition balance",
      "Free to audit",
    ],
    url: "https://www.coursera.org/specializations/machine-learning-introduction",
  },
  {
    slug: "deep-learning-specialization",
    title: "Deep Learning Specialization",
    provider: "DeepLearning.AI",
    platform: "Coursera",
    author: "Andrew Ng",
    category: "Deep Learning",
    level: "Advanced",
    pricing: "paid",
    duration: "~3 months",
    summary:
      "Five courses covering neural networks, CNNs, sequence models, and tuning.",
    description:
      "A comprehensive specialization that takes you from the fundamentals of deep nets to convolutional and recurrent architectures, with hands-on programming assignments. The standard for serious DL learners.",
    highlights: [
      "CNNs, RNNs, and attention",
      "Programming assignments",
      "Industry-recognized certificate",
    ],
    url: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    slug: "cnn-explained",
    title: "Convolutional Neural Networks Explained",
    provider: "DeepLearning.AI",
    platform: "YouTube",
    author: "Andrew Ng",
    category: "CNN",
    level: "Intermediate",
    pricing: "free",
    duration: "Series",
    summary:
      "How CNNs see images — convolutions, pooling, and feature maps demystified.",
    description:
      "A focused lecture series on convolutional neural networks, the architecture powering modern computer vision. Understand filters, strides, and why convolutions work so well on images.",
    highlights: [
      "Convolution and pooling layers",
      "Visual feature learning",
      "Foundation for object detection",
    ],
    url: "https://www.youtube.com/watch?v=ArPaAX_PhIs",
  },
  {
    slug: "rcnn-object-detection",
    title: "R-CNN, Fast & Faster R-CNN for Detection",
    provider: "Stanford CS231n",
    platform: "YouTube",
    author: "Stanford",
    category: "RCNN",
    level: "Advanced",
    pricing: "free",
    duration: "1.5 hours",
    summary:
      "Region-based CNNs for object detection — the R-CNN family explained in depth.",
    description:
      "Part of Stanford's renowned CS231n, this lecture covers detection and segmentation, walking through R-CNN, Fast R-CNN, and Faster R-CNN. Essential for understanding how machines localize objects.",
    highlights: [
      "Region proposals explained",
      "From R-CNN to Faster R-CNN",
      "World-class university lecture",
    ],
    url: "https://www.youtube.com/watch?v=nDPWywWRIRo",
  },
  {
    slug: "rnn-lstm-explained",
    title: "RNNs and LSTMs Explained",
    provider: "StatQuest",
    platform: "YouTube",
    author: "Josh Starmer",
    category: "RNN",
    level: "Intermediate",
    pricing: "free",
    duration: "40 min",
    summary:
      "Recurrent networks and LSTMs for sequences, broken down step by step.",
    description:
      "StatQuest's signature clear-and-friendly style applied to recurrent neural networks and LSTMs. Learn how networks handle sequential data like text and time series.",
    highlights: [
      "Sequence modeling intuition",
      "LSTM gates explained simply",
      "Great for time-series learners",
    ],
    url: "https://www.youtube.com/watch?v=AsNTP8Kwu80",
  },
  {
    slug: "attention-is-all-you-need-transformers",
    title: "Transformers & Attention Explained",
    provider: "3Blue1Brown",
    platform: "YouTube",
    author: "Grant Sanderson",
    category: "Transformers",
    level: "Advanced",
    pricing: "free",
    duration: "27 min",
    summary:
      "How attention and transformers work — the architecture behind modern LLMs.",
    description:
      "A visual deep dive into the transformer architecture and the attention mechanism that powers GPT and other large language models. The bridge from classic deep learning to today's frontier.",
    highlights: [
      "Self-attention visualized",
      "Foundation of modern LLMs",
      "Signature 3Blue1Brown clarity",
    ],
    url: "https://www.youtube.com/watch?v=eMlx5fFNoYc",
  },
]

// ---------------------------------------------------------------------------
// ROADMAPS — All about AI: learning paths from free to affordable
// ---------------------------------------------------------------------------
const roadmapResources: Resource[] = [
  {
    slug: "ai-engineer-roadmap",
    title: "AI Engineer Roadmap",
    provider: "roadmap.sh",
    platform: "roadmap.sh",
    author: "roadmap.sh community",
    category: "Roadmap",
    level: "All Levels",
    pricing: "free",
    duration: "Self-paced",
    summary:
      "A visual, step-by-step roadmap to becoming an AI engineer with curated resources.",
    description:
      "An open-source, community-maintained roadmap that lays out exactly what to learn and in what order to become an AI engineer — from prompt engineering to RAG and deployment. Completely free.",
    highlights: [
      "Visual skill tree",
      "Curated learning order",
      "Always up to date",
    ],
    url: "https://roadmap.sh/ai-engineer",
  },
  {
    slug: "data-scientist-roadmap",
    title: "Data Scientist Roadmap",
    provider: "roadmap.sh",
    platform: "roadmap.sh",
    author: "roadmap.sh community",
    category: "Roadmap",
    level: "All Levels",
    pricing: "free",
    duration: "Self-paced",
    summary:
      "From statistics and Python to ML deployment — a complete data science path.",
    description:
      "A structured roadmap covering the full data science journey: math, programming, data wrangling, modeling, and deployment. Free and frequently updated by the community.",
    highlights: [
      "Stats to deployment",
      "Resource links at each node",
      "Free and open source",
    ],
    url: "https://roadmap.sh/ai-data-scientist",
  },
  {
    slug: "fast-ai-practical-deep-learning",
    title: "Practical Deep Learning for Coders",
    provider: "fast.ai",
    platform: "fast.ai",
    author: "Jeremy Howard",
    category: "Roadmap",
    level: "Intermediate",
    pricing: "free",
    duration: "~7 weeks",
    summary:
      "A top-down, code-first deep learning course that gets you building models fast.",
    description:
      "fast.ai's flagship course teaches deep learning by building real models from lesson one. Beloved for its practical approach, it's entirely free with no ads. A complete path on its own.",
    highlights: [
      "Code-first, top-down teaching",
      "Build models in week one",
      "100% free, no ads",
    ],
    url: "https://course.fast.ai/",
  },
  {
    slug: "google-ml-crash-course",
    title: "Machine Learning Crash Course",
    provider: "Google",
    platform: "Google Developers",
    author: "Google",
    category: "Roadmap",
    level: "Beginner",
    pricing: "free",
    duration: "~15 hours",
    summary:
      "Google's fast-paced intro to ML with interactive exercises and TensorFlow.",
    description:
      "A free crash course from Google featuring video lectures, real-world case studies, and hands-on exercises in the browser. A great structured on-ramp into machine learning.",
    highlights: [
      "Interactive in-browser labs",
      "Built by Google engineers",
      "Free, structured curriculum",
    ],
    url: "https://developers.google.com/machine-learning/crash-course",
  },
  {
    slug: "ibm-ai-engineering-certificate",
    title: "IBM AI Engineering Professional Certificate",
    provider: "IBM",
    platform: "Coursera",
    author: "IBM",
    category: "Roadmap",
    level: "Intermediate",
    pricing: "paid",
    duration: "~4 months",
    summary:
      "A job-ready certificate covering ML, deep learning, and model deployment.",
    description:
      "An affordable, structured professional certificate that takes you from ML fundamentals to deploying models with Keras, PyTorch, and TensorFlow. Subscription-based with a career-focused outcome.",
    highlights: [
      "Job-ready portfolio projects",
      "Shareable certificate",
      "Affordable subscription",
    ],
    url: "https://www.coursera.org/professional-certificates/ai-engineer",
  },
  {
    slug: "datacamp-ai-track",
    title: "AI Fundamentals Skill Track",
    provider: "DataCamp",
    platform: "DataCamp",
    author: "DataCamp",
    category: "Roadmap",
    level: "Beginner",
    pricing: "paid",
    duration: "~16 hours",
    summary:
      "Interactive, browser-based lessons covering AI concepts and hands-on coding.",
    description:
      "An affordable subscription path with bite-sized interactive coding exercises. Good for learners who prefer doing over watching, with a clear progression through AI fundamentals.",
    highlights: [
      "Hands-on browser exercises",
      "Bite-sized lessons",
      "Affordable subscription",
    ],
    url: "https://www.datacamp.com/tracks/artificial-intelligence-fundamentals",
  },
]

export const sections: Section[] = [
  {
    slug: "home",
    name: "What is AI",
    tagline: "Start here",
    description:
      "Understand what artificial intelligence really is and hear what the people building it have to say — curated talks and explainers from the leaders shaping the field.",
    resources: homeResources,
  },
  {
    slug: "beginners",
    name: "AI Beginners",
    tagline: "Build your foundation",
    description:
      "Before mastering AI you need the fundamentals. Master the essential tools — pandas, NumPy, TensorFlow, and more — with these hand-picked courses.",
    resources: beginnerResources,
  },
  {
    slug: "insights",
    name: "AI Insights",
    tagline: "Go deeper",
    description:
      "Dive into the core of modern AI: machine learning, deep learning, CNNs, R-CNN, RNNs, and the transformer architecture behind today's breakthroughs.",
    resources: insightResources,
  },
  {
    slug: "roadmaps",
    name: "All About AI",
    tagline: "Plan your journey",
    description:
      "Complete learning roadmaps and platforms to take you from beginner to job-ready — clearly marked from free to affordable so you can choose what fits.",
    resources: roadmapResources,
  },
]

export function getSection(slug: Section["slug"]): Section | undefined {
  return sections.find((s) => s.slug === slug)
}

export function getResource(
  sectionSlug: Section["slug"],
  resourceSlug: string,
): { section: Section; resource: Resource } | undefined {
  const section = getSection(sectionSlug)
  if (!section) return undefined
  const resource = section.resources.find((r) => r.slug === resourceSlug)
  if (!resource) return undefined
  return { section, resource }
}
