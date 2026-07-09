export default function Skills() {
    const skills = [
        {
            name: 'Frontend Development',
            icon: './assets/web-icon.png',
            description: 'Building responsive and user-friendly interfaces using HTML, CSS, Bootstrap, JavaScript, and basic React.',
        },
        {
            name: 'Backend Development',
            icon: './assets/code-icon.png',
            description: 'Developing server-side logic and RESTful features using PHP (Laravel) and Python (Django).',
        },
        {
            name: 'Database Management',
            icon: './assets/DB.png',
            description: 'Designing and managing MySQL databases, writing queries, and implementing CRUD operations.',
        },
        {
            name: 'GitHub & Basic Testing',
            icon: './assets/GitHub.png',
            description: 'Using GitHub for version control, code collaboration, and performing basic testing and debugging during development.',
        }
    ];

    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I Know</h4>
            <h2 className="text-center text-5xl font-Ovo">My Skills</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a junior web developer with hands-on experience in frontend and backend development,
                focusing on Laravel and Django-based projects.
            </p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12
                        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
                        duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                    >
                        <img src={skill.icon} alt={skill.name} className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                            {skill.name}
                        </h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}