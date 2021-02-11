.root {
    background: #202736;
    background: linear-gradient(to bottom, #181d23 0%, #202736 80%);
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    min-height: 100vh;
    margin: 0 auto;
    z-index: 1;
}

.root:before {
    content: '';
    position: fixed;
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true);
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
    opacity: 0;
    animation: stars-move-in 1000ms 300ms forwards;
}

@keyframes stars-move-in {
    from {
        background-position-y: -100px;
    }
    to {
        opacity: 1;
        background-position-y: 0;
    }
}

.forest {
    position: absolute;
    bottom: -300px;
    left: 0;
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Trees.svg?sanitize=true) bottom left repeat-x;
    background-size: cover;
    width: 100%;
    height: 80%;
    opacity: 0;
    animation: forest-move-in 1000ms 500ms forwards;
    border-bottom: 300px solid #181d23;
}

@keyframes forest-move-in {
    from {
        background-position-y: 150%;
    }
    to {
        opacity: 1;
        background-position-y: 100%;
    }
}

.silhouette {
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Silhouette.svg?sanitize=true) bottom left no-repeat;
    width: 50%;
    height: 50%;
    opacity: 0;
    animation: silhouette-move-in 1000ms 800ms forwards;
}

@keyframes silhouette-move-in {
    from {
        background-position-x: 0;
    }
    to {
        opacity: 1;
        background-position-x: 50%;
    }
}

.moon {
    position: absolute;
    top: 0;
    right: 0;
    position: fixed;
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Moon.svg?sanitize=true) right 150% no-repeat;
    background-size: 30% 30%;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    animation: moon-move-in 1.2s 1s forwards;
}

@keyframes moon-move-in {
    from {
        opacity: 0;
        background-position: right 150%;
    }
    to {
        opacity: 1;
        background-position: top right;
    }
}

.container {
    width: fit-content;
    position: absolute;
    right: 0;
    top: 50%;
    left: 55%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: text-fade-in 1000ms 800ms forwards;
}

@keyframes text-fade-in {
    from {
        right: 0;
    }
    to {
        opacity: 1;
        right: 25%;
    }
}

.container h1 {
    font-size: 65px;
    font-weight: normal;
    font-style: italic;
    color: #fafafa;
    line-height: 65px;
}

.container p {
    font-size: 28px;
    font-weight: normal;
    color: #fafafa;
    line-height: 32px;
    margin-bottom: 24px;
}

@media only screen and (max-width: 649px) {
    .container {
        right: 50%;
        top: 10%;
        width: 80%;
        transform: translate(50%, 0);
        animation: text-fade-in 1000ms 800ms forwards;
    }

    @keyframes text-fade-in {
        from {
            right: 0;
        }
        to {
            opacity: 1;
            right: 50%;
        }
    }

    .silhouette {
        width: 100%;
    }
}