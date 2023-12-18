interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details {
    author: string;
    year: number;
};

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
};

const song = "New Song";

// const {song:anothersong, songDuration:duration, details: {author}} = audioPlayer;
const { song: anothersong, songDuration: duration, details: details } = audioPlayer;
const { author } = details;


// console.log("New Song: ", song);
// console.log("Song: ", anothersong);
// console.log("Duration: ", duration);
// console.log("Author: ", author);

const myArray: string[] = ["Chris", "Vale", "Mar", "Tutú"];
const [, , , tutu]: string[] = myArray;
const [chris, vale, mar, utut]: string[] = myArray;
const [, , , , isis = "Isis"]: string[] = myArray;


console.log("Tutú: ", tutu);
console.log("Tutú: ", utut);
console.log("Tutú: ", isis);

export { };