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
	      url: 'http://183.252.54.15/amobile.music.tc.qq.com/C4000029Lt3K2XVP75.m4a?guid=115344189&vkey=D8C8970623668146704DD6DE7F9E985C14A38A2AFB5D7AB88EF33B971B7E3FFEF04353ABD46B795FA81AEA6FE6F5D6AA1D85F7045124DFF5&uin=0&fromtag=66',
	      cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001mTkmb4GJlh4_1.jpg?max_age=2592000',
      }
    ]
});
