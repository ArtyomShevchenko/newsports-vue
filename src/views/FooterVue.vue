<template>
    <footer>
        <div class="container">
            <section class="wrapper">
                <a class="logo-container" href="index.html">
                    <span class="logo-icon"></span>
                    <span class="logo-text">newsports</span>
                </a>

                <nav class="menu">
                    <ul>
                        <li><a href="#">team</a></li>
                        <li><a href="#">competition</a></li>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">faqs</a></li>
                        <li><a href="#">politicy privacy</a></li>
                        <li><a href="#">cookies</a></li>
                    </ul>
                </nav>

            </section>
            <div class="footer-bottom">
                <section class="wrapper">
                    <div class="copiright">copiright | yourname</div>
                    <ul class="social-container">
                        <a href="https://instagram.com" class="social-link">
                            <svg viewBox="0 0 24 24" width="96px" height="96px">
                                <path
                                    d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                            </svg>
                            <span>@yourname</span>
                        </a>

                        <a href="https://facebook.com" class="social-link">
                            <svg viewBox="0 0 24 24" width="96px" height="96px">
                                <path
                                    d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                            </svg>
                            <span>@yourname</span>
                        </a>

                        <a href="https://twitter.com" class="social-link">
                            <svg viewBox="0 0 30 30" width="90px" height="90px">
                                <path
                                    d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                            </svg>
                            <span>@yourname</span>
                        </a>
                    </ul>
                </section>
            </div>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
    background: linear-gradient(rgba(0, 0, 0, 0.6), var(--blue));
}

.wrapper {
    max-width: 1330px;
    padding: 60px 0;
    gap: 2rem;
}

.logo-container {
    font-size: 40px;
    height: 32px;
}

.menu {
    display: flex;
    gap: 60px;
    margin-top: 90px;
}

.menu ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer-bottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.footer-bottom {
    border-top: 16px solid var(--pink);
    display: flex;
    width: 100%;
}

.social-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px;
}

.social-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    gap: 10px;
    position: relative;
}

.social-link:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background-color: #ffffff;
    transition: all 0.2s;
}

.social-link svg {
    height: 22px;
    width: 22px;
    fill: var(--white);
}

.social-link span {
    font-size: 16px;
    color: var(--pink);
}

.social-link:hover:after {
    width: 100%;
}
</style>