$(document).ready(function () {
    var my_jPlayer = $("#jquery_jplayer"),
        my_trackName = $("#jp_container .track-name"),
        my_playState = $("#jp_container .play-state"),
        my_extraPlayInfo = $("#jp_container .extra-play-info");

    var opt_play_first = false,
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
            title: "Artemev – Pohod",
            mp3: "https://psv4.vk.me/c4778/u5618740/audios/ac92b87db80e.mp3"
		},
        {
            title: "Artemev – Voditel Dlya Veryi",
            mp3: "https://psv4.vk.me/c5071/u55870745/audios/d42e86bff8e2.mp3"
		},
        {
            title: "Artemev – Son",
            mp3: "https://psv4.vk.me/c4617/u108732856/audios/5f10257d0c3e.mp3"
		},
        {
            title: "Artemev – Veter Nadesjdyi",
            mp3: "https://psv4.vk.me/c5013/u18021878/audios/c7bb97400ef0.mp3"
		},
        {
            title: "Artemev – Oni Shli Dolgo",
            mp3: "https://psv4.vk.me/c613731/u246173080/audios/f1ec51b84548.mp3"
		},
        {
            title: "Artemev - grust",
            mp3: "https://psv4.vk.me/c4489/u53682749/audios/35cbc817e3a5.mp3"
		},
        {
            title: "Artemev – Kur'er",
            mp3: "https://psv4.vk.me/c6192/u155213172/audios/6ba995aa11e6.mp3"
		},
        {
            title: "Kai Engel – Summer Days",
            mp3: "https://cs3-1v4.vk-cdn.net/p17/d799bf12d0389f.mp3"
		},
        {
            title: "Kai Engel – Story About Sun and Moon",
            mp3: "https://psv4.vk.me/c613720/u322634362/audios/aaa714363cef.mp3"
		},
        {
            title: "Kai Engel – Highway to the Stars",
            mp3: "https://psv4.vk.me/c611916/u6237243/audios/1438e49ad00c.mp3"
		},
        {
            title: "Kai Engel – Silence",
            mp3: "https://psv4.vk.me/c611916/u6237243/audios/3dceafb51a4d.mp3"
		},
        {
            title: "Kai Engel – Cutrains Are Always Drawn",
            mp3: "https://cs3-2v4.vk-cdn.net/p16/2b6bb7f4ac6eed.mp3"
		},
        {
            title: "Kai Engel – Mist And Clouds",
            mp3: "https://psv4.vk.me/c422524/u8103765/audios/429897e03955.mp3"
		},
        {
            title: "Kai Engel – Sunset",
            mp3: "https://psv4.vk.me/c613720/u322634362/audios/11c5902867ce.mp3"
		},
        {
            title: "Kai Engel – Brooks",
            mp3: "https://cs3-2v4.vk-cdn.net/p13/8ae2deecc560e1.mp3"
		},
        {
            title: "Kai Engel – Idea",
            mp3: "https://psv4.vk.me/c613720/u322634362/audios/5d67e7465928.mp3"
		},
        {
            title: "Kai Engel – Low Horizon",
            mp3: "https://psv4.vk.me/c611916/u6237243/audios/b9159c31cbb6.mp3"
		},
        {
            title: "Kai Engel – Mist and Clouds",
            mp3: "https://cs3-1v4.vk-cdn.net/p18/386b64f531e319.mp3"
		},
        {
            title: "Kai Engel – Wake Up!",
            mp3: "https://psv4.vk.me/c611916/u6237243/audios/c37c523bc1b9.mp3"
		},
        {
            title: "Kai Engel – Dancing on the Edge",
            mp3: "https://psv4.vk.me/c611916/u6237243/audios/c0d203d71248.mp3"
		},
        {
            title: "PILOTPRIEST – Matter",
            mp3: "https://psv4.vk.me/c613219/u217398777/audios/926bfcb786a9.mp3"
		},
        {
            title: "PILOTPRIEST – Now Be The Light",
            mp3: "https://psv4.vk.me/c613325/u13709940/audios/c093fd1b25cb.mp3"
		},
        {
            title: "PILOTPRIEST – Entrance",
            mp3: "https://psv4.vk.me/c536623/u232868691/audios/72bc9872dd07.mp3"
		},
        {
            title: "PILOTPRIEST – Softcore",
            mp3: "https://psv4.vk.me/c536623/u232868691/audios/7a489c058ae5.mp3"
		},
        {
            title: "Low Orbit Drift – Moon",
            mp3: "https://psv4.vk.me/c6152/u52051426/audios/3aff7f0661af.mp3"
		},
        {
            title: "Low Orbit Drift – Cluster",
            mp3: "https://psv4.vk.me/c536206/u33930748/audios/ce8881abb0ae.mp3"
		},
        {
            title: "Low Orbit Drift – Shuttle",
            mp3: "https://psv4.vk.me/c521111/u20391518/audios/1c9da1ebd723.mp3"
		},
        {
            title: "Low Orbit Drift – Time Shift",
            mp3: "https://psv4.vk.me/c611919/u48331226/audios/1cda47b65183.mp3"
		},
        {
            title: "Low Orbit Drift – Halo Green",
            mp3: "https://psv4.vk.me/c611919/u48331226/audios/0ceee43236cf.mp3"
		},
        {
            title: "Low Orbit Drift – Undefined Black Hole",
            mp3: "https://psv4.vk.me/c4795/u29104694/audios/3866277dca35.mp3"
		},
        {
            title: "Adrian von Ziegler – Fairy Forest",
            mp3: "https://psv4.vk.me/c536120/u30614770/audios/5c7795eddff0.mp3"
		},
        {
            title: "Adrian von Ziegler – Druidic Dreams",
            mp3: "https://psv4.vk.me/c536303/u20558250/audios/07a3e7451df3.mp3"
		},
        {
            title: "Adrian von Ziegler – A Celtic Tale",
            mp3: "https://psv4.vk.me/c521221/u12886143/audios/3a88ac400296.mp3"
		},
        {
            title: "Mac Quayle – DDoS Hacking Song",
            mp3: "https://psv4.vk.me/c422625/u79652855/audios/ff17eca9f524.mp3"
		},
        {
            title: "Mac Quayle – Hacking Steal Mountain",
            mp3: "https://psv4.vk.me/c422723/u206935544/audios/81b8908fb670.mp3"
		},
        {
            title: "Max Quayle – Mr. Robot",
            mp3: "https://cs3-1v4.vk-cdn.net/p18/556f928ef81654.mp3"
		},
        {
            title: "Stellaris OST – In Search of Life",
            mp3: "https://psv4.vk.me/c611421/u256926301/audios/bf693891d370.mp3"
		},
        {
            title: "Stellaris OST – Faster Than Light",
            mp3: "https://psv4.vk.me/c611920/u256926301/audios/53936c1e4028.mp3"
		},
        {
            title: "Stellaris OST – The Celestial City",
            mp3: "https://psv4.vk.me/c611718/u352254402/audios/7beb63d750ca.mp3"
		},
        {
            title: "Mr. Carmack – I Always Loved This One",
            mp3: "https://psv4.vk.me/c536517/u65660106/audios/b9ad659b0bb1.mp3"
		},
        {
            title: "Mr. Carmack – Church",
            mp3: "https://psv4.vk.me/c6189/u7693542/audios/cb38d7daa858.mp3"
		},
        {
            title: "Cliff Martinez – Son Of Placenta Previa",
            mp3: "https://cs3-1v4.vk-cdn.net/p24/ce789bd7bccf4c.mp3"
		},
        {
            title: "Cliff Martinez – I’m in the Pink",
            mp3: "https://psv4.vk.me/c613916/u140130549/audios/0bfb7dc9a00c.mp3"
		},
        {
            title: "Cliff Martinez – Will It Hurt",
            mp3: "https://psv4.vk.me/c536510/u139587128/audios/791d429e6518.mp3"
		},
        {
            title: "Cliff Martinez – Resection",
            mp3: "https://psv4.vk.me/c613818/u41688806/audios/c54f60fe71f6.mp3"
		},
        {
            title: "Moby – Flower",
            mp3: "https://cs3-2v4.vk-cdn.net/p14/1291babe253370.mp3"
		},
        {
            title: "Moby – One Of These Mornings",
            mp3: "https://cs3-2v4.vk-cdn.net/p3/5d1aea7884dbc0.mp3"
		},
        {
            title: "Moby – Extreme Ways",
            mp3: "https://cs3-1v4.vk-cdn.net/p9/9f4d64d4fe4b69.mp3"
		},
        {
            title: "U137 – Anemone",
            mp3: "https://psv4.vk.me/c536409/u378026/audios/44725e2a14e7.mp3"
		},
        {
            title: "Akira Yamaoka – Welcome to Silent Hill",
            mp3: "https://cs3-1v4.vk-cdn.net/p15/28027352230b82.mp3"
		},
        {
            title: "Akira Yamaoka – Lisa Die",
            mp3: "https://psv4.vk.me/c1023/u3779076/audios/f7ff718b1121.mp3"
		},
        {
            title: "Jeff Russo – Bemidji, MN",
            mp3: "https://cs3-2v4.vk-cdn.net/p20/ac3284e551676d.mp3"
		},
        {
            title: "Brian Eno – The Big Ship",
            mp3: "https://psv4.vk.me/c5004/u1546305/audios/a2c3835f0e5a.mp3"
		},
        {
            title: "Gustavo Santaolalla – The Last Of Us",
            mp3: "https://cs3-2v4.vk-cdn.net/p15/9fb1d701ab9fbc.mp3"
		},
        {
            title: "Gustavo Santaolalla – The Choice",
            mp3: "https://cs3-2v4.vk-cdn.net/p17/78664089331cd2.mp3"
		},
        {
            title: "Gustavo Santaolalla – The Path",
            mp3: "https://psv4.vk.me/c536301/u19468351/audios/44ce2d4ec85a.mp3"
		},
        {
            title: "Gustavo Santaolalla – Home",
            mp3: "https://cs3-2v4.vk-cdn.net/p1/618e327669d74e.mp3"
		},
        {
            title: "Jeremy Soule – Secunda",
            mp3: "https://psv4.vk.me/c5825/u9703523/audios/c0f32b7a7a44.mp3"
		},
        {
            title: "The End of the Ocean – Worth Everything",
            mp3: "https://psv4.vk.me/c4976/u2204725/audios/fbdd014f5024.mp3"
		},
        {
            title: "The End Of The Ocean – Setting Sail",
            mp3: "https://psv4.vk.me/c4898/u5701450/audios/c73355e72a09.mp3"
		},
        {
            title: "Duster – Gold Dust",
            mp3: "https://psv4.vk.me/c521507/u20056524/audios/b05533f4a5d4.mp3"
		},
        {
            title: "Scondi – Night City",
            mp3: "https://psv4.vk.me/c611717/u42660230/audios/d50e7d4e8bca.mp3"
		},
        {
            title: "99 FrankOFF – Island of Hope",
            mp3: "https://psv4.vk.me/c613227/u42433384/audios/552f45ab9ed5.mp3"
		},
        {
            title: "99 FrankOFF – Birds dream at Night",
            mp3: "https://psv4.vk.me/c613818/u42433384/audios/511bd1d244e0.mp3"
		},
        {
            title: "009 Sound System – Trinity",
            mp3: "https://psv4.vk.me/c5005/u83454945/audios/6fc58b7f57b6.mp3"
		},
        {
            title: "Power Glove – Power Core",
            mp3: "https://psv4.vk.me/c521513/u203679369/audios/daf370163ca9.mp3"
		},
        {
            title: "Power Glove – Blood Dragon",
            mp3: "https://cs3-2v4.vk-cdn.net/p4/7fd83e8f76dc28.mp3"
		},
        {
            title: "Max Quayle – Processing",
            mp3: "https://cs3-2v4.vk-cdn.net/p24/363ac92da202f7.mp3"
		},
        {
            title: "Ludovico Einaudi – Drop",
            mp3: "https://cs3-1v4.vk-cdn.net/p19/13bdb8345376ce.mp3"
		},
        {
            title: "Ludovico Einaudi – Elements",
            mp3: "https://psv4.vk.me/c422224/u48331226/audios/95feca28b3eb.mp3"
		},
        {
            title: "Ludovico Einaudi – Whirling Winds",
            mp3: "https://cs3-2v4.vk-cdn.net/p18/4762adea4fbda4.mp3"
		},
        {
            title: "Ludovico Einaudi – Twice",
            mp3: "https://cs3-2v4.vk-cdn.net/p8/e3238232461fe3.mp3"
		},
        {
            title: "Ludovico Einaudi – Numbers",
            mp3: "https://cs3-2v4.vk-cdn.net/p17/aff7283b918221.mp3"
		},
        {
            title: "tezce – apathy",
            mp3: "https://psv4.vk.me/c611523/u283305193/audios/e0bfb5c28ffd.mp3"
		},
        {
            title: "tezce – drown",
            mp3: "https://psv4.vk.me/c611523/u283305193/audios/dfa7f82e44f6.mp3"
		},
        {
            title: "tezce – i have no reason pt.2",
            mp3: "https://psv4.vk.me/c611523/u283305193/audios/977c10dfa354.mp3"
		},
        {
            title: "Atanas Valkov – For Honor",
            mp3: "https://psv4.vk.me/c611519/u86635051/audios/89e87f72c9e5.mp3"
		},
        {
            title: "John Williams – Hedwigs",
            mp3: "https://cs3-1v4.vk-cdn.net/p8/f05b991d7be2e8.mp3"
		},
        {
            title: "The Toxic Avenger – Make This Right",
            mp3: "https://cs3-1v4.vk-cdn.net/p7/b4962cee9f4cd8.mp3"
		},
        {
            title: "Ashtar Command – Deadman's Gun",
            mp3: "https://cs3-1v4.vk-cdn.net/p21/b1a57f72886616.mp3"
		},
        {
            title: "N'to – Trauma (worakls remix)",
            mp3: "https://psv4.vk.me/c6133/u5255366/audios/7962f5c1a971.mp3"
		},
        {
            title: "N'to–Time",
            mp3: "https://cs3-2v4.vk-cdn.net/p9/99fada10e9e737.mp3"
		},
        {
            title: "N'to – Utopia",
            mp3: "https://cs3-1v4.vk-cdn.net/p24/9039f45fad0fc8.mp3"
		},
        {
            title: "N'to – The Bosnian",
            mp3: "https://psv4.vk.me/c6191/u88144527/audios/282f2de0317e.mp3"
		},
        {
            title: "N'to – Dance Me",
            mp3: "https://psv4.vk.me/c536219/u88144527/audios/72e326da1d9d.mp3"
		},
        {
            title: "GK – Three",
            mp3: "https://psv4.vk.me/c536311/u66311639/audios/b930c582385b.mp3"
		},
        {
            title: "GK – Four",
            mp3: "https://psv4.vk.me/c536513/u66311639/audios/b211c2ee9cc4.mp3"
		},
        {
            title: "podval capella – sugar",
            mp3: "https://cs3-1v4.vk-cdn.net/p23/f25e3f2f7a2026.mp3"
		},
        {
            title: "podval capella – endorphin",
            mp3: "https://cs3-1v4.vk-cdn.net/p20/d45ff09623903c.mp3"
		},
        {
            title: "Run Vaylor – Steel Kingdom",
            mp3: "https://psv4.vk.me/c611326/u72683745/audios/c443b34087cc.mp3"
		},
        {
            title: "Run Vaylor – Robot Skin",
            mp3: "https://psv4.vk.me/c611326/u72683745/audios/a6c95916379c.mp3"
		},
        {
            title: "Really Slow Motion – Gender",
            mp3: "https://psv4.vk.me/c536214/u27162156/audios/3c400bc219e5.mp3"
		},
        {
            title: "Arcade Fire – Song On The Beach",
            mp3: "https://psv4.vk.me/c6191/u8954795/audios/35243a725298.mp3"
		},
        {
            title: "Bloc Party – Signs (Acoustic)",
            mp3: "https://psv4.vk.me/c5007/u3135082/audios/af6520997cfe.mp3"
		},
        {
            title: "No More Room in Hell – OST",
            mp3: "https://cs3-1v4.vk-cdn.net/p9/7a7ab0bdca3834.mp3"
		},
        {
            title: "Hans Zimmer – Cornfield Chase",
            mp3: "https://cs3-1v4.vk-cdn.net/p14/5075e215ce4cc6.mp3"
		},
        {
            title: "Hans Zimmer – Coward",
            mp3: "https://cs3-1v4.vk-cdn.net/p17/029fac336959a5.mp3"
		},
        {
            title: "Valiant Hearts – Main Theme",
            mp3: "https://cs3-2v4.vk-cdn.net/p5/14383a6a262071.mp3"
		},
        {
            title: "Henry Jackman – Reunited",
            mp3: "https://cs3-1v4.vk-cdn.net/p18/8cf5c49a69e062.mp3"
		},
        {
            title: "The Hit House – Nathan's Brain",
            mp3: "https://psv4.vk.me/c613726/u65042827/audios/45ba26a2bf46.mp3"
		},
        {
            title: "M83 – Moonchild",
            mp3: "https://cs3-2v4.vk-cdn.net/p15/9c51c8042cfef6.mp3"
		}

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
    $("#jp_container .track").click(function (e) {
        my_trackName.text($(this).text());
        my_jPlayer.jPlayer("setMedia", {
            mp3: $(this).attr("href")
        });
        if ((opt_play_first && first_track) || (opt_auto_play && !first_track)) {
            my_jPlayer.jPlayer("play");
        }
        first_track = false;
        $(this).blur();
        return false;
    });

    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('.jp-30s').click(function () {
            $("#jquery_jplayer_1").jPlayer("play", ($("#jquery_jplayer_1").data("jPlayer").status.currentTime) - 30);
        });

        var vol = $("#jquery_jplayer_1").data("jPlayer").status.Volume;

        $('.jp-plus30s').click(function () {
            $("#jquery_jplayer_1").jPlayer("play", ($("#jquery_jplayer_1").data("jPlayer").status.currentTime) + 30);
        });
    }
});