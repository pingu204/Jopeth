import { SEARCH_TYPE } from "../enums"

export function useGetMusicInfo() {
    
    const search = async (query: string, entity: string) => {
        const url = `https://itunes.apple.com/search?term=${query}&entity=${entity}&limit=1`
        const response = await fetch(url)
        
        if (response.ok) {
            const data = await response.json()

            return data?.results?.[0]
        }
    }   
    
    const fetchTrackInfo = (title: string, artist: string) => {
        const query = encodeURIComponent(`${title} ${artist}`);
        
        return search(query, SEARCH_TYPE.TRACK)
    }

    const fetchAlbumInfo = (title: string, artist: string) => {
        const query = encodeURIComponent(`${title} ${artist}`);
        
        return search(query, SEARCH_TYPE.ALBUM)
    }

    const fetchArtistInfo = (artist: string) => {
        const query = encodeURIComponent(`${artist}`);
        
        return search(query, SEARCH_TYPE.TRACK)
    }

    return { fetchTrackInfo, fetchAlbumInfo, fetchArtistInfo }
}