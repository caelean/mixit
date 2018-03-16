

export default class SpotifyMock {

    getUserPlaylists() {
        const ans = {
            playlist: {
                name: 'name',
                track: {
                    total: 100
                }
            }
        };
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, ans);
        });
    }

    getPlaylistTracks(a, b) {
        const ans = {
            song: {
                track: {
                    name: 'name',
                    artists: [{
                        name: 'name'
                    }]
                }
            }
        };
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, ans);
        });
    }

    returnUser() {
        return 'username';
    }

    returnId() {
        return'123';
    }

}
