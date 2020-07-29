import {
  faTrash,
  faStar,
  faStarHalf,
  faStarHalfAlt,
  faComment,
  faHome,
  faPencilAlt,
  faHeart,
  faThumbsUp,
  faThumbsDown,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const Icons = () => {
  return library.add(
    faTrash,
    faStar,
    faStarHalf,
    faStarHalfAlt,
    faComment,
    faHome,
    faPencilAlt,
    faHeart,
    faThumbsUp,
    faThumbsDown
  )
}

export default Icons
