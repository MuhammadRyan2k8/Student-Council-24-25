class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        <header id="header" >

            <div class="header-spacer"></div>

            
            <div class="header-left-section">
                <a href="index.html" ><img class="site-logo" src="pictures/logo.png" alt="Site Logo"></a>
                <a href="index.html" class="site-title">MRIS-B Student Council 2024</a>
            </div>
            

            <nav>

                <ul class="top-bar">
                    <li class="hide-on-mobile" > <a href="index.html" >Home</a> </li>
                    <li class="hide-on-mobile" > <a href="news.html" >News</a> </li>
                    <li class="hide-on-mobile" > <a href="events.html" >Events</a> </li>
                    <li class="hide-on-mobile" > <a href="our-team.html" >Our Team</a> </li>
                    <li class="hide-on-mobile" > <a href="clubs.html" >Clubs</a> </li>
                    <li class="hide-on-pc" onclick=showSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill= #c4beb2 ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a> </li>
                </ul>
                
                <ul class="sidebar">
                    <li onclick=hideSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill= #c4beb2 ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a> </li>
                    <li class="hide-on-pc" > <a href="index.html" >Home</a> </li>
                    <li class="hide-on-pc" > <a href="news.html" >News</a> </li>
                    <li class="hide-on-pc" > <a href="events.html" >Events</a> </li>
                    <li class="hide-on-pc" > <a href="our-team.html" >Our Team</a> </li>
                    <li class="hide-on-pc" > <a href="clubs.html" >Clubs</a> </li>
                </ul>

            </nav>

            <div class="header-spacer"></div>

        </header>
        `
    }
}

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        <section class="footer">
            <section class="footer-1">

                <img src="pictures/logo.png" class="footer-logo">

                <section class="footer-1-1">
                    <a href="index.html"> <div>Home</div> </a>
                    <a href="events.html"> <div>Events</div> </a>
                    <a href="our-team.html"> <div>News</div> </a>
                    <a href="our-team.html"> <div>Our Team</div> </a>
                    <a href="clubs.html"> <div>Clubs</div> </a>
                </section>

                <section class="footer-1-2">

                </section>

            </section>

            <section class="footer-2">MRISB STUDENT COUNCIL 2024-2025</section>
        </section>
        `
    }
}

customElements.define('my-footer', MyFooter)

customElements.define('my-header', MyHeader)