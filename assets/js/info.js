const infos = {}

function setProfile(profile){
    const profileClass = new Profile()
    profileClass.name = profile.profileInfo.name
    profileClass.profileImg = profile.profileInfo.profileImg
    profileClass.job = profile.profileInfo.job
    profileClass.location = profile.profileInfo.location
    profileClass.phone = profile.profileInfo.phone 
    profileClass.email = profile.profileInfo.email

    profileClass.skills.push(...profile.skillsInfo)
    profileClass.certifications.push(...profile.certificationInfo)
    profileClass.education.push(...profile.educationInfo)
    profileClass.professionalExperience.push(...profile.professionalExperienceInfo)

    return profileClass
}

infos.setInfos = () => {
    return fetch('https://raw.githubusercontent.com/rnn-fo/javascript-developer-dio-curriculum/master/data.json')
        .then(response => response.json())
        .then(profile => setProfile(profile))
}
