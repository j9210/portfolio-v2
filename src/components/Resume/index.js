import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">Resume</h1>
			</div>
			<div>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li> 
					<li>Responsive Web Design </li>
				</ol>
				<br></br>
				<h5>Back-End Proficiencies</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>Object Oriented Programming(OOP)</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Dev Tool Proficiencies</h5>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>MySQL Workbench </li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h5>Database Proficiencies</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	)
}

export default Resume;