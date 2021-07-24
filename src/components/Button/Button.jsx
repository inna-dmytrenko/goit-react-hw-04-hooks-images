
import { ButtonClick } from './Button.styled'

const Button = ({ onLoadMore }) => {
  return (
    <ButtonClick onClick={onLoadMore} type="button">
      Load more
    </ButtonClick>
  )
}
export default Button

