const allContent = document.querySelector(".all-content");
const flexContainer = document.querySelector(".flex-container");

// FUNCTION FOR CREATING ELEMENT AND ASSIGNING CLASS NAME, AUDIO CLIP AND INNER TEXT:

const assignAudioClip = function (className, text) {
  const btn = document.createElement("button");
  btn.classList.add("audio-btn");
  btn.classList.add(`${className}`);

  const p = document.createElement("p");
  const pText = document.createTextNode(`${text}`);

  p.appendChild(pText);
  btn.appendChild(p);

  const clip = new Audio(`${className}.mp3`);

  // INSERT INTO ALLCONTAINER:

  allContent.insertAdjacentElement("beforeend", btn);

  // LISTEN FOR CLICK TO PLAY AUDIO:
  btn.addEventListener("click", function () {
    clip.play();
  });
};

const renderAllClips = function () {
  assignAudioClip("nuts", `That's a lot of NUTS!`);
  assignAudioClip("nutsleft", `He just left... with NUTS!`);
  assignAudioClip("fries", `You want FRIES with that?!`);
  assignAudioClip("happyfeelings", `I'm a nice man with happy feelings...`);
  assignAudioClip("nexthit", `A-boom-boom chickie-chickie boom-boom`);
  assignAudioClip(
    "owl",
    `What do you get when you cross an owl with a bungee cord?`
  );
  assignAudioClip("kill1", `I'll kill him dead...`);
  assignAudioClip("chickengocluck", `Oh-chicken go cluck-cluck, cow go moo...`);
  assignAudioClip("animallikeyou", `Got to be an animal just like you`);
  assignAudioClip("lemurgo", `Lemurs go fft fft, ostrich go bleh`);
  assignAudioClip("hitit", `Hit it!`);
  assignAudioClip("birdy", `I'm just a birdy toooo...`);
  assignAudioClip("fighter", `You must be quite the fighter...`);
  assignAudioClip("badong", `Killing is badong...`);
  assignAudioClip("badong2", `The opposite of killing...`);
  assignAudioClip("our", `Our.. sexual.. privileges..`);
  assignAudioClip("tacobell", `Ohhhh Taco Bell, Taco Bell...`);
  assignAudioClip("bouncy", `I'll shake your bouncy booty!`);
  assignAudioClip("beware", `Beware his song about big butts...`);
  assignAudioClip(`dontlike`, `I don't like him very much...`);
  assignAudioClip(
    "wrongtraining",
    `We have purposely trained him wrong, as a joke.`
  );
  assignAudioClip("family", `You killed my family...`);
  assignAudioClip("facetofoot", `Face to foot style, how'd you like it?`);
  assignAudioClip("planet", `I'm sure on some planet...`);
  assignAudioClip("mynuts", `Oh yeah? Try my nuts to your fist style!`);
  assignAudioClip(
    "waterfall",
    `He spends his time at the top of a waterfall...`
  );
  assignAudioClip("mynuts", `I am a great magician. Your clothes are red!`);
  assignAudioClip(
    "honor",
    `Master Pain, it is a great honor having you beating random people in our town.`
  );
  assignAudioClip("falling", `I'm falling! You're falling!`);
  assignAudioClip("whale", `Whale!!!`);
  assignAudioClip("glove", `I wonder where my glove will go...`);
  assignAudioClip("redclothes", `I am a great magician. Your clothes are red!`);
  assignAudioClip("doagain", `Please, do it again!`);
  assignAudioClip("blackclothes", `Your clothes are black!`);
  assignAudioClip("days", `Your days are over, mister`);
  assignAudioClip("desert", `Partied with the desert creatures`);
  assignAudioClip("strain", `The master strains to get up`);
  assignAudioClip("optiona", `Two options: Option A`);
  assignAudioClip("optionb", `Two options: Option B`);
  assignAudioClip("a", `Hmm... Should have gone with A`);
  assignAudioClip("anotherparalyzer", `Another paralyzer!`);
  assignAudioClip(
    "lesson",
    `At that moment, the Chosen One learned a valuable lesson about iron claws...`
  );
  assignAudioClip("upover", `Big deal. Up and over!`);
  assignAudioClip("wary", `Be wary of Betty's iron claws`);
  assignAudioClip(
    "spoil",
    `Don't spoil everything. This works for both of us...`
  );
  assignAudioClip(
    "spoil2",
    `The director said cut... You should stop that now...`
  );
  assignAudioClip("water", `Do you need a glass of water or something?`);
  assignAudioClip("paralyzer", `Enjoy the paralyzer!`);
  assignAudioClip("snacks", `Go get some snacks...`);
  assignAudioClip("feisty", `I like 'em feisty.`);
  assignAudioClip("dance", `I acould dance like that if I felt like it.`);
  assignAudioClip("challenge", `I challenge you!`);
  assignAudioClip("nsync", `My favorite member of NSync...`);
  assignAudioClip("implore", `Master, I implore you to reconsider!`);
  assignAudioClip("momento", `Hmm.. Momento...`);
  assignAudioClip("oughta", `Why I oughta!`);
  assignAudioClip("circle", `Circle of stuff...`);
  assignAudioClip("oneboob", `Should have listened to that one-boobed chick`);
  assignAudioClip("net", `It's a net, and it's tiny.`);
  assignAudioClip("bladder", `My bladder is full to bursting...`);
  assignAudioClip("yellow", `I've got some yellow liquid for your popcorn...`);
  assignAudioClip("monkey", `Monkey in a piñata`);
  assignAudioClip("child", `A child could beat him!`);
  assignAudioClip(
    "crap",
    `Didn't recognize you without the crap in your pants`
  );
  assignAudioClip("where", `Where does it hurt?`);
  assignAudioClip("drum", `Play me like a drum`);
  assignAudioClip("shoes", `Again with the squeaky shoes...`);
  assignAudioClip("dog", `And then... he killed the dog.`);
  assignAudioClip("fart", `Fart (kills the dog)`);
  assignAudioClip("kick", `If you've got an ass, I'll kick it!`);
  assignAudioClip("kicking", `I've got some ass-kicking for you!`);
  assignAudioClip("sleepy", `Sleepy time...`);
  assignAudioClip("nipple", `The large dark nipple people?`);
  assignAudioClip("mayor", `Master Pain is meeting with the mayor...`);
  assignAudioClip("snort", `Ah jeeze, now the snorting starts`);
  assignAudioClip("name", `Did I say "game"?`);
  assignAudioClip("name2", `You shall all refer to me by the name Betty.`);
  assignAudioClip("woman", `Isn't Betty a woman's name?`);
  assignAudioClip("neo", `Neosporin`);
  assignAudioClip("shirt", `Shirt ripper!`);
  assignAudioClip("toe", `Do what he says, or he'll cut off your big toe.`);
  assignAudioClip("toe2", `We don't want to lose any more toes here.`);
  assignAudioClip("tonguey", `Does it have a name? (Tonguey)`);
  assignAudioClip("smalldog", `He'll kill you like a small dog.`);
  assignAudioClip("sally", `Goodbye... Sally`);
  assignAudioClip("pits", `stinky pits and all, baby!`);
  assignAudioClip("signal", `Did anyone hear the signal?`);
  assignAudioClip(
    "signal3",
    `He did sasy he was gonna throw us off his body...`
  );
  assignAudioClip("signal2", `Don't tell Mom...`);
  assignAudioClip("child", `A child could beat him!`);
  assignAudioClip("remember", `Hey, I remember you!`);
  assignAudioClip("deadwimp", `Hey, if you're alive, then surely Wimp Lo...`);
  assignAudioClip("birdy2", `Bird... birdy...`);
  assignAudioClip("tiger", `Tiger... Tiger, tiger...`);
  assignAudioClip("finger", `My finger points`);
  assignAudioClip("miles", `How many miles would you say? 10 million?`);
  assignAudioClip("victor", `I am bleeding... Making me the victor.`);
  assignAudioClip("balls", `Small, sensitive balls...`);
  assignAudioClip("freak", `Leap like a freak...`);
  assignAudioClip("home", `You go that way, I'll go home.`);
  assignAudioClip("fury", `You will now receive... the Fist of Fury!`);
  assignAudioClip("smokin", `I'll have some of whatever HE'S  smokin'!`);
  assignAudioClip("vent1", `We are both ventriloquists (1)`);
  assignAudioClip("vent2", `Ventriloquists (2)`);
  assignAudioClip("vent3", `Ventriloquists (3)`);
  assignAudioClip("vent4", `Your mouth tricks won't work on me...`);
  assignAudioClip("bad", `I have been called bad before...`);
};

renderAllClips();
