function setProfileSkills(skills){
    let skillHtml =`
        <div class="skills">
            <ol>
        `
    skills.forEach(skillName => {
        skillHtml+=`<li>${skillName.title}</li>`
    });

    skillHtml+=`
            </ol>
        </div>
        <div class="skillsImg">
    `
    skills.forEach(skillName => {
        skillHtml+=`<img src="${skillName.skillIcon}" alt="${skillName.title}">`
    });

    skillHtml+=`
        </div>
    `

    return skillHtml
}

function setProfileCertifications(certifications){
    let certificationsHtml = `
        <div class="certifications">
    `

    certifications.forEach(certification => {
        certificationsHtml +=`
            <div class="container">
                <h3>${certification.title}</h3>
                <a href="${certification.link}"><img class="az900img" src="${certification.certificationImg}" alt="${certification.title}"></a>
            </div>
        `
    })

    certificationsHtml += `
        </div>
    `

    return certificationsHtml
}

function setProfileEducation(education){
    let educationHtml = ``

    education.forEach(education =>{
        educationHtml += `
        <div class="education">
            <h3>${education.title}</h3>
            <p>
                ${education.university}<br>
                ${education.date}
            </p>
        </div>
        `
    })

    return educationHtml
}

function setProfessionalExperience(professionalExperience){
    let professionalExperienceHtml = ``

    professionalExperience.forEach(pE => {
        professionalExperienceHtml += `
            <div class="professionalExperience">
                <h3>${pE.title}</h3>
                <p>${pE.company} (${pE.date})</p>
                <p>
                    ${pE.description}
                </p>
            </div>
        `
    })

    return professionalExperienceHtml
}

function setProfileContent(profile){

    const profileHeader = document.getElementById('profileHeader')
    const profileSkills = document.getElementById('profileSkills')
    const profileCertifications = document.getElementById('profileCertifications')
    const profileEducation = document.getElementById('profileEducation')
    const profileProfessionalExperience = document.getElementById('profileProfessionalExperience')

    profileHeader.innerHTML = `
        <img class="headerImg" src="${profile.profileImg}" alt="${profile.name}">
        <h1 class="headerTitle">Olá, <br>me chamo ${profile.name}</h1>
        <div class="headerInfo">
            <p><!--img src="" alt="job"-->${profile.job}</p>
            <p><!--img src="" alt="location"-->${profile.location}</p>
            <p><!--img src="" alt="phone"-->${profile.phone}</p>
            <p><!--img src="" alt="email"-->${profile.email}</p>
        </div>
    `
    profileSkills.innerHTML = setProfileSkills(profile.skills)
    profileCertifications.innerHTML = setProfileCertifications(profile.certifications)
    profileEducation.innerHTML = setProfileEducation(profile.education)
    profileProfessionalExperience.innerHTML = setProfessionalExperience(profile.professionalExperience)
}

infos.setInfos()
    .then(profile => setProfileContent(profile))