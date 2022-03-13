import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";

const workHistory = [
    {
        title: 'Full Stack Developer',
        company: 'Flost',
        timeThere: 'Nov 2018 - Present',
        location: 'Remote',
        description: 'Responsible for engineering the backend and frontend of the React application utilizing the PERN stack. This workload consists  of server routing, database  management, quality assurance,  network security, API integrations such as AWS S3, and UI/UX  designing.',
        icon: '',
        misc: []
    },
    {
        title: 'Coding Instructor',
        company: 'Nucamp & MITxPRO',
        timeThere: 'Apr 2020 - Present',
        location: 'Remote',
        description: 'Acting as a guide for students through HTML, JS, and CSS and Python DS&A for Nucamp. I host a 4 hour lecture every Saturday for the cohort of students. For MITxPRO I co-teach a bootcamp in the MERN stack to a cohort of around 30 students 2-4 hours a week.',
        icon: '',
        misc: []
    },
    {
        title: 'Computer  Science Tutor',
        company: 'VeroSkills',
        timeThere: 'August 2021 - Present',
        location: 'Remote',
        description: 'Essentially acting as an uber for computer science tutoring. Whenever  anyone needs assistance they can use the platform to request help live from a tutor in an instant. I guide them through various bugs, tech stacks, and even career/project advice.',
        icon: '',
        misc: []
    },
    {
        title: 'Software Engineer Intern',
        company: 'Salesforce',
        timeThere: 'May 2018 - Aug 2018',
        location: 'New York, NY',
        description: 'After being approved by the work done during my previous internship I worked on various bugs for the Social Cloud Platform doing Network Security and debugging UI bugs. Also engineered an Active Targeting Language Widget for the SC platform where I utilized Backbone.js, PHP, CSS, and jQuery to build the feature. This was built using language data from the Facebook Graph API. Both summers required me to follow an Agile SCRUM weekly and utilized internal Salesforce project management softwares.',
        icon: '',
        misc: []
    },
    {
        title: 'Software Engineer Intern',
        company: 'Salesforce',
        timeThere: 'May 2017  - Aug 2017',
        location: 'New York, NY',
        description: 'Engineered a new Aura component that displayed the Engagement History of Campaigns on the Salesforce Sales Cloud platform. The component consisted of a Java controller where I used SQL to query data then pushed said data to the Salesforce servers using JavaScript. The data is then sent to the Aura markup which is composed of JavaScript, CSS, and XML',
        icon: '',
        misc: []
    },
    {
        title: 'Software Engineer & Customer Success Intern',
        company: 'Badger Maps',
        timeThere: 'Aug 2016 - Nov 2016',
        location: 'San Francisco, California',
        description: "The goal of the project was to increase traffic to the company site and increase the company's google SEO ranking by accumulating geojson data of the boroughs of New York.  An interactive API of the scale would bring more traffic to the company's site. All project management was organized through Jira.",
        icon: '',
        misc: []
    },
    

]

export default function Resume(props){
    const [resumeHistory, setResume] = useState(workHistory)

    useEffect(()=>{
        if(resumeHistory){
            let listings = []
            resumeHistory.map((job)=>{
                const listing = (
                <section id='job'>
                    <h2><span class='company'>{`${job.title}`}</span>{` @ ${job.company}`}</h2>
                    <label>{`${job.timeThere} / ${job.location}`}</label>
                    <p>{job.description}</p>
                </section>
                )
                listings.push(listing)
            })
            function RenderListings(props){
                return(
                    <React.Fragment>
                        {props.listings}
                    </React.Fragment>
                )
            }
            ReactDOM.render(<RenderListings listings={listings}/>,document.getElementById('work-history') )
        }
    }, [resumeHistory])
    // useEffect(()=>{

    // })

    return(
        <section id='work-history'></section>
    )
}

