import CustomImage from '../image/custom_image'
import EmojiPicker from 'emoji-picker-react'
import "./comments.css"
import { useState } from 'react'

const Comments = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='comments'>
      <div className='commentList'>
        <span className='commentCount'>5 Comments</span>
        {/* COMMENTS */}
        <div className='comment'>
          <CustomImage path="/general/noAvatar.png" alt="" />
          <div className='commentContent'>
            <span className='commentUsername'> John Doe </span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        <div className='comment'>
          <CustomImage path="/general/noAvatar.png" alt="" />
          <div className='commentContent'>
            <span className='commentUsername'> John Doe </span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        <div className='comment'>
          <CustomImage path="/general/noAvatar.png" alt="" />
          <div className='commentContent'>
            <span className='commentUsername'> John Doe </span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        <div className='comment'>
          <CustomImage path="/general/noAvatar.png" alt="" />
          <div className='commentContent'>
            <span className='commentUsername'> John Doe </span>
            <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
        <form className='commentForm'>
          <input type="text" placeholder='Add a comment' className='commentInput' />
          <div className='emoji'>
            <div onClick={() => setOpen(prev => !prev)}>👀</div>
            {open && <div className='emojiPicker'> 
            <EmojiPicker />
            </div>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Comments