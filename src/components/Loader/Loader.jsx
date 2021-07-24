import Loader from 'react-loader-spinner'
import { LoaderStyled } from './Loader.styled'

const PhotoLoader = () => {
  return (
    <LoaderStyled>
      <Loader type="Grid" color="#00BFFF" height={80} width={80} />
    </LoaderStyled>
  )
}
export default PhotoLoader
