import { CodeIcon } from "@heroicons/react/solid";
import { getPinnedRepos, GithubPinnedRepo } from "../lib/github";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "YOUR_GITHUB_USERNAME";

export default async function Projects() {
    let projects: GithubPinnedRepo[] = [];
    let errorMessage: string | null = null;

    try {
        projects = await getPinnedRepos(GITHUB_USERNAME);
    } catch (error: any) {
        errorMessage = error?.message || "Unable to load GitHub pinned repositories.";
    }

    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font animate-fade-in-up">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        These are some of the projects I've worked on recently. Want to see more? Email me.
                    </p>
                </div>

                {errorMessage ? (
                    <div className="text-red-400 mb-8">
                        {errorMessage}
                    </div>
                ) : null}

                <div className="flex flex-wrap -m-4">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                key={project.id}
                                className="sm:w-1/2 w-full p-4">
                                <div className="flex relative rounded-lg overflow-hidden border-4 border-gray-800 bg-gray-900">
                                    <div className="px-8 py-10 relative w-full transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                            {project.primaryLanguage?.name ?? "Repository"}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">
                                            {project.name}
                                        </h1>
                                        <p className="leading-relaxed min-h-[3rem]">
                                            {project.description ?? "No description available."}
                                        </p>
                                        {project.primaryLanguage ? (
                                            <span className="mt-4 inline-flex items-center text-sm text-gray-400">
                                                <span
                                                    className="inline-block h-3 w-3 rounded-full mr-2"
                                                    style={{ backgroundColor: project.primaryLanguage.color }}
                                                />
                                                {project.primaryLanguage.name}
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="w-full p-4 text-center text-gray-300">
                            No pinned GitHub projects found. Make sure your GitHub username is configured in <code className="text-white">GITHUB_USERNAME</code> and your token is available in <code className="text-white">GITHUB_TOKEN</code>.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}