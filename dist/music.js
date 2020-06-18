const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Bad Apple",
        artist: 'のみこ,Masayoshi Minoshima',
        url: 'http://music.163.com/song/media/outer/url?id=22645196.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002aUTkw0y32K0_1.jpg?max_age=2592000',
      },
      {
	      name: "光年之外",
	      artist: 'G.E.M. 邓紫棋',
	      url: 'http://music.163.com/song/media/outer/url?id=449818741.mp3',
	      cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001mTkmb4GJlh4_1.jpg?max_age=2592000',
      },
	    {
		    name: "彼女は旅に出る",
		    artist: '鎖那',
		    url: 'http://m128.xiami.net/235/663929235/2102802899/1796754113_1514241097716.mp3?auth_key=1593054000-0-0-cbddfadedd161c32f95bb96e44e05e69',
		    cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000009lYKe4VidrF_1.jpg?max_age=2592000',
	    },
        {
            name :"Sakura (樱花)",
            artist :'R3HAB',
            url :'http://m128.xiami.net/121/1264881121/2100345738/1776173308_60320148_l.mp3?auth_key=1593054000-0-0-726879ea02d32761744e61ada57473bf',
            cover :'https://y.gtimg.cn/music/photo_new/T002R300x300M000000G0FdY0h4uOI_1.jpg?max_age=2592000',
        },
        {
            name :"打ち上げ花火",
            artist :'daoko,米津玄师',
            url :'http://music.163.com/song/media/outer/url?id=496869422.mp3',
            cover :'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2883345267,3235758773&fm=179&app=42&f=JPEG?w=150&h=150&s=DC13469EC042F2E57E12B44F030070E9',
        },
        {
            name :"Lemon",
            artist :'米津玄師',
            url :'http://music.163.com/song/media/outer/url?id=536622304.mp3',
            cover :'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2990841133,3729529866&fm=179&app=42&f=JPEG?w=150&h=150&s=F1F10B7075135A7414681D4E0300E0F1',
        },
        {
            name :"Move Up",
            artist :'Mr. Polska',
            url :'http://music.163.com/song/media/outer/url?id=406072775.mp3',
            cover :'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1586255637,2792173136&fm=179&app=42&f=JPEG?w=150&h=150&s=FF2A30634050F7DC5C8955070300E0E1',
        }
    ]
});
