function Contact(){
    return(
    /*html here */
        <main>
            <div class ="bio">
                <form id="form">   
                    <h2>Contact Me</h2>

                    <input class="nameemail" type="text" placeholder="Your Name" id="name"></input>
                    <input class="nameemail" type="email" placeholder="Your Email" id="Email"></input>
                    <br/>
                    <input class="message" type="" placeholder="Your message" id="message"></input>
                    <br/>
                    <button type="submit">Submit</button>
                 </form>  
                
            </div>
        </main>

    )

}


export default Contact