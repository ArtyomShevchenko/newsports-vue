<template>
    <div class="container">
        <div class="wrapper">
            <div class="content">
                <h2>copiright | yourname</h2>
                <a class="test-link" href="#">Gradient</a>
                <ul>
                    <a href="https://instagram.com">
                        <svg viewBox="0 0 24 24" width="96px" height="96px">
                            <path
                                d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                        </svg>
                        <span>@yourname</span>
                    </a>

                    <a href="https://facebook.com">
                        <svg viewBox="0 0 24 24" width="96px" height="96px">
                            <path
                                d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                        </svg>
                        <span>@yourname</span>
                    </a>

                    <a href="https://twitter.com">
                        <svg viewBox="0 0 30 30" width="90px" height="90px">
                            <path
                                d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                        </svg>
                        <span>@yourname</span>
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
    border-top: 1.6rem solid var(--main-2);
}

.wrapper {
    max-width: 133rem;
    padding: 5.5rem 0;
}

.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    font-size: 2rem;
}

ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
}

a {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .2rem;
    gap: 1rem;
    position: relative;
}

a svg {
    height: 2.2rem;
    width: 2.2rem;
    fill: var(--text-1);
}

a span {
    font-size: 1.6rem;
    color: var(--main-2);
}




/* -test */
.test-link {
    padding: 2rem 4rem;
    background-color: inherit;

    /* gradient: 50%=red, 45=black and  5%=yellow */
    background:
        linear-gradient(to bottom,
            red 50%,
            black 50% 95%,
            yellow 95%);
    /* size: x=100% y=200% */
    background-size: 100% 200%;
    /* position=top */
    background-position: top;

    transition: all .25s ease;
}

.test-link:hover {
    /* position=bottom */
    background-position: bottom;
}
</style>