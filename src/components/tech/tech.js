import React, { FC } from 'react';
import '../work/work.css'
import './tech.css'
import Python from '../../assets/python.jpeg'
import Java from '../../assets/java.png'
import JavaScript from '../../assets/javascript.png'
import HtmlCss from '../../assets/html-css.png'
import MySQL from '../../assets/mysql.png'
import Django from '../../assets/django.png'
import AWS from '../../assets/aws.png'
import GIT from '../../assets/git.png'
import postgresql from '../../assets/postgresql.png'
import docker from '../../assets/docker.png'
import jenkins from '../../assets/jenkins.jpeg'
import node from '../../assets/nodejs.png'
import react from '../../assets/react.png'

function Tech () {
   return (
      <div>
         <h1 className='quick-fix-alignment'>Favorite Tech</h1><br></br><br></br>
         <table className='tech-table'>
            <tr>
               <td className='tech-table tech-td'>
                  <img src={Python}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={Java}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={JavaScript}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={HtmlCss}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
            </tr>
            <tr>
               <td className='tech-table tech-td'>
                  <h4>Python</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>Java</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>JavaScript</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>HTML/CSS</h4>
               </td>
            </tr>
            <tr>
               <td> I have used Python professionally for 2 years at Zaya Learning Labs
                  & at GetSetUp. It is by far the language I am most familiar with.
               </td>
               <td>
                  I have worked on a couple of projects on Sprinboot which uses Java.
                  It is the most used language in my masters degree.
               </td>
               <td>
                  I have worked on JavaScript/TypeScript professionally for 2 years
                  as most of the projects were migrated from Django to NodeJs and frontend
                  on ReactJs & VueJs.
               </td>
               <td>
                  I have the most hands-on experience on HTML/CSS since I have been working on 
                  it since childhood. I love making websites and no website is complete without
                  the combination of these two!
               </td>
            </tr><br></br><br></br>
            <tr>
               <td className='tech-table tech-td'>
                  <img src={GIT}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={MySQL}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={postgresql}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={AWS}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
            </tr>
            <tr>
               <td className='tech-table tech-td'>
                  <h4>Git</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>MySQL</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>PostgreSQL</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>AWS</h4>
               </td>
            </tr>
            <tr>
               <td>
                  I have used Git for all my projects. I have used it professionally as well as
                  for my own projects. Its my go-to tech for version control.
               </td>
               <td>
                  The initial database language I learned was MySQL, 
                  and I've continued using it ever since.
               </td>
               <td>
                  For two years, I've worked with PostgreSQL in a professional capacity, 
                  which has provided me with an advanced understanding of this database language.
               </td>
               <td>
                  I oversaw the migration of Zaya Learning Labs' live projects to new 
                  EC2 hosting and S3 buckets for asset storage. Additionally, 
                  I created an emailing microservice utilizing Lambda, SNS, and SQS, 
                  which significantly broadened my expertise in this technology.
               </td>
            </tr><br></br><br></br>
            <tr>
               <td className='tech-table tech-td'>
                  <img src={docker}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={jenkins}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={node}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
               <td className='tech-table tech-td'>
                  <img src={react}
                  alt="Kuljeet Singh Bhengura"></img>
               </td>
            </tr>
            <tr>
               <td className='tech-table tech-td'>
                  <h4>Docker</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>Jenkins</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>NodeJs</h4>
               </td>
               <td className='tech-table tech-td'>
                  <h4>ReactJs</h4>
               </td>
            </tr>
            <tr>
               <td>
                  I came across these terms in grad school, and after having 
                  used them for a couple course projects, I realized how important 
                  and relevant containerization and orchestration are in the industry today.
               </td>
               <td>
                  Professionally, I have developed scripts to continuously deploy the projects
                  on server after changes. The simplicity of Jenkins makes it a 
                  favorite CI/CD tool for developers.
               </td>
               <td>
                  I developed my first project on NodeJs during my undergrad
                  back in 2017, and this has been my go-to Js framework for web development.
               </td>
               <td>
                  For frontend, now that I have a couple of projects in ReactJs, I am inclined 
                  towards using ReactJs. <span className='graduation'>This portfolio is developed on React too ;) </span>
               </td>
            </tr><br></br><br></br>

         </table><br></br><br></br>
      </div>
   )
}

export default Tech;
