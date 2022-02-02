import profilepic from '../img/profilepic.jpg'
import Article from './Article'

function Bio(){
    return(
    /*html here */
        <main>
            <section class ="intro">
                <div>
                    <h2>Hi! I'm Elizabeth Francisco.</h2>
                    <h3>Welcome to my sample website.</h3>
                    <br></br>

                    <p>This project was created to help us practice making single web pages using React.
                    </p>
                </div>

                <img src={profilepic} alt="Elizabeth Profile" id="profile" />
            </section>

            <section class="about">
                <h2>About Me</h2>
                <p>
                    I am a freelance writer and content manager from the Philippines. I have over 4 years of experience helping clients build their brand and growing the social media.
                    Part of my work also involved creating and handlnig their websites. It was through my work in digital marketing that I was introduced to the idea of pursuing web design.
                </p>

            </section>

            <section>
                <h2>Education</h2>
                    <div class ="school">
                        <Article head="De La Salle University" subhead="Bachelor of Arts in International Studies, Major in European Studies" 
                                        descr="2013 - 2016"/>
                        <Article head="Humber College" subhead="Web Design and Development" descr="2022 - Present"/>
                    </div>
            </section>

            <section>
                <h2>Work</h2>
                    <div class="work">
                        <Article head="Hinge Inquirer" subhead="Editorial Assistant" descr="Managed the contend and website of Multisport.ph."/>
                        <Article head="M Square Media" subhead="Conten Writer" descr="Create content for the digital marketing team, communications team, and operations team. Oversee and improve the website of the company's clients."/>
                        <Article head="Valher Media" subhead="Podmaster" descr="Manage a team to assist clients in building their brand and website for their podcasts."/>
                    </div>  
            </section>
            
            
        </main>

    )

}


export default Bio