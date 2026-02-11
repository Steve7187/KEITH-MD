/KEITH;;;H4sIAAAAAAAAA5VUa4+iSBT9L/VVM81DHpp0soiKiKL4AtzMhxIKKMFCoHhO+r9vcLpnOpvspJdPxa2bc88999z6AUiKC2SgFkx+gEeOK0hRf6TtA4EJmJZBgHIwBD6kEEzAZuHuJJMmAXGWocpn3XbGyNWLEijp8RI7VHYMzWkP2c6ev4K3IXiU1wR7fwAU8n0eHDaEhqI4Epo2rjaFduES8Z7ZEfGZFFn8KggiqvaAPSLEOSbh/BGhO8phYqB2B3H+NfrFOvKwvGqN2iB+KT1yznFljmtZ4p8Cd6WcNmPT6ZSo5JSv0Tf2+5tfZFzalAMGzvb8KEA6XkuefK7l1d2scXzrBnvHmL7TL3BIkK/7iFBM2y/rHk+nLzuXYWSHoPYs3nPN2uiD8aJZqpdmudUOtc+71tJnifs14uc55vwcNtzAHGSlvC5RkkXZntV3khvUnL1p29l5ba5uJ+Uz8V3+4ZX4/+hez3Fo35pLmFXCVFsds+zAOdEeByulvW5Pt4WYWlXl1Qarf43+ST1NZ9twFSqbYBlSQ5Pu5wG/DxzOmGtEaLZJ+7Jz1mJ6+EQf0jL/E8tZpVyJn5znRA+PsSvEbmRzKb+RFpRk9iVu2HuCUsyeskpSSBpoU3exIywWCW3JUXVPMdMdM95KBwVvM1raHENbsV6fHcWo1X0wYd+GIEchLmgOKU5JH+MYYQigXx2QlyP6lBe82LUc6VcRG6gzZovF4ITX48VF7LZhKS59e+EuLCdeCIorv4IheOSph4oC+Utc0DRvN6goYIgKMPn7+xAQ1NCfg+vL8ewQBDgv6ImUjySF/sdUPy6h56UloYeWeGp/QDmYML/DiFJMwqLXsSQw9yJcITWCtACTACYF+tUhypEPJjQv0a+tVVO/F547ys5hrO3AENyfA8F+HxVGLCPwMi9w/ERg/yq+1T0sfDy+EUTBECTPNFGUxyNJFiVJ4gShT+zjb78I9ng+ohAnBZgA1ZQ0rtAXc8NQC6/WNMUNFTVUwO+GPpzxrvy5yi98NHaQqfCGkEqLqmZEbsN759L2uHaTTPULU1XQeir/bxAwAXd4yEhWR12ZBmFedJc6vu4lztj4p+lqZsej8oU1400/MW0U7SWubZqrxmpHKRMgXaprqZXi4GGqXb5U+VNFj0k6rV/7aj6qsIc+F/MDo7nlsznlj8FUKJqD16VOQTrLSBjHGjT2XGq77moKVgmpOWXHnmrXa650jbl+9xNyNLvwbm+828HqGD1MqrYh6rtnnzuTvL9V+OmmflT9b4DRc/UJvKOvjO4n8d5hzNvwE8b7Y/IfCzkN2KvI+aPgzN8ssy3htrnK5pbeTH5xTYhZ3FbWQfPXEhfvwNvb9yF4JJAGaX4HEwCJn6fYB0OQp2VvWZ0E6R+KqYquT63Q7DtPYEGV32twxHdUUHh/gAkrSYw0Ho8Y/mfWLk8fS1hEYAL4/fjCj3tPt8rjcaCQfmwVUPrPnDng7R8O721vcQcAAA==*Must Run*/

let commands = [];

const tabCmds = [];

const evt = {
    events: {},
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach((callback) => callback(data));
        }
    },
};


const randomEmojis = [
    "😊", "😎", "🔥", "⭐", "💫", "✨", "🌟", "💥", "🚀", "🎯",
    "💯", "❤️", "💕", "💖", "💝", "🎉", "🎊", "🏆", "👑", "💎",
    "📌", "📍", "🛎️", "🔔", "🎵", "🎶", "📢", "🔊", "👀", "👁️",
    "🧠", "💡", "🔋", "🔌", "💻", "📱", "⌚", "📷", "🎥", "📹",
    "☀️", "🌙", "⭐", "🌟", "🌈", "☁️", "⚡", "🔥", "💧", "🌊",
    "🎮", "👾", "🕹️", "🎲", "♠️", "♥️", "♦️", "♣️", "🃏", "🀄",
    "🏀", "⚽", "🎾", "🏐", "🎱", "⚾", "🏈", "🎯", "🏹", "⛳",
    "🚗", "🚓", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚀", "✈️", "🛩️",
    "🍎", "🍌", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🥭", "🍉",
    "🍕", "🍔", "🍟", "🌭", "🍿", "🧁", "🎂", "🍰", "🍦", "🍩"
];


function getRandomEmoji() {
  
    return randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
}


function keith(obj, functions) {
    let infoComs = obj;

    if (!obj.category) infoComs.category = "General"; 

    
    if (!obj.react) infoComs.react = getRandomEmoji();

    if (!obj.dontAddCommandList) infoComs.dontAddCommandList = false; 
    
    infoComs.function = functions;

    const stack = new Error().stack;
   
    const filePath = stack.split('\n')[2].match(/\((.*):\d+:\d+\)/)[1];
   
    infoComs.filename = filePath;

    commands.push(infoComs);
    return infoComs;
}

module.exports = { keith, commands, evt, getRandomEmoji };

evt.commands = commands;
