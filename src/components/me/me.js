import React, { FC } from 'react';
import profile from '../../assets/Profile.jpeg'
import './me.css'
import { IoMdDownload } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Resume from '../../assets/Resume.pdf'
import Zip from '../../assets/Letters.zip'
import Transcript from '../../assets/Transcript.pdf'
import App from '../../App';

function Me () {
   return (
      <div>
         <table className='align-about-me'>
            <tr>
               <th className='section top-align' rowSpan={11}><img className='round-img' src={profile}></img></th>
               <th className='pad-align' colSpan={2}>About Me</th>
            </tr>
            <tr>
               <td className='pursue pad-align' colSpan={2}> 
                  I have more than two years of experience as a software developer and 
                  will graduate with my master's degree in May 2024. 
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
                     <Button className='download-button' onClick={() => App.handleClick("Downloaded Resume")}>Download Resume</Button>
                  </a><br></br><br></br>
                  <a href={Transcript} download="Transcript" target='_blank'>
                     <Button className='download-button' onClick={() => App.handleClick("Downloaded Transcripts")}>Download Unofficial Transcript</Button>
                  </a><br></br><br></br>
                  <a href={Zip} download="Experience Letters" target='_blank'>
                     <Button className='download-button' onClick={() => App.handleClick("Download experience letters")}>Download Experience letters</Button>
                  </a>
               </th>
            </tr>
            <tr>
               <td className='pad-align-2 font-important'>Address:</td>
            </tr>
            <tr>
               <td className='pad-align-2'>4125 Locust Ln.<br></br>Fairfax, VA 22030</td>
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
