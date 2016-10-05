$(document).ready(function(){
	var	my_jPlayer = $("#jquery_jplayer"),
		my_trackName = $("#jp_container .track-name"),
		my_playState = $("#jp_container .play-state"),
		my_extraPlayInfo = $("#jp_container .extra-play-info");

	var	opt_play_first = false, 
		opt_auto_play = true,
		opt_text_playing = "Now playing",
		opt_text_selected = "Track selected";

	var first_track = true;

	// Change the time format
	$.jPlayer.timeFormat.padMin = false;
	$.jPlayer.timeFormat.padSec = false;
	$.jPlayer.timeFormat.sepMin = ":";
	$.jPlayer.timeFormat.sepSec = " ";

	// Initialize the play state text
	my_playState.text(opt_text_selected);

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Эдуард Артемьев – Поход",
			mp3:"https://psv4.vk.me/c4778/u5618740/audios/ac92b87db80e.mp3"
		},
        {
			title:"Эдуард Артемьев – Водитель для Веры",
			mp3:"https://psv4.vk.me/c5071/u55870745/audios/d42e86bff8e2.mp3"
		},
        {
			title:"Эдуард Артемьев – Сон",
			mp3:"https://psv4.vk.me/c4617/u108732856/audios/5f10257d0c3e.mp3"
		},
        {
			title:"Эдуард Артемьев – Водитель для Веры",
			mp3:"https://psv4.vk.me/c5071/u55870745/audios/d42e86bff8e2.mp3"
		},
        {
			title:"Эдуард Артемьев – Ветер надежды",
			mp3:"https://psv4.vk.me/c5013/u18021878/audios/c7bb97400ef0.mp3"
		},
        {
			title:"Эдуард Артемьев – Они шли долго",
			mp3:"https://psv4.vk.me/c613731/u246173080/audios/f1ec51b84548.mp3"
		},
        {
			title:"Эдуард Артемьев – Курьер ",
			mp3:"https://psv4.vk.me/c6192/u155213172/audios/6ba995aa11e6.mp3"
		},
        {
			title:"Kai Engel – Summer Days",
			mp3:"https://cs3-1v4.vk-cdn.net/p17/d799bf12d0389f.mp3"
		},
        {
			title:"Kai Engel – Endless Story About Sun and Moon",
			mp3:"https://psv4.vk.me/c613720/u322634362/audios/aaa714363cef.mp3"
		},
        {
			title:"Kai Engel – Highway to the Stars",
			mp3:"https://psv4.vk.me/c611916/u6237243/audios/1438e49ad00c.mp3"
		},
        {
			title:"Kai Engel – Silence",
			mp3:"https://psv4.vk.me/c611916/u6237243/audios/3dceafb51a4d.mp3"
		},
        {
			title:"Kai Engel – Cutrains Are Always Drawn",
			mp3:"https://cs3-2v4.vk-cdn.net/p16/2b6bb7f4ac6eed.mp3"
		},
        {
			title:"Kai Engel – Mist And Clouds",
			mp3: "https://psv4.vk.me/c422524/u8103765/audios/429897e03955.mp3"
		},
        {
			title:"Kai Engel – Sunset",
			mp3:"https://psv4.vk.me/c613720/u322634362/audios/11c5902867ce.mp3"
		},
        {
			title:"Kai Engel – Brooks",
			mp3:"https://cs3-2v4.vk-cdn.net/p13/8ae2deecc560e1.mp3"
		},
        {
			title:"Kai Engel – Idea",
			mp3:"https://psv4.vk.me/c613720/u322634362/audios/5d67e7465928.mp3"
		},
        {
			title:"PILOTPRIEST – Matter",
			mp3:"https://psv4.vk.me/c613219/u217398777/audios/926bfcb786a9.mp3"
		},
        {
			title:"PILOTPRIEST – Now Be The Light",
			mp3:"https://psv4.vk.me/c613325/u13709940/audios/c093fd1b25cb.mp3"
		},
        {
			title:"PILOTPRIEST – Entrance",
			mp3:"https://psv4.vk.me/c536623/u232868691/audios/72bc9872dd07.mp3"
		},
        {
			title:"PILOTPRIEST – Softcore",
			mp3:"https://psv4.vk.me/c536623/u232868691/audios/7a489c058ae5.mp3"
		},
        {
			title:"Low Orbit Drift – Moon",
			mp3:"https://psv4.vk.me/c6152/u52051426/audios/3aff7f0661af.mp3"
		},
        {
			title:"Low Orbit Drift – Cluster",
			mp3:"https://psv4.vk.me/c536206/u33930748/audios/ce8881abb0ae.mp3"
		},
        {
			title:"Low Orbit Drift – Shuttle",
			mp3:"https://psv4.vk.me/c521111/u20391518/audios/1c9da1ebd723.mp3"
		},
        {
			title:"Low Orbit Drift – Time Shift",
			mp3:"https://psv4.vk.me/c611919/u48331226/audios/1cda47b65183.mp3"
		},
        {
			title:"Low Orbit Drift – Halo Green",
			mp3:"https://psv4.vk.me/c611919/u48331226/audios/0ceee43236cf.mp3"
		},
        {
			title:"Low Orbit Drift – Undefined Black Hole",
			mp3:"https://psv4.vk.me/c4795/u29104694/audios/3866277dca35.mp3"
		},
        {
			title:"Adrian von Ziegler – Fairy Forest",
			mp3:"https://psv4.vk.me/c536120/u30614770/audios/5c7795eddff0.mp3"
		},
        {
			title:"Adrian von Ziegler – Druidic Dreams",
			mp3:"https://psv4.vk.me/c536303/u20558250/audios/07a3e7451df3.mp3"
		},
        {
			title:"Adrian von Ziegler – A Celtic Tale",
			mp3:"https://psv4.vk.me/c521221/u12886143/audios/3a88ac400296.mp3"
		},
        {
			title:"Mac Quayle – DDoS Hacking Song",
			mp3:"https://psv4.vk.me/c422625/u79652855/audios/ff17eca9f524.mp3"
		},
        {
			title:"Mac Quayle – Hacking Steal Mountain",
			mp3:"https://psv4.vk.me/c422723/u206935544/audios/81b8908fb670.mp3"
		},
        {
			title:"Max Quayle – Mr. Robot",
			mp3:"https://cs3-1v4.vk-cdn.net/p18/556f928ef81654.mp3"
		},
        {
			title:"Stellaris OST – In Search of Life",
			mp3:"https://psv4.vk.me/c611421/u256926301/audios/bf693891d370.mp3"
		},
        {
			title:"Stellaris OST – Faster Than Light (Feat. Mia Stegmar)",
			mp3:"https://psv4.vk.me/c611920/u256926301/audios/53936c1e4028.mp3"
		},
        {
			title:"Stellaris OST – The Celestial City",
			mp3:"https://psv4.vk.me/c611718/u352254402/audios/7beb63d750ca.mp3"
		},
        {
			title:"Mr. Carmack – I Always Loved This One",
			mp3:"https://psv4.vk.me/c536517/u65660106/audios/b9ad659b0bb1.mp3"
		},
        {
			title:"Mr. Carmack – Church",
			mp3:"https://psv4.vk.me/c6189/u7693542/audios/cb38d7daa858.mp3"
		},
        {
			title:"Cliff Martinez – Son Of Placenta Previa",
			mp3:"https://cs3-1v4.vk-cdn.net/p24/ce789bd7bccf4c.mp3"
		},
        {
			title:"Cliff Martinez – I’m in the Pink",
			mp3:"https://psv4.vk.me/c613916/u140130549/audios/0bfb7dc9a00c.mp3"
		},
        {
			title:"Cliff Martinez – Will It Hurt",
			mp3:"https://psv4.vk.me/c536510/u139587128/audios/791d429e6518.mp3"
		},
        {
			title:"Cliff Martinez – Necrotic Bowel Resection",
			mp3:"https://psv4.vk.me/c613818/u41688806/audios/c54f60fe71f6.mp3"
		},
        
        
		
	], {
		swfPath: "js/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
    
    
	// Create click handlers for the different tracks
	$("#jp_container .track").click(function(e) {
		my_trackName.text($(this).text());
		my_jPlayer.jPlayer("setMedia", {
			mp3: $(this).attr("href")
		});
		if((opt_play_first && first_track) || (opt_auto_play && !first_track)) {
			my_jPlayer.jPlayer("play");
		}
		first_track = false;
		$(this).blur();
		return false;
	});

});