import { useState, useEffect} from 'react'

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

export default function WebPlayer(props) {

    const [player, setPlayer] = useState(undefined);
    const [is_paused, setPaused] = useState(true);
    const [is_active, setActive] = useState(false);
    const [current_track, setTrack] = useState(track);

    const [deviceID, setDeviceID] = useState()
    const [playAlbum, setPlayAlbum] = useState(false)
    
    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        window.onSpotifyWebPlaybackSDKReady = () => {
    
            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });

            console.log('player', player)
    
            setPlayer(player);
    
            player.addListener('ready', ({ device_id }) => {
                setDeviceID(device_id)
                console.log('Ready with Device ID', device_id);
            });
    
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });
    
            player.addListener('player_state_changed', ( state => {

                console.log('State changed', state)

                if (!state) {
                    return;
                }
            
                setTrack(state.track_window.current_track);
                setPaused(state.paused);
            
            
                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });
            
            }));
    
            player.connect(); 
    
        };

    }, []);

    const handleClick = () => {
        console.log('clicked')
        setPlayAlbum(!playAlbum)
    }

    useEffect(() => {

        console.log('use effect')

        const getAlbum = async () => {
            const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceID}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Basic ${props.token}`,
                    'Content-Type': 'application/json',
                },
                body: {
                    "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                }   
            });
           
            const data = await response.json();
            console.log('data', data)

            return data
        };

        if(playAlbum && props.token && deviceID){
            getAlbum()
        }

    }, [playAlbum])

    return (
        <div className="text-white flex flex-col w-60">
            <img src={current_track.album.images[0].url} alt="" />
            <div>{current_track.name}</div>
            <div>{current_track.artists[0].name}</div>
            <button className="mt-4 p-2 bg-neutral-800" onClick={handleClick}>Get Album to Play</button>
        </div>
    )
    
}
