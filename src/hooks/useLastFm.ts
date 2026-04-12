import { useEffect, useState } from "react"

const API_KEY = "fe00a3010a03fabd46b5a781426f1f62"

export function useLastFm() {
    const [recentTrack, setRecentTrack] = useState(null)
    const [topTrack, setTopTrack] = useState(null)
    const [topArtist, setTopArtist] = useState(null)
    const [topAlbum, setTopAlbum] = useState(null)

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
            // setTopAlbum(data.weeklyalbumchart.album[0])
            fetchAlbumInfo(data.weeklyalbumchart.album[0].mbid)
        }
    }

    const fetchTopTrack = async () => {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=bopieee754&api_key=${API_KEY}&format=json`)
        
        if (response.ok) {
            const data = await response.json()
            setTopTrack(data.weeklytrackchart.track[0])
            console.log(data.weeklytrackchart.track[0])
        }
    }

    const fetchTopArtist = async () => {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=bopieee754&api_key=${API_KEY}&format=json`)
        
        if (response.ok) {
            const data = await response.json()
            setTopArtist(data.weeklyartistchart.artist[0])
            console.log(data.weeklyartistchart.artist[0])
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