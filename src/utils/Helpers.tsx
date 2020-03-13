const GetPoster = (images: [], type: string) =>{
    let poster: any = images.filter((item: any) =>{
        return item.type === type;
    });
    return poster[0].url;
};

export {
    GetPoster
};