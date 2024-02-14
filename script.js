function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '💜';
    document.body.appendChild(heart);
    setTimeout(() => {
    heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);

var contents = [
    {   
        type: "text", 
        content: "Hello, darling"
    },
    { 
        type: "text", 
        content: "Well, I'm broke, but I'm pretty talented software engineer, as you know"
    },
    { 
        type: "text", 
        content: "It was actually really hard for me to write and debug code in front of you laying on my couch"
    },
    { 
        type: "text", 
        content: "I couldn't tell you to leave the apartment so I could prepare a present for you"
    },
    { type: "text", content: "So, I was debugging code in my head and improvised the whole thing without even seen the website itself until you felt asleep"},
    { type: "text", content: "I wanted to prepare something for you, and decided that the best present is something that I put efforts on, so..."},
    { type: "text", content: "Here it is..."},
    { type: "text", content: "Well, I saw you different..."},
    { 
        type: "text_with_image", 
        content: "In Poland, you were like this..", 
        image: "assets/img/in-poland-you-were-like-this.jpg", 
    },
    {
        type: "text_with_image", 
        content: "..This", 
        image: "assets/img/--this.jpg", 
    },
    { 
        type: "text_with_image", 
        content: "And this...", 
        image: "assets/img/and-this---.jpg", 
    },
    { 
        type: "text_with_image", 
        content: "And liiiiiike this..", 
        image: "assets/img/and-liiiiiiike-this---.jpg", 
    },
    {
        type: "text_with_image", 
        content: "But in US you went from THIS ☝️", 
        image: "assets/img/in-us-you-went-from-this.jpg", 
    },
    { 
        type: "text_with_image", 
        content: "TO THIS 😊", 
        image: "assets/img/TO-THIS.jpg"
    },
    { type: "text", content: "I'm proud of you"},
    { type: "text_with_image", content: "My pretty...", image: "assets/img/my-pretty--.jpg"},
    { type: "text_with_image", content: "..awesome..", image: "assets/img/--awesome--.jpg"},
    { type: "text_with_image", content: "..extremely intelligent..", image: "assets/img/--extremely--inteligent--.jpg"},
    { type: "text_with_image", content: "..little girl..", image: "assets/img/--little-girl--.jpg"},
    { type: "text", content: "And always remember..."},
    { type: "text_with_image", content: "No matter how you look...", image: "assets/img/no-matter-how-you-look.jpg"},
    { type: "text_with_image", content: "...what you think and what you do", image: "assets/img/what-you-think-and-what-you-do.jpg"},
    { type: "text_with_image", content: "I'm always going to be there for you...", image: "assets/img/im-always-gonna-be-there-for-you.jpg"},
    { type: "text", content: "You're the first woman with whom I'm in relationship for so long"},
    { type: "text", content: "...and I'm happy to be with you"},
    { type: "text", content: "I'm happy that I can share any thoughts and not being judged"},
    { type: "text_with_image", content: "I'm happy that you give me support in everything I do", image: "assets/img/support-everything-i-do.jpg"},
    { type: "text_with_image", content: "I'm happy that no matter what we're still together nevertheless I'm annoying piece of shit", image: "assets/img/annoying-piece-of-shit.jpg"},
    { type: "text_with_image", content: "I'm happy that I traveled a lot certainly with you", image: "assets/img/traveled-a-lot-certainly-with-you.jpg"},
    { type: "text_with_image", content: "I'm happy that I visited a lot of places", image: "assets/img/visited-a-lot-of-places.jpg"},
    { type: "text_with_image", content: "My dream places...", image: "assets/img/my-dream-places.jpg"},
    { type: "text", content: "And there was you..."},
    { type: "text", content: "So, I want to ask you this..."},
    { type: "text", content: "Will you be my valentine?"}
]

var currentIndex = 0;

function toggleAnimation() {
    var textContainer = document.getElementById("animatedText");
    var imageContainer = document.getElementById("animatedImage");

    if (currentIndex >= contents.length) {
        return;
    }

    var currentContent = contents[currentIndex];

    if (currentContent.type === 'text') {
        textContainer.textContent = currentContent.content;
        textContainer.style.opacity = "1";
        imageContainer.style.opacity = "0";
        if (currentContent.content === "Will you be my valentine?") {
            setTimeout(willYouBeMyValentineAnimation, 3000); // Display the valentine section after 3 seconds
        }
    } else if (currentContent.type === 'text_with_image') {
        textContainer.textContent = currentContent.content;
        textContainer.style.opacity = "1";
        imageContainer.style.opacity = "1";
        imageContainer.src = currentContent.image;
    }

    var duration = 3000;

    setTimeout(function() {
        textContainer.style.opacity = "0";
        imageContainer.style.opacity = "0";

        currentIndex++;

        setTimeout(toggleAnimation, duration);
    }, duration);
}

toggleAnimation();

function willYouBeMyValentineAnimation() {
    var valentineContainer = document.getElementById("animatedValentine");
    valentineContainer.style.opacity = "1";
}
