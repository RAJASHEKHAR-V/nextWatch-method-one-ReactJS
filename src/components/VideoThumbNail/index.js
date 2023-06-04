import {formatDistanceToNow} from 'date-fns'
import {
  VideoItem,
  ThumbNail,
  VideoDetailsCard,
  ChannelLogo,
  VideoDetails,
  VideoDescription,
  ChannelName,
  ViewsYearCard,
  Views,
  Year,
} from './componentStyle'

const VideoThumbNail = props => {
  const {eachVideoItem} = props
  const {title, thumbNailUrl, channel, viewCount, publishedAt} = eachVideoItem
  const {name, profileImageUrl} = channel
  const yearsAgo = formatDistanceToNow(new Date(publishedAt))

  return (
    <VideoItem>
      <ThumbNail src={thumbNailUrl} alt="video thumbnail" />
      <VideoDetailsCard>
        <ChannelLogo src={profileImageUrl} alt="channel logo" />
        <VideoDetails>
          <VideoDescription>{title}</VideoDescription>
          <ChannelName>{name}</ChannelName>
          <ViewsYearCard>
            <Views>{viewCount} Views</Views>
            <Year>.{yearsAgo} ago</Year>
          </ViewsYearCard>
        </VideoDetails>
      </VideoDetailsCard>
    </VideoItem>
  )
}

export default VideoThumbNail
