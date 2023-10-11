import { Box } from '@mui/material'
import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])
    const {id} = useParams();
    
    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data)=> setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=> setVideos(data?.items))
        
    }, [id])  
    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{ 
                    zIndex: 10,height: '300px', 
                    backgroundColor: 'linear-gradient(90deg, rgba(174,183,238,1) 0%, rgba(236,179,201,1) 47%, rgba(148,233,185,1) 99%);',
                    background: 'rgb(174,183,238)'
                }}/>

                <ChannelCard channelDetail={channelDetail} marginTop='-110px'  />
            </Box>
            <Box display='flex' p="2">
                <Box sx={{mr: {sm: '100px'}}} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail
