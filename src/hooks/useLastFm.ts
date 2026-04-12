import { useEffect, useState } from "react"
import { useGetMusicInfo } from "./useGetMusicInfo"

const API_KEY = "fe00a3010a03fabd46b5a781426f1f62"

export function useLastFm() {
    const [recentTrack, setRecentTrack] = useState(null)
    const [topTrack, setTopTrack] = useState(null)
    const [topArtist, setTopArtist] = useState(null)
    const [topAlbum, setTopAlbum] = useState(null)

    const { fetchTrackInfo, fetchArtistInfo } = useGetMusicInfo()

    const fetchRecentTrack = async () => {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bopieee754&api_key=${API_KEY}&format=json&limit=1`)
        
        if (response.ok) {
            const data = await response.json()
            setRecentTrack(data.recenttracks.track[0])
            console.log(data.recenttracks.track[0])
        }
    }

    const fetchAlbumInfo = async (mbid: string) => {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&mbid=${mbid}&api_key=${API_KEY}&format=json`)

        if (response.ok) {
            const data = await response.json()
            setTopAlbum(data.album)
            console.log("top album", data.album)
        }
    }

    const fetchTopAlbum = async () => {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=bopieee754&api_key=${API_KEY}&format=json`)
        
        if (response.ok) {
            const data = await response.json()
            const albumMbid = data.weeklyalbumchart.album[0].mbid
            // console.log("top album", album)
            // // setTopAlbum(data.weeklyalbumchart.album[0])
            // const albumInfo = await fetchAlbumInfo(album.name, album.artist["#text"])
            // console.log("album", albumInfo)
            fetchAlbumInfo(albumMbid)
        }
    }

    const fetchTopTrack = async () => {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=bopieee754&api_key=${API_KEY}&format=json`)
        
        if (response.ok) {
            const data = await response.json()
            const track = data.weeklytrackchart.track[0]

            const trackInfo = await fetchTrackInfo(track.name, track.artist["#text"])
            setTopTrack(trackInfo)
            console.log("track", trackInfo)
        }
    }

    const fetchTopArtist = async () => {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=bopieee754&api_key=${API_KEY}&format=json`)
        
        if (response.ok) {
            const data = await response.json()
            const artist = data.weeklyartistchart.artist[0]

            const artistInfo = await fetchArtistInfo(artist.name)
            setTopArtist(artistInfo)
            console.log("artist", artistInfo)
        }
    }

    useEffect(() => {
        fetchRecentTrack()
        fetchTopAlbum()
        fetchTopArtist()
        fetchTopTrack()
    }, [])

    return {
        recentTrack,
        topTrack,
        topAlbum,
        topArtist,
    }
}