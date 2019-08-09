import React from "react";

const OldIndex = () => (
    <>
        <div class="wrapper">
            <nav class="flex-nav nav-menutop">
                <ul>
                    <li>
                        <a id="menu">
                            {" "}
                            <i class="fas fa-bars"></i> <span>Menu</span>{" "}
                        </a>
                    </li>
                </ul>
            </nav>
            <nav class="flex-nav nav-menutoplink">
                <ul>
                    <li>
                        <a href="#home"> Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>

        <section class="home" id="home">
            <div class="wrapper">
                <h2>Introduction</h2>
                <p class="para first-para">
                    Hi everybody, my name is <mark>Phuc Nguyen</mark>. This is my first assignment in{" "}
                    <strong>Integrify</strong>.
                </p>
                <p class="para" id="second-para">
                    Make a portfolio implementation is only using <sup>HTML</sup> and
                    <u>CSS</u>, try to use as many types of HTMLs tages as possible.
                </p>
                <details>
                    <summary>Read more about Integrify Academy </summary>
                    <ol>
                        <li>Integrify teaches coding to talented immigrants and connects graduates with tech jobs.</li>
                        <li>
                            Integrify provides a 12-month state-of-the-art software developer program teaching motivated
                            and talented immigrants in modern software development and placing graduates in jobs.
                        </li>
                        <li>
                            The course focuses on JavaScript, React/Redux and Node & Express equipping students with a
                            skill-set to work as software developers. Teaching is lead by experienced software
                            developers
                        </li>
                        <li>The course is held 09-17 Monday to Friday leading in up to 1000 hours of pure coding.</li>
                    </ol>
                </details>
                <table>
                    <tr>
                        <th>Skills</th>
                        <th>Level before Integrify</th>
                        <th>Level after Integrify</th>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td class="seven">7</td>
                        <td class="nine">9</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>6</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>1</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Redux</td>
                        <td>0</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Nodejs</td>
                        <td>2</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>MongoDB</td>
                        <td>1</td>
                        <td>3</td>
                    </tr>
                </table>
            </div>
        </section>

        <section class="skills" id="skills">
            <div class="wrapper">
                <h2>Skills</h2>
                <div class="skill-flex">
                    <div class="plan plan1">
                        <h3>HTML, CSS</h3>
                        <p>I learn HTML,CSS for a long time.</p>
                        <ul class="feature">
                            <li>HTML advance</li>
                            <li>CSS advance</li>
                            <li>HTML5</li>
                            <li>CSS5</li>
                            <li>Web Analytic</li>
                        </ul>

                        <progress value="85" max="100"></progress>
                    </div>
                    <div class="plan plan2">
                        <h3>Javascript</h3>
                        <p>It is my language program, I use most</p>
                        <ul class="feature">
                            <li>Javascript baisc</li>
                            <li>jQuery</li>
                            <li>Nodejs</li>
                            <li>ES6</li>
                        </ul>
                        <progress value="70" max="100"></progress>
                    </div>
                    <div class="plan plan3">
                        <h3>React</h3>
                        <p>I've just learned it</p>
                        <ul class="feature">
                            <li>React baisc</li>
                            <li>Redux basic</li>
                            <li>&nbsp;</li>
                            <li>&nbsp;</li>
                        </ul>
                        <progress></progress>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects">
            <div class="wrapper">
                <h2>My projcets</h2>
                <div class="projects">
                    <div class="project">
                        <i class="fab fa-html5"></i>
                        <div class="project_detail">
                            <h2>Portfolio</h2>
                            <p class="project_detail">
                                See at Github:
                                <a href="https://github.com/phucfi/portfolio">Click here </a>
                            </p>
                        </div>
                    </div>
                    <div class="project">
                        <i class="fab fa-js"></i>
                        <div class="project_detail">
                            <h2>Project 2</h2>
                            <p class="project_detail">
                                Our story Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, culpa!
                            </p>
                        </div>
                    </div>
                    <div class="project">
                        <i class="fab fa-react"></i>
                        <div class="project_detail">
                            <h2>Project 3</h2>
                            <p class="project_detail">
                                Our story Lorem . Ipsa praesentium error, tempore harum natus necessitatibus dolorem
                                optio iste vel. Nisi?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact" id="contact">
            <div class="wrapper">
                <h2>Contact</h2>
                <form>
                    <label for="fname">First Name (required)</label>
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                        required
                        minlength="2"
                        maxlength="18"
                        size="20"
                    />
                    <label>Last Name (required)</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />
                    <label>Email (required)</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." required />
                    <label>Age</label> <input type="number" id="age" min="16" max="100" />
                    <label>Region</label>
                    <input type="text" pattern="[Ff]innish|[Ss]wedish|[Dd]anish" />
                    <label for="choose">Would you prefer JavaScript or Python?</label>
                    <input id="choose" name="i_like" pattern="JavaScript|Python" />
                    <fieldset class="yourskills">
                        <legend>What skills of these you have?</legend>
                        <input type="checkbox" id="html" />
                        <label for="html">HTML</label>
                        <input type="checkbox" id="css" />
                        <label for="css">CSS</label>
                        <input type="checkbox" id="javaScript" />
                        <label for="javaScript">JavaScript</label>
                        <input type="checkbox" id="node" />
                        <label for="node">Node</label>
                        <input type="checkbox" id="react" />
                        <label for="react">React</label>
                    </fieldset>
                    <fieldset>
                        <label>Do you know me</label>
                        <input type="radio" id="knowMeYes" name="knowMe" />
                        <label for="knowMeYes">Yes</label>
                        <input type="radio" id="knowMeNo" name="knowMe" />
                        <label for="knowMeNo">No</label>
                    </fieldset>
                    <fieldset>
                        <legend>Your Information</legend>
                        <label>Your favorite color</label>
                        <input type="color" id="color" name="color" />

                        <label>When you need the answer</label>
                        <input type="datetime-local" id="datatime" name="datatime" />

                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                    </fieldset>
                    <button>Send to me</button>
                </form>
            </div>
        </section>

        <footer>
            <div class="wrapper">
                <h2>Integrify Academy</h2>
                <nav class="flex-nav">
                    <ul>
                        <li>
                            <a href="#">
                                {" "}
                                <i class="fab fa-github"></i>
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-linkedin"></i>
                                <span>linkedin</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {" "}
                                <i class="fab fa-medium"></i>
                                <span>medium</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fab fa-twitter"></i> <span>twitter</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    </>
);

export default OldIndex;
