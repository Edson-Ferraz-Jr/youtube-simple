import { createContext, useEffect, useState } from "react";

import api from "../api";

export const VideosContext = createContext({} as any);

export const VideosStorage = ({ children }: any) => {
    const createVideo = (token: string, title: string, description: string, user_id: string) => {
        api.post('/videos/create-video', { title, description, user_id }, { headers: { Authorization: token } }).then(({ data }) => {            
            console.log(data)
        }).catch((error) => {
            
        });
    };

    const deleteVideo = (token: string, video_id: string) => {
        api.delete(`/videos/delete/${video_id}`, { headers: { Authorization: token } }).then(({ data }) => {
            console.log(data);
        }).catch((error) => {

        });
    };

    const editVideo = (token: string, title: string, description: string, video_id: string) => {
        api.post('/videos/update-video', { title, description, video_id }, { headers: { Authorization: token } }).then(({ data }) => {
            console.log(data);
        }).catch((error) => {

        });
    };

    return (
        <VideosContext.Provider value={{
            createVideo,
            deleteVideo,
            editVideo
        }}>
            { children }
        </VideosContext.Provider>
    )
};
