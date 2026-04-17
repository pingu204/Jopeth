import { useEffect, useState } from "react"

const API_KEY = "fe00a3010a03fabd46b5a781426f1f62"

interface Info {
    image: {
        "#text": string
    }[];
    name: string;
    "@attr"?: {
        "nowplaying": string
    };
}

export function useLastFm() {
    const [recentTrack, setRecentTrack] = useState<Info | null>(null)
    const [topTrack, setTopTrack] = useState<Info | null>(null)
    const [topArtist, setTopArtist] = useState<Info | null>(null)
    const [topAlbum, setTopAlbum] = useState<Info | null>(null)

    const fetchRecentTrack = async () => {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bopieee754&api_key=${API_KEY}&format=json&limit=1`)

        if (response.ok) {
            const data = await response.json()
            setRecentTrack(data.recenttracks.track[0])
        }
    }

    const fetchAlbumInfo = async (artist: string, album: string) => {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${artist}&album=${album}&api_key=${API_KEY}&format=json`)

        if (response.ok) {
            const data = await response.json()
            setTopAlbum(data.album)
        }
    }

    const fetchTopAlbums = async (artist: string) => {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`)

        if (response.ok) {
            const data = await response.json()
            return data
        }

        return null
    }

    const fetchTopAlbum = async () => {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=bopieee754&api_key=${API_KEY}&format=json`)

        if (response.ok) {
            const data = await response.json()
            const album = data.weeklyalbumchart.album[0]
            fetchAlbumInfo(album.artist["#text"], album.name)
        }
    }

    const fetchTopTrack = async () => {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=bopieee754&api_key=${API_KEY}&format=json`)

        if (response.ok) {
            const data = await response.json()
            const track = data.weeklytrackchart.track[0]
            setTopTrack(track)
        }
    }

    const fetchTopArtist = async () => {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=bopieee754&api_key=${API_KEY}&format=json`)

        if (response.ok) {
            const data = await response.json()
            const artist = data.weeklyartistchart.artist[0]

            const topAlbums = await fetchTopAlbums(artist.name)

            if (topAlbums) {
                const images = topAlbums.topalbums.album[0].image

                artist["image"] = images
            }
            setTopArtist(artist)
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