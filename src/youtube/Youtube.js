import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Youtube.css"; 

const Youtube = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [channelId, setChannelId] = useState('UCVTZyDqIWxzaGtkK6Lyt8Lg');

    const API_KEY = 'AIzaSyCxQBI5BHCWcaOJ1yEhdkyPq6t4oeJfcnE'; 
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await axios.get(BASE_URL, {
                    params: {
                        part: 'snippet',
                        channelId,
                        maxResults: 5, 
                        type: 'video',
                        key: API_KEY,
                    },
                });

                setVideos(response.data.items);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideos();
    }, [channelId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="video-grid">
            {videos.map((video) => (
                <div key={video.id.videoId} className="video-card">
                    <iframe
                        width="560"
                        height="400"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="video-info">
                        <h2>{video.snippet.title}</h2>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Youtube;
