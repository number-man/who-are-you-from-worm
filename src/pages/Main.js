import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Main = () => {
    function Screen1({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 1/8</span></p>
                    <p className="description"><span className="bigheader">What power class speaks the most to you?</span></p>

                    <div className={"test"}>
                        <img className={"powers"}
                             src={"q1.png"}
                             alt={"pic"}
                        />
                    </div>
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">Brute      </label>
                        <br></br>
                        <input type="radio" id="master" name="type"/>
                        <label htmlFor="master">Master</label>
                        <br></br>
                        <input type="radio" id="tinker" name="type"/>
                        <label htmlFor="tinker">Tinker</label>
                        <br></br>
                        <input type="radio" id="thinker" name="type"/>
                        <label htmlFor="thinker">Thinker</label>
                        <br></br>
                        <input type="radio" id="stranger" name="type"/>
                        <label htmlFor="stranger">Stranger</label>
                        <br></br>
                        <input type="radio" id="other" name="type"/>
                        <label htmlFor="other">Other</label>
                    </div>

                </div>
            );
        }
        return null;
    }
    function Screen2({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 2/8</span></p>
                    <p className="description"><span className="bigheader">How would you prefer to gain powers?</span></p>

                    {/*<div className={"test"}>*/}
                    {/*    <img className={"powers"}*/}
                    {/*         src={"q1.png"}*/}
                    {/*         alt={"pic"}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">Trigger event      </label>
                        <br></br>
                        <input type="radio" id="master" name="type"/>
                        <label htmlFor="master">Cauldron's mixture</label>
                        <br></br>
                        <input type="radio" id="tinker" name="type"/>
                        <label htmlFor="tinker">I don't want to have powers</label>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Screen3({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 3/8</span></p>
                    <p className="description"><span className="bigheader">What career would you like to pursue if you had powers?</span></p>

                    {/*<div className={"test"}>*/}
                    {/*    <img className={"powers"}*/}
                    {/*         src={"q1.png"}*/}
                    {/*         alt={"pic"}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">Hero</label>
                        <br></br>
                        <input type="radio" id="master" name="type"/>
                        <label htmlFor="master">Villain</label>
                        <br></br>
                        <input type="radio" id="tinker" name="type"/>
                        <label htmlFor="tinker">Rogue/mercenary</label>
                        <br></br>
                        <input type="radio" id="thinker" name="type"/>
                        <label htmlFor="thinker">I'd like to become an Endbringer</label>
                        <br></br>
                        <input type="radio" id="thnker" name="type"/>
                        <label htmlFor="thnker">I'd like to breed Endbringers</label>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Screen4({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 4/8</span></p>
                    <p className="description"><span className="bigheader">In your opinion, who is the most effective as a team leader?</span></p>
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">Skitter</label>
                        <br></br>
                        <input type="radio" id="master" name="type"/>
                        <label htmlFor="master">Miss Militia</label>
                        <br></br>
                        <input type="radio" id="tinker" name="type"/>
                        <label htmlFor="tinker">Jack Slash</label>
                        <br></br>
                        <input type="radio" id="thinker" name="type"/>
                        <label htmlFor="thinker">Faultline</label>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Screen5({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 5/8</span></p>
                    <p className="description"><span className="bigheader">You got Crawlers powers. Who would you rather have a fight with?</span></p>
                    <div className={"test"}>
                        <img className={"illustration"}
                             src={"q5.webp"}
                             alt={"pic"}
                        />
                    </div>
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">Siberian</label>
                        <br></br>
                        <input type="radio" id="master" name="type"/>
                        <label htmlFor="master">Dragon</label>
                        <br></br>
                        <input type="radio" id="tinker" name="type"/>
                        <label htmlFor="tinker">Simurgh</label>
                        <br></br>
                        <input type="radio" id="thinker" name="type"/>
                        <label htmlFor="thinker">Eidolon</label>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Screen6({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 6/8</span></p>
                    <p className="description"><span className="bigheader">Whose morals are least fucked up?</span></p>
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">Regent</label>
                        <br></br>
                        <input type="radio" id="master" name="type"/>
                        <label htmlFor="master">Trickster</label>
                        <br></br>
                        <input type="radio" id="tinker" name="type"/>
                        <label htmlFor="tinker">Eidolon</label>
                        <br></br>
                        <input type="radio" id="thinker" name="type"/>
                        <label htmlFor="thinker">Doctor</label>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Screen7({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 7/8</span></p>
                    <p className="description"><span className="bigheader">Isn't Panacea the greatest character of them all?</span></p>
                    <div className={"test"}>
                        <img className={"illustration"}
                             src={"q7.jpg"}
                             alt={"pic"}
                        />
                    </div>
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">Of course</label>
                        <br></br>
                        <input type="radio" id="master" name="type"/>
                        <label htmlFor="master">Nah, u delusional</label>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Screen8({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Question 8/8</span></p>
                    <p className="description"><span className="bigheader">У кого сегодня день рождения?</span></p>
                    <br></br>
                    <div className={"input-group"}>
                        <input type="radio" id="brute" name="type"/>
                        <label htmlFor="brute">У меня))))</label>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Screen9({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Поздравляю!</span></p>
                    <p className="description"><span className="bigheader">Тест завершен. Настало время узнать, кто ты из вселенной Червя...</span></p>
                    <br></br><br></br>
                    <p className="description"><span className="bigheader"></span></p>
                </div>
            );
        }
        return null;
    }
    function Screen10({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Во вселенной Червя ты...</span></p>
                    <p className="description"><span className="bigheader">Кирилл Янтиков</span></p>
                    <div className={"test"}>
                        <img className={"final"}
                             src={"q10.png"}
                             alt={"pic"}
                        />
                    </div>
                    <div>
                        <p className="description">Классификация: Козырь 12+, Умник 8, Властелин 4.<br></br>
                        Сильные силы. Внушительный образ, но не совсем. Сомелье качественного контента.<br></br>
                        С днюхой.</p>
                    </div>
                </div>
            );
        }
        return null;
    }
    function Buttons({page}) {
        if (page == 10) {
            return (
                <div className={"test"}>
                    <button
                        onClick={
                            () => setScreenNumber(screenNumber-1)
                        }>
                        Back
                    </button>
                </div>
            );
        }
        if (page > 0) {
            return (
                <div className={"test"}>
                    <button
                        onClick={
                            () => setScreenNumber(screenNumber-1)
                        }>
                        Back
                    </button>
                    <button
                        onClick={
                            () => setScreenNumber(screenNumber+1)
                        }>
                        Continue
                    </button>
                </div>
            );
        }
        return (
            <div className={"test"}>
                <button
                    onClick={
                        () => setScreenNumber(screenNumber+1)
                    }>
                    Continue
                </button>
            </div>
        );
    }
    function Credentials({page}) {
        if (page < 10) {
            return (
                <div className={"cred"}>
                    <Link to="https://github.com/erikras">by ErikRas</Link>
                </div>
            );
        }
        return null;
    }
    function Intro({visible}) {
        if (visible) {
            return (
                <div>
                    <p className="description"><span className="bigheader">Test: Who are you from the Worm Universe?</span></p>

                    <div className={"test"}>
                        <img className={"illustration"}
                             src={"main.jpg"}
                             alt={"pic"}
                        />
                    </div>
                    <p className="description"><span className="spoiler">Contains spoilers for Parahumans series (Worm, Glow-Worm, Ward)</span></p>

                </div>
            );
        }
        return null;
    }
    const [screenNumber, setScreenNumber] = useState(0)

    return (
        <div>
            <br></br>
            {/*<p className="description"><span className="bigheader">Test: Who are you from the Worm universe?</span></p>*/}
            {/*<p className="description"><span className="spoiler">Contains spoilers for Parahumans series (Worm, Glow-Worm, Ward)</span></p>*/}

            {/*<div className={"test"}>*/}
            {/*    <img className={"illustration"}*/}
            {/*     src={"main.jpg"}*/}
            {/*     alt={"pic"}*/}
            {/*    />*/}
            {/*</div>*/}
            <Intro visible={screenNumber == 0} />
            <Screen1 visible={screenNumber == 1} />
            <Screen2 visible={screenNumber == 2} />
            <Screen3 visible={screenNumber == 3} />
            <Screen4 visible={screenNumber == 4} />
            <Screen5 visible={screenNumber == 5} />
            <Screen6 visible={screenNumber == 6} />
            <Screen7 visible={screenNumber == 7} />
            <Screen8 visible={screenNumber == 8} />
            <Screen9 visible={screenNumber == 9} />
            <Screen10 visible={screenNumber == 10} />
            <Buttons page={screenNumber} />
            <Credentials page={screenNumber} />

        </div>
    );
};

export default Main;
