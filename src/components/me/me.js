import React, { FC } from 'react';
import profile from '../../assets/Profile.jpeg'
import './me.css'
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/Resume.pdf'

function Me () {
   return (
      <div>
         <table className='align-about-me'>
            <tr>
               <th className='section top-align' rowSpan={11}><img className='round-img' src={profile} alt="Kuljeet Singh Bhengura"></img></th>
               <th className='pad-align' colSpan={2}>About Me</th>
            </tr>
            <tr>
               <td className='pursue pad-align' colSpan={2}> 
                  I have 5+ years of experience as a software developer and 
                  a Masters degree in Computer Science from George Mason University. 
                  I have worked extensively with a range of technologies, 
                  specializing in Django, ReactJS, NodeJS, and MySQL. My proficiency 
                  extends to AWS, where I have successfully deployed live projects 
                  for Zaya Learning Labs. In addition to my technical skills, 
                  I excel in problem-solving and communication, with a strong 
                  aptitude for analysis and organization.
               </td>
            </tr>
            <tr>
               <td></td><td></td>
            </tr><br></br><br></br>
            <tr>
               <th className='pad-align'>Contact Details</th>
               <th rowSpan={7} className='center-align'>
                  Download documents: <br></br><br></br>
                  <a href={Resume} download="Kuljeet Singh Bhengura - Resume" target='_blank'>
                     <Button className='download-button'>Download Resume</Button>
                  </a>
               </th>
            </tr>
            <tr>
               <td className='pad-align-2 font-important'>Address:</td>
            </tr>
            <tr>
               <td className='pad-align-2'>Fairfax, VA 22030</td>
            </tr>
            <tr>
               <td className='pad-align-2 font-important'>Phone:</td>
            </tr>
            <tr>
               <td className='pad-align-2'>571-331-8626</td>
            </tr>
            <tr>
               <td className='pad-align-2 font-important'>Email:</td>
            </tr>
            <tr>
               <td className='pad-align-2'>kbhengura@gmail.com</td>
            </tr>
         </table><br></br><br></br>
      </div>
   )
}

export default Me;
