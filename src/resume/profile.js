import React from 'react';

const ProfileText = `
I am a former student of UNC Chapel Hill and Consultant at Levvel, LLC. I have naturally
migrated to software and programming in every position I have ever held, including in
biology research and a clinical laboratory. Along the way, I have supplemented my skills
through explorations of science, mathematics, and logical reasoning. I am currently focused
on enterprise web development, especially on database design and creating effective,
maintainable code while addressing the ever-changing needs of clients.
`

const Profile = (props) => (
  <div className="row">
    <div className="col-md-2"><strong>Profile:</strong></div>
    <div className="col-md-10"><p>{ProfileText}</p></div>
  </div>
)

export default Profile;
