const music = new Audio('audio/1.mp3');
//music.play();


const song = [{
    id: '1',
    songName: ' Jai Shree Ram <br> <div class="subtitle">Tapori mix </div>',
    poster: "img/maxresdefalt.jpg"


},
{
    id: '2',
    songName: ' Kejo Kesari Lal <br> <divclass = "subtitle">Dj Karan kahat</div>',
    poster: "img/maxresdefalt (1).jpg"
},
{
    id: '3',
    songName: ' मंगल भवन अमंगल हारी <br> <divclass = "subtitle">Ramyana Chupia</div>',
    poster: "img/maxresdefalt (2).jpg"
},
{
    id: '4',
    songName: ' Ram Siya Ram <br> <divclass = "subtitle">Sachet,Parampara</div>',
    poster: "img/maxresdefalt (3).jpg"
},
{
    id: '5',
    songName: ' Ram Ayenge <br> <divclass = "subtitle">Swati Mishra</div>',
    poster: "img/maxresdefalt (4).jpg"
},
{
    id: '6',
    songName: ' Bharat Baccha Bolega Jai Shree Ram <br> <divclass = "subtitle">Dj mix</div>',
    poster: "img/maxresdefalt (5).jpg"
},
{
    id: '7',
    songName: ' Jai Jai Ram <br> <divclass = "subtitle">Anup Jalota</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '8',
    songName: ' Raghupati Raghav Raja Ram <br> <divclass = "subtitle">Sachet Tandon</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '9',
    songName: ' Ramayan Ki Chaupaiyan Ram Siya Ram <br> <divclass = "subtitle">Sachin Pilgoankar</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '9',
    songName: ' Ram Aye Hai Ayodha <br> <divclass = "subtitle">Vishal Mishra,Kaushal Kishore</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '10',
    songName: ' Shri Raja Ram <br> <divclass = "subtitle">Amit Tridevi,Yashita Sharma</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '11',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '12',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '14',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '15',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '16',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '17',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '18',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '19',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '20',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '21',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},
{
    id: '22',
    songName: ' Siya Ram <br> <divclass = "subtitle">Jubin Nautiyal</div>',
    poster: "img/maxresdefalt.jpg"
},

]



Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})












let pop_songs_left = document.getElementById('pop_songs_left');
let pop_songs_right = document.getElementById('pop_songs_right');
let pop_songs = document.getElementsByClassName('pop_songs')[0];


pop_songs_right.addEventListener('click' , ()=>{
    pop_songs.scrollLeft += 330;
});
pop_songs_left.addEventListener('click' , ()=>{
    pop_songs.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_rght = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];


pop_art_right.addEventListener('click' , ()=>{
    Artist_bx.scrollLeft += 330;
});
pop_art_left.addEventListener('click' , ()=>{
    Artist_bx.scrollLeft -= 330;
});

