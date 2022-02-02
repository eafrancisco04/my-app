import profilepic from '../img/profilepic.jpg'

function Bio(){
    return(
    /*html here */
        <main>
            <div class ="bio">
                <div class ="about">
                    <h2>Hi! I'm Elizabeth Francisco.</h2>
                    <h3>Welcome to my sample website.</h3>
                    <br></br>

                    <p class="intro">I am a freelance writer and content manager from the Philippines. This project was created to help us practice making single web pages using React.
                    </p>
                </div>

                <img src={profilepic} alt="Elizabeth Profile" id="profile" />
            </div>
            
        </main>

    )

}


export default Bio