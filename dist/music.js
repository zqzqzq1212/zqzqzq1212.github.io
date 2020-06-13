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
      }
    ]
});
