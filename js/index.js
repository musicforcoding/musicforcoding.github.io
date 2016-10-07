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
            title: "Low Orbit Drift – Moon",
            mp3: "src/Low Orbit Drift - Moon.mp3"
		},
        {
            title: "Low Orbit Drift – Cluster",
            mp3: "src/Low Orbit Drift - Cluster.mp3"
		},
        {
            title: "Low Orbit Drift – Shuttle",
            mp3: "src/Low Orbit Drift - Shuttle.mp3"
		},
        {
            title: "Low Orbit Drift – Time Shift",
            mp3: "src/Low Orbit Drift - Time Shift.mp3"
		},
        {
            title: "Low Orbit Drift – Halo Green",
            mp3: "src/Low Orbit Drift - Halo Green.mp3"
		},
        {
            title: "Low Orbit Drift – Undefined Black Hole",
            mp3: "src/Low Orbit Drift - Undefined Black Hole.mp3"
		},
        {
            title: "Artemev – Pohod",
            mp3: "src/ac92b87db80e.mp3"
		},
        {
            title: "Artemev – Voditel Dlya Veryi",
            mp3: "src/Эдуард Артемьев - Водитель для Веры.mp3"
		},
        {
            title: "Artemev – Son",
            mp3: "src/Эдуард Артемьев - Сон.mp3"
		},
        {
            title: "Artemev – Veter Nadesjdyi",
            mp3: "src/Эдуард Артемьев - Ветер надежды.mp3"
		},
        {
            title: "Artemev – Oni Shli Dolgo",
            mp3: "src/Эдуард Артемьев - Они шли долго (Сталкер).mp3"
		},
        {
            title: "Artemev - grust",
            mp3: "src/Эдуард Артемьев - Грусть (кф Родня).mp3"
		},
        {
            title: "Artemev – Kur'er",
            mp3: "src/Эдуард Артемьев - Курьер.mp3"
		},
        {
            title: "Kai Engel – Summer Days",
            mp3: "src/Kai Engel - Summer Days.mp3"
		},
        {
            title: "Kai Engel – Story About Sun and Moon",
            mp3: "src/Kai Engel - Endless Story About Sun and Moon.mp3"
		},
        {
            title: "Kai Engel – Highway to the Stars",
            mp3: "src/Kai Engel - Highway to the Stars.mp3"
		},
        {
            title: "Kai Engel – Silence",
            mp3: "src/Kai Engel - Silence.mp3"
		},
        {
            title: "Kai Engel – Cutrains Are Always Drawn",
            mp3: "src/Kai Engel - Cutrains Are Always Drawn.mp3"
		},
        {
            title: "Kai Engel – Mist And Clouds",
            mp3: "src/Kai Engel - Mist And Clouds.mp3"
		},
        {
            title: "Kai Engel – Sunset",
            mp3: "src/Kai Engel - Sunset.mp3"
		},
        {
            title: "Kai Engel – Brooks",
            mp3: "src/Kai Engel - Brooks.mp3"
		},
        {
            title: "Kai Engel – Idea",
            mp3: "src/Kai Engel - Idea.mp3"
		},
        {
            title: "Kai Engel – Low Horizon",
            mp3: "src/Kai Engel - Low Horizon.mp3"
		},
        {
            title: "Kai Engel – Wake Up!",
            mp3: "src/Kai Engel - Wake Up#33;.mp3"
		},
        {
            title: "Kai Engel – Dancing on the Edge",
            mp3: "src/Kai Engel - Dancing on the Edge.mp3"
		},
        {
            title: "PILOTPRIEST – Matter",
            mp3: "src/PILOTPRIEST - Matter.mp3"
		},
        {
            title: "PILOTPRIEST – Now Be The Light",
            mp3: "src/PILOTPRIEST - Now Be The Light.mp3"
		},
        {
            title: "PILOTPRIEST – Entrance",
            mp3: "src/PILOTPRIEST - Entrance.mp3"
		},
        {
            title: "PILOTPRIEST – Softcore",
            mp3: "src/PILOTPRIEST - Softcore.mp3"
		},
        
        {
            title: "Adrian von Ziegler – Fairy Forest",
            mp3: "src/Adrian von Ziegler - Fairy Forest.mp3"
		},
        {
            title: "Adrian von Ziegler – Druidic Dreams",
            mp3: "src/Adrian von Ziegler - Druidic Dreams.mp3"
		},
        {
            title: "Adrian von Ziegler – A Celtic Tale",
            mp3: "src/Adrian von Ziegler - A Celtic Tale.mp3"
		},
        {
            title: "Mac Quayle – DDoS Hacking Song",
            mp3: "src/(Mr.Robot 1x04) Mac Quayle - DDoS Hacking Song.mp3"
		},
        {
            title: "Mac Quayle – Hacking Steal Mountain",
            mp3: "src/Mac Quayle - Hacking Steal Mountain.mp3"
		},
        {
            title: "Max Quayle – Mr. Robot",
            mp3: "src/Max Quayle - Mr. Robot OST (Main Theme).mp3"
		},
        {
            title: "Stellaris OST – In Search of Life",
            mp3: "src/Stellaris OST - In Search of Life.mp3"
		},
        {
            title: "Stellaris OST – Faster Than Light",
            mp3: "src/Stellaris OST - Faster Than Light (Feat. Mia Stegmar).mp3"
		},
        {
            title: "Stellaris OST – The Celestial City",
            mp3: "src/Stellaris OST - The Celestial City.mp3"
		},
        {
            title: "Mr. Carmack – I Always Loved This One",
            mp3: "src/Mr. Carmack - i always loved this one.mp3"
		},
        {
            title: "Mr. Carmack – Church",
            mp3: "src/Mr. Carmack - Church.mp3"
		},
        {
            title: "Cliff Martinez – Son Of Placenta Previa",
            mp3: "src/Cliff Martinez - Son Of Placenta Previa.mp3"
		},
        {
            title: "Cliff Martinez – I’m in the Pink",
            mp3: "src/Cliff Martinez - I’m in the Pink.mp3"
		},
        {
            title: "Cliff Martinez – Will It Hurt",
            mp3: "src/Cliff Martinez - Will It Hurt.mp3"
		},
        {
            title: "Cliff Martinez – Resection",
            mp3: "src/Cliff Martinez - Necrotic Bowel Resection.mp3"
		},
        {
            title: "Moby – Flower",
            mp3: "src/Moby - Flower.mp3"
		},
        {
            title: "Moby – One Of These Mornings",
            mp3: "src/Moby - One Of These Mornings.mp3"
		},
        {
            title: "Moby – Extreme Ways",
            mp3: "src/Moby - Extreme Ways.mp3"
		},
        {
            title: "U137 – Anemone",
            mp3: "src/U137 - Anemone.mp3"
		},
        {
            title: "Akira Yamaoka – Welcome to Silent Hill",
            mp3: "src/Akira Yamaoka - Welcome to Silent Hill.mp3"
		},
        {
            title: "Akira Yamaoka – Lisa Die",
            mp3: "src/Akira Yamaoka - Lisa Die.mp3"
		},
        {
            title: "Jeff Russo – Bemidji, MN",
            mp3: "src/Jeff Russo - Bemidji, MN (Fargo Series Main Theme).mp3"
		},
        {
            title: "Brian Eno – The Big Ship",
            mp3: "src/Brian Eno - The Big Ship.mp3"
		},
        {
            title: "Gustavo Santaolalla – The Last Of Us",
            mp3: "src/Gustavo Santaolalla - The Last Of Us (You and Me).mp3"
		},
        {
            title: "Gustavo Santaolalla – The Choice",
            mp3: "src/Gustavo Santaolalla - The Choice  (OST The Last Of Us).mp3"
		},
        {
            title: "Gustavo Santaolalla – The Path",
            mp3: "src/Gustavo Santaolalla - The Path.mp3"
		},
        {
            title: "Gustavo Santaolalla – Home",
            mp3: "src/Gustavo Santaolalla - Home  (OST The Last Of Us).mp3"
		},
        {
            title: "Jeremy Soule – Secunda",
            mp3: "src/Jeremy Soule (The Elder Scrolls V Skyrim) - Secunda.mp3"
		},
        {
            title: "The End of the Ocean – Worth Everything",
            mp3: "src/The End of the Ocean - worth everything ever wished for.mp3"
		},
        {
            title: "The End Of The Ocean – Setting Sail",
            mp3: "src/The End Of The Ocean - Setting Sail.mp3"
		},
        {
            title: "Duster – Gold Dust",
            mp3: "src/Duster - Gold Dust.mp3"
		},
        {
            title: "Scondi – Night City",
            mp3: "src/Scondi - night city.mp3"
		},
        {
            title: "99 FrankOFF – Island of Hope",
            mp3: "src/99 FrankOFF - Island of Hope (Sketches of Memoirs, 2015).mp3"
		},
        {
            title: "99 FrankOFF – Birds dream at Night",
            mp3: "src/99 FrankOFF - Birds dream at Night (Sketches of Memoirs, 2015).mp3"
		},
        {
            title: "009 Sound System – Trinity",
            mp3: "src/009 Sound System - Trinity.mp3"
		},
        {
            title: "Power Glove – Power Core",
            mp3: "src/Power Glove (Far Cry 3 - Blood Dragon OST) - Power Core.mp3"
		},
        {
            title: "Power Glove – Blood Dragon",
            mp3: "src/Power Glove - Blood Dragon Theme.mp3"
		},
        {
            title: "Mac Quayle - I Hate Society",
            mp3: "src/Mac Quayle - I Hate Society.mp3"
		},
        {
            title: "Ludovico Einaudi – Drop",
            mp3: "src/Ludovico Einaudi - Drop.mp3"
		},
        {
            title: "Ludovico Einaudi – Elements",
            mp3: "src/Ludovico Einaudi - Elements.mp3"
		},
        {
            title: "Ludovico Einaudi – Whirling Winds",
            mp3: "src/Ludovico Einaudi - Whirling Winds.mp3"
		},
        {
            title: "Ludovico Einaudi – Twice",
            mp3: "src/Ludovico Einaudi - Twice.mp3"
		},
        {
            title: "Ludovico Einaudi – Numbers",
            mp3: "src/Ludovico Einaudi - Numbers.mp3"
		},
        {
            title: "tezce – apathy",
            mp3: "src/tezce - apathy.mp3"
		},
        {
            title: "tezce – drown",
            mp3: "src/tezce - drown.mp3"
		},
        {
            title: "tezce – i have no reason pt.2",
            mp3: "src/tezce - i have no reason pt.2.mp3"
		},
        {
            title: "Atanas Valkov – For Honor",
            mp3: "src/Atanas Valkov - For HonorHonour.mp3"
		},
        {
            title: "John Williams – Hedwigs",
            mp3: "src/John Williams - Hedwigs Theme.mp3"
		},
        {
            title: "The Toxic Avenger – Make This Right",
            mp3: "src/The Toxic Avenger - Make this right.mp3"
		},
        {
            title: "Ashtar Command – Deadman's Gun",
            mp3: "src/Ashtar Command - Deadman#39;s Gun.mp3"
		},
        {
            title: "N'to – Trauma (worakls remix)",
            mp3: "src/N#39;to - Trauma (Worakls remix) (ТМ).mp3"
		},
        {
            title: "N'to–Time",
            mp3: "src/N#39;to - Time.mp3"
		},
        {
            title: "N'to – Utopia",
            mp3: "src/N#39;to - Utopia.mp3"
		},
        {
            title: "N'to – The Bosnian",
            mp3: "src/N#39;to - The Bosnian.mp3"
		},
        {
            title: "N'to – Dance Me",
            mp3: "src/N#39;to - Dance Me.mp3"
		},
        {
            title: "GK – Three",
            mp3: "src/GK - Three.mp3"
		},
        {
            title: "GK – Four",
            mp3: "src/GK - Four.mp3"
		},
        {
            title: "podval capella – sugar",
            mp3: "src/podval capella - sugar.mp3"
		},
        {
            title: "podval capella – endorphin",
            mp3: "src/podval capella - endorphin.mp3"
		},
        {
            title: "Run Vaylor – Steel Kingdom",
            mp3: "src/Run Vaylor - Steel Kingdom.mp3"
		},
        {
            title: "Run Vaylor – Robot Skin",
            mp3: "src/Run Vaylor - Robot Skin.mp3"
		},
        {
            title: "Really Slow Motion – Gender",
            mp3: "src/Really Slow Motion - Gender.mp3"
		},
        {
            title: "Arcade Fire – Song On The Beach",
            mp3: "src/Arcade Fire - Song On The Beach.mp3"
		},
        {
            title: "Bloc Party – Signs (Acoustic)",
            mp3: "src/Bloc Party - Signs (Acoustic).mp3"
		},
        {
            title: "No More Room in Hell – OST",
            mp3: "src/No More Room in Hell - OST Menu theme.mp3"
		},
        {
            title: "Hans Zimmer – Cornfield Chase",
            mp3: "src/Hans Zimmer - Cornfield Chase.mp3"
		},
        {
            title: "Hans Zimmer – Coward",
            mp3: "src/Hans Zimmer - 13. Coward [OST Интерстеллар].mp3"
		},
        {
            title: "Valiant Hearts – Main Theme",
            mp3: "src/Valiant Hearts the Great War - Main Theme.mp3"
		},
        {
            title: "Henry Jackman – Reunited",
            mp3: "src/Henry Jackman (OST Uncharted 4 a thief#039;s end) - Reunited.mp3"
		},
        {
            title: "The Hit House – Nathan's Brain",
            mp3: "src/The Hit House - Nathan#039;s Brain (Pixies - Where is my mind cover).mp3"
		},
        {
            title: "M83 – Moonchild",
            mp3: "src/M83 - Moonchild (OST BBC Top Gear).mp3"
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

        $('.jp-30s').click(function () {
            $("#jquery_jplayer_1").jPlayer("play", ($("#jquery_jplayer_1").data("jPlayer").status.currentTime) - 30);
        });

        var vol = $("#jquery_jplayer_1").data("jPlayer").status.Volume;

        $('.jp-plus30s').click(function () {
            $("#jquery_jplayer_1").jPlayer("play", ($("#jquery_jplayer_1").data("jPlayer").status.currentTime) + 30);
        });
});