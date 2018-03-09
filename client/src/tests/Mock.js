

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
}
