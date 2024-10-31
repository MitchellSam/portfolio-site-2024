import React from 'react';

const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1',
        link: 'https://github.com/username/project1',
    },
    {
        title: 'Project 2',
        description: 'Description of project 2',
        link: 'https://github.com/username/project2',
    },
];

const Projects = () => (
    <section id="projects" className="p-4">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
                <div key={index} className="card w-full bg-base-100 shadow-md">
                    <div className="card-body">
                        <h3 className="card-title">{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="link link-primary">
                            View on GitHub
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
