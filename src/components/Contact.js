function Contact(){
    return(
    /*html here */
        <main>
            <div>
                <form id="form">   
                    <h2 CLASS="contact">Contact Me</h2>

                    <div class="name">
                        <h4>Your Name</h4>
                        <input type="text" placeholder="Your Name" id="name"></input>
                    </div>

                    <div class="email">
                        <h4>Email</h4>
                        <input class="email" type="email" placeholder="Your Email" id="email"></input>
                    </div>

                    <div class="details">
                        <h4>Your Project</h4>
                        <input class="message" type="text" placeholder="Tell me about your project here." id="message"></input>
                    </div>

                    <button type="submit" class="submit">Submit</button>
                 </form>  
                
            </div>
        </main>

    )

}


export default Contact