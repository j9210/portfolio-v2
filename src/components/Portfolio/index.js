import React from 'react';
import Project from '../Project';

function Portfolio() {
  const projects = [
    {
      name: 'Wedding Spot',
      description: 'A wedding planning tool to help connect you with your guests.',
      image: 'https://camo.githubusercontent.com/6e2c6d298b772679c4050ef9c0e8d7df1bf1215e9d83716d7c220ec252d05160/68747470733a2f2f692e696d6775722e636f6d2f42767477344e782e706e67',
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Express.js'],
      github: 'https://github.com/frecklescherokee/weddings',
      deployed: 'https://wedding-spot.herokuapp.com/'
    },
    {
      name: 'Hourly',
      description: 'Hourly will help you keep track of your work hours.',
      image: 'https://github.com/j9210/hourly/blob/main/assets/images/screenshot.PNG',
      technologies: ['HTML/CSS', 'JavaScript', 'Handlebars', 'Express.js', 'Sequelize/MySQL2'],
      github: 'https://github.com/j9210/hourly',
      deployed: 'https://hourly3.herokuapp.com/'
    },
    {
			name: 'Meal Queue',
			description:
				'Meal Queue is an aide to help individuals come up with dinner ideas. Type in a food item and a list of different recipes is presented with an option to view a video tutorial.',
			image: 'https://github.com/axeliono/group-project-1/raw/main/assets/images/mealQ.jpg',
			technologies: ['HTML/SCSS','JavaScript'],
			github: 'https://github.com/axeliono/Meal-Queue.git',
			deployed: 'https://axeliono.github.io/Meal-Queue/',
		},
    {
      name: 'Team Profile Generator',
      description: 'This app will help you organize your work teams.',
      image: 'https://raw.githubusercontent.com/j9210/team-profile-generator/main/assets/imgs/Screenshot.jpg',
      technologies: ['JavaScript'],
      github: 'https://github.com/j9210/team-profile-generator',
      deployed: 'https://github.com/j9210/team-profile-generator'
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;