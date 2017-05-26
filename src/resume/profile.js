import React from 'react';
import ResumeRow from './resumeRow';

const ProfileText = `
I am a former student of UNC Chapel Hill and Consultant at Levvel, LLC. I have naturally
migrated to software and programming in every position I have ever held, including in
biology research and a clinical laboratory. Along the way, I have supplemented my skills
through explorations of science, mathematics, and logical reasoning. I am currently focused
on enterprise web development, especially on database design and creating effective,
maintainable code while addressing the ever-changing needs of clients.
`

const SkillText = "SQL, Ruby on Rails, ReactJS, Redux, Javascript, Elixir/Phoenix, Git, Angular, CoffeeScript, ES6, jQuery, UNIX, Functional Programming, HTML, CSS"

const EducationText = "UNC Chapel Hill (Graduated 2014), Tech Talent South (Summer 2016)"

const Profile = (props) => (
  <ResumeRow leftText='Profile' rightText={ProfileText}/>
)

const Skills = (props) => (
  <ResumeRow leftText='Skills' rightText={SkillText}/>
)

const Education = (props) => (
  <ResumeRow leftText='Education' rightText={EducationText}/>
)

export {
  Profile,
  Skills,
  Education
};
