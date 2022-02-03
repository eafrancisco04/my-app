function Contact(){
    return(
    /*html here */
        <main>
            <div>
                <form id="form">   
                <h2 class="contact">Contact Me</h2>

                    <div>
						<label>Name</label>
						<input type="text" name="name" placeholder="Your Name" />
					</div>
					<div>
						<label>Email Address</label>
						<input type="email" name="email" placeholder="Your Email" />
					</div>
					<div class="message">
						<label>Message</label>
                        <br/>
						<textarea name="message" rows="5" placeholder="Type here" ></textarea>
					</div>
					<div class="submit">
                        <button type="submit" class="submit">Submit</button>
					</div>

                 </form>  
                
            </div>
        </main>

    )

}


export default Contact