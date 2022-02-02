import profilepic from '../img/profilepic.jpg'

function Bio(){
    return(
    /*html here */
        <main>
            <div class ="intro">
                <div>
                    <h2>Hi! I'm Elizabeth Francisco.</h2>
                    <h3>Welcome to my sample website.</h3>
                    <br></br>

                    <p>This project was created to help us practice making single web pages using React.
                    </p>
                </div>

                <img src={profilepic} alt="Elizabeth Profile" id="profile" />
            </div>

            <div class="about">
                <h2> About Me</h2>
                <p>
                    I am a freelance writer and content manager from the Philippines. I have over 4 years of experience helping clients build their brand and growing the social media.
                    Part of my work also involved creating and handlnig their websites. It was through my work in digital marketing that I was introduced to the idea of pursuing web design.
                </p>

            </div>
            
            
        </main>

    )

}


export default Bio