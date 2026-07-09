export default function About() {
    const tools = [
        { name: 'vscode', icon: './assets/vscode.png', },
        { name: 'MySQl', icon: './assets/MySQL.png', },
        { name: 'SQLite', icon: './assets/SQLite.png', },
        { name: 'Python', icon: './assets/Python.png', },
        { name: 'PHP', icon: './assets/PHP.png', },
       
    ];
    const tools2 = [
        { name: 'Laravel', icon: './assets/Laravel.png', },
        { name: 'Django', icon: './assets/Django.png', },
        { name: 'GitHub', icon: './assets/GitHub.png', },
        { name: 'Bootstrap', icon: './assets/Bootstrap.png', },
        { name: 'git', icon: './assets/git.png', },
       
    ];
    const tools3 = [
       
        { name: 'Javascript', icon: './assets/JavaScript.png', },
        { name: 'jQuery', icon: './assets/jQuery.png', },
        {name: 'Postman', icon:'./assets/postman-icon (1).png'}
       
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript, jQuery, python, PHP, MySql, SQlite',
        },
        {
            name: 'Framework',
            icon1: './assets/coding.png',
            icon2: './assets/coding (1).png',
            description: 'Django, Laravel, Bootstrap ',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'BCA Graduate',
        },
        {
            name: 'Work Experience',
            icon1: './assets/briefcase.png',
            icon2: './assets/suitcase.png',
            description: 'Junior PHP Developer Trainee at Fortigrid India Pvt Ltd',
        }
       
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='./assets/myimage.jpeg' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I’m a Junior Web Developer with experience in both PHP (Laravel) and Python (Django). I enjoy developing structured, database-driven web applications using MVC/MVT architectures. I have hands-on experience with CRUD operations, authentication systems, and template-driven UI development. I’m committed to continuous learning and enjoy working on real-world projects that help me strengthen my full-stack development skills.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i use</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools2.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools3.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}