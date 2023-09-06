export const projects = [
    {
        id: 0,
        status: 'Live', // Live, In Development, Discontinued
        thumbnail: '',
        title: 'Arnot Health Orthopedics',
        type: 'Patient Resources Website',
        description: 'A medical resources website that allows patients to easily learn about their condition and available treatments by using an interactive skeleton diagram. A headless CMS allows doctors to easily create dynamic content on the fly.',
        contributions: ["code", "design", "copy"], // code, design, copy
        website: "https://www.arnotortho.com",
        tech: [
            { id: 0, logo: 'NEXT', label: 'NEXT.js', },
            { id: 1, logo: 'react', label: 'React', },
            { id: 5, logo: 'javascript', label: 'JavaScript', },
            { id: 2, logo: 'tailwind', label: 'Tailwind', },
            { id: 3, logo: 'nodejs', label: 'Node.js', },
            { id: 4, logo: 'storyblok', label: 'Storyblok CMS', },
        ],
    },
    {
        id: 1,
        status: 'In Development',
        thumbnail: '',
        title: 'Kodak Moments',
        type: 'Custom JIRA Report',
        description: 'Generate custom sprint reports using JIRA and Postmark APIs to automatically send status emails to stakeholders.',
        contributions: ["code", "design"],
        website: null,
        tech: [
            { id: 0, logo: 'NEXT', label: 'NEXT.js', },
            { id: 1, logo: 'react', label: 'React', },
            { id: 5, logo: 'javascript', label: 'JavaScript', },
            { id: 2, logo: 'tailwind', label: 'Tailwind', },
            { id: 3, logo: 'nodejs', label: 'Node.js', },
            { id: 4, logo: '', label: 'JIRA API', },
            { id: 6, logo: '', label: 'Postmark Email API', },
        ],
    },
    {
        id: 3,
        status: 'Live',
        thumbnail: '',
        title: 'Kodak Moments',
        type: 'Various Web Apps and Components',
        description: 'An e-commerce site that allows consumers to add their personal photos to various products including photobooks, canvases, calendars, mugs, and more.',
        contributions: ["code"],
        website: "https://www.kodakmoments.com",
        tech: [
            { id: 1, logo: 'react', label: 'React', },
            { id: 2, logo: 'redux', label: 'Redux', },
            { id: 5, logo: 'javascript', label: 'JavaScript', },
            { id: 3, logo: 'nodejs', label: 'Node.js', },
            { id: 4, logo: '', label: 'Sass', },
            { id: 6, logo: '', label: 'Kodak APIs', },
            { id: 7, logo: '', label: 'Storybook', },
            { id: 7, logo: '', label: 'Vitest, Testing Library', },
        ],
    },
    {
        id: 4,
        status: 'Live',
        thumbnail: '',
        title: 'NYS Education Department',
        type: 'Training & Certification App',
        description: 'A curriculum of video-based courses and certification quizzes that help train teachers to conduct state assessments for students with severe cognitive disabilities.',
        contributions: ["code", "design"],
        website: "https://www.dlmnysaatraining.com/",
        tech: [
            { id: 0, logo: '', label: '', }
        ],
    },
    {
        id: 2,
        status: 'Discontinued',
        thumbnail: '',
        title: 'Pasture Stand',
        type: 'E-commerce Web App',
        description: 'An online farmers market that made it convenient to buy products directly from local farms within a 30 mile radius of a consumer\'s home. The site facilitated farm-to-consumer and farm-to-farm sales.',
        contributions: ["code", "design", "copy"],
        website: "https://www.pasturestand.com/",
        tech: [
            { id: 0, logo: '', label: '', }
        ],
    }
]